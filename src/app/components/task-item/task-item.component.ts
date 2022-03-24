import {Component, OnInit, Input, OutputDecorator, EventEmitter, Output} from '@angular/core';
import {Task} from '../../Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input() task!: Task; // here i created the property "task"
// Task é o Array com os typeOfs que vem do import de Task.ts
  faTimesProp = faTimes; // faTimes é uma PROP com o value de "faTimes" importado / criar props para usar no html

@Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
// onDeleteTask method que tem type of eventEmitter com formato do "Array of types" Task
// onDeleteTask is equal to new eventEmitter() that we are going to create this time with "this.onDeleteTask.emit(task)"
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
// these outputs like onToggleReminder is going to be used in the HTML of the parent file like a custom (click)=""
  constructor() { }

  ngOnInit(): void {}

  onDelete(task: Task){
    this.onDeleteTask.emit(task)
// this then goes for the task-item HTML file as (click)="onDelete(task)"
  }
  onToggle(task:Task) {
    this.onToggleReminder.emit(task);

  }

}
