import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";


import { AppComponent } from './app.component'; // root component
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmojiComponent } from './components/emoji/emoji.component';

const appRoutes: Routes =[
  {path:'', component: TasksComponent },
  {path:'about', component: AboutComponent },
  {path:'emoji', component:EmojiComponent}

]





@NgModule({
  // DECLARATIONS are for components
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
    EmojiComponent
  ],
  // IMPORTS are for modules
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes /*, {enableTracing: true}*/) // enableTracing is to help debug the routes
  ],
  providers: [], // here goes any global services
  bootstrap: [AppComponent]
})
export class AppModule { }
