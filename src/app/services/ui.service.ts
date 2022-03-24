import { Injectable } from '@angular/core';
import { Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddTask():void {
    // console.log('test') this was being called by "this.uiService.toggleAddTask()" on the header.component.ts
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
    // method .next() which will pass the value to the "Subject<any>()" we want,
    // in this case is the current value of showAddTask
    // syntax is a bit similar to "new eventEmitter" with ".emit()"
  }

  onToggle():Observable<any>{
  return this.subject.asObservable()
    // here is returning the current value of the Subject() that's observing/watching
    // so when the value of the "Subject()" changes we want to ".subscribe(do something)"
    // this returns us the observable value we are watching of the "this.subject.next()"
  }
  // IMPORTANT NOTE: this entire ui.service.ts is our personal "useEffect" kinda like react
  // we can add here any events we want in case we want the ui to respond specific events in multiple components
}
