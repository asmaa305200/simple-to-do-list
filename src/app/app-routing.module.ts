import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';

const routes: Routes = [
  {path:"" , component:HomeComponent , title: "home"},
  {path:"add-task" , component:AddTaskComponent , title: "add-task"},
  {path:"task-details/:id" , component:TaskDetailsComponent , title: "task-details"},
  {path:"task-details" , component:TaskDetailsComponent , title: "task-details"},
  {path:"**" , component:NotFoundComponent , title:"notFound"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
