import { Component, OnInit } from '@angular/core';
import { UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";
import {Router} from '@angular/router'; // importing the router from angular to add on constructor

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'task-tracker';
  showAddTask!: boolean; // local property of this class component
  subscription!: Subscription;

// once again we pass/inject to the constructor the service we imported
  // so we can use this.uiService."any methods we make on UiService"
  constructor( private uiService:UiService, private router:Router) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
// here on the constructor we are getting the return of the observable we created "onToggle()"
  // AND then using ".subscribe()" to change the value of the local property showAddTask = to the value we observed
    // from the "Subject()" inside the ui.Service.ts
    // it kinda reminds of the useEffect in react
  }

  ngOnInit(): void { // life cycle method run stuff when the component loads
  }
toggleAddTask(){
  this.uiService.toggleAddTask()
  }

  hasRoute(route: string){
    return this.router.url === route; // this will return a true of false value
// here we use the property .router that we imported and passed to the constructor
    // since its type of "Router" it has the ".url" method
  }

}
