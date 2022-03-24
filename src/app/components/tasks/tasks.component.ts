import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../services/task.service";
import {Task} from "../../Task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
 //  tasks: Task[] = TASKS; // tasks é Array com os types do Array Task e o value é = TASKS que é um array
  tasks: Task[] = []; // since we are importing now from a service we create property tasks as an empty array then
  // we add content to it with the service imported from constructor and loaded on "ngOnInit"
  constructor( private taskService: TaskService) { }
  // we inject the services we imported to the constructor as providers of content to use

  ngOnInit(): void {
    // this.tasks= this.taskService.getTasks(); // not the way we use for async code, for that we use Observables
    this.taskService.getTasks().subscribe((tasks)=> this.tasks = tasks)
    // this works a bit like promises in react , .subscribe is like a .then
    // and then we make this.tasks that was empty array to be equal to tasks from the observable service
  }

  deleteTask(task: Task){ // type Task = single object not the array that's why it's not type Task[]
    this.taskService.deleteTasks(task).subscribe(()=>
      this.tasks = this.tasks.filter( (t)=> t.id !== task.id ))
    /* o novo tasks array vai ser filtered e os elementos que vao ficar no novo array sao todos
     aqueles em que o t.id for diferente do task.id do elemento que clicámos */
  // the deleteTasks() is gonna delete the task from the DB and ".subscribe()" is the ".then(()=> do stuff)"
  }
  toggleReminder(task:Task){
    // all the orange "task" in all the functions are only being parameters
    // they could be anything i.e. like "task1" for example
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
    // This Service uses the "fetch.put" we did ".updatedTaskReminder(task)"
    // AND then ".subscribe()" so we keep the useState on the Observable<Task>
    // if we remove ".subscribe()" and refresh the page everything resets to the original state it had
    // the .subscribe() is what sends the state to the DB.json
  }

  addTask(task: Task) {
    this.taskService.addTasks(task).subscribe((task)=> this.tasks.push(task))
    // here I make Array.push(values of inserted task)
  }


}
