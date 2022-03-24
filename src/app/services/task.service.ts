import { Injectable } from '@angular/core';
import {Task} from "../Task";
// import {TASKS} from '../mock-tasks'; no longer needed because now we taking the info from db.json
import {Observable} from 'rxjs'; // removed the "of" because HTTpClient already returns an observable
import {HttpClient, HttpHeaders} from '@angular/common/http';
// for HttpClient to work we also need to import HttpClientModule in app.module.ts


const httpOptions= { // allows us to send the content type in this case json
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http:HttpClient) { }

 /* getTasks() : Task[]{ this was the old way without observable
    return TASKS
  }*/
  /*getTasks(): Observable<Task[]>{
    const tasks = of(TASKS);
    return tasks;
    // this returned an async promise from the mock-tasks.ts file
  }*/
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
    // now this is observing the Task array then we did a get request of the apiUrl variable we created
  }

  deleteTasks(task: Task): Observable<Task> {
    const  url = `${this.apiUrl}/${task.id}`;
    // const url it's like this : `http://localhost:5000/tasks/${task.id}`
    return this.http.delete<Task>(url);

  }

  updateTaskReminder(task:Task): Observable<Task>{
    const  url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task , httpOptions)
    // the put has the url + task selected + httpOptions in this case JSON format

  }

  addTasks(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task , httpOptions)
  }


// VERY IMPORTANT NOTE: service.ts is where all the fetches/axios requests I used to do on React go, here on this file
// instead of having it inside a functional component i.e:
// I create the request "axios.get" here, and then I export to use
// on the "father component" tasks.component.ts
}
