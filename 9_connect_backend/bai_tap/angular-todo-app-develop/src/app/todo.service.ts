import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// @ts-ignore
import {TodoClass} from './todoClass';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  API_URL = 'http://localhost:3000/toList';

  constructor(private httpClient: HttpClient) {
  }
  findById(todoId: number): Observable<TodoClass> {
    return this.httpClient.get<TodoClass>(this.API_URL + '/' + todoId);
  }

  findAll(): Observable<TodoClass[]> {
    return this.httpClient.get<TodoClass[]>(this.API_URL);
  }

  save(todo: TodoClass): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + '/' + todo.id, todo);
  }

  deleteTodo(todoId: number): Observable<TodoClass> {
    return this.httpClient.delete<TodoClass>(this.API_URL + '/' + todoId);
  }

  saveTodo(todo): Observable<TodoClass> {
    return this.httpClient.post<TodoClass>(this.API_URL, todo);
  }

}
