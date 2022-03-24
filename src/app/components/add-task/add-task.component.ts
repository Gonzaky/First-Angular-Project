import { Component, OnInit , Output , EventEmitter} from '@angular/core';
import {Task} from "../../Task";
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
// here we created once again an output EventEmitter, "a custom click"
// this will then be used by the parent component html file as (onAddTask)="function()"

  // these are all properties we make for the class component ("its kinda local variables")
text!: string;
day!:string;
reminder: boolean = false;
showAddTask!: boolean;
subscription!: Subscription; //type of "Subscription method" from the "rxjs"

  constructor( private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)

  }

  ngOnInit(): void {}



  onSubmit(){
    if(!this.text){
      alert('Please add a task');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    // here we make the ".emit()" with the values of the variable newTask
    this.onAddTask.emit(newTask)

    this.text = '';
    this.day = '';
    this.reminder= false;

  }

}
