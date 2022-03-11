import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryDetailComponent} from "./dictionary-detail/dictionary-detail.component";
import {DictionaryComponent} from "./dictionary/dictionary.component";


// @ts-ignore
// @ts-ignore
const routes: Routes = [
  {
    path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: DictionaryComponent},
  {path: 'detail/:word', component: DictionaryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
