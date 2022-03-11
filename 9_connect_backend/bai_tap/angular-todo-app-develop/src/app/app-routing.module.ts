import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {TodoUpdateComponent} from './todo-update/todo-update.component';
import {TodoCreateComponent} from './todo-create/todo-create.component';


const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: TodoComponent},
  {path: 'update/:id', component: TodoUpdateComponent},
  {path: 'create', component: TodoCreateComponent},
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
