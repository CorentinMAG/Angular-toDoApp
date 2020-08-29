import { Injectable } from '@angular/core';
import Todo from '../model/todoModel';
import {Subject} from 'rxjs';

export type FILTERS = 'All' | 'Active' | 'Completed';

@Injectable({
  providedIn: 'root'
})
export class TodoStoreService {


  private filter: FILTERS = 'All';
  private todos: Todo[] = [
    {
      id: 0,
      title: 'Mon premier Todo',
      completed: false
    },
    {
      id: 1,
      title: 'Mon second todo',
      completed: false
    },
    {
      id: 2,
      title: 'Mon troisième todo',
      completed: false
  }];
  todoSubject = new Subject<Todo[]>();
  filterSubject = new Subject<FILTERS>();

  constructor() {
  }

  enableFilter(filter: FILTERS): void {
    this.filter = filter;
    this.emitFilter();
  }

  get myTodos(): Todo[] {
    return this.todos;
  }

  emitFilter(): void {
    this.filterSubject.next(this.filter);
  }
  emitTodo(): void {
    this.todoSubject.next(this.todos);
  }

  addTodo(todo: Todo): void {
    this.todos.unshift(todo);
    this.emitTodo();

  }

  removeTodo(todo: Todo): void {
    this.todos = this.todos.filter( t => t !== todo);
    this.emitTodo();
  }

  toggleTodo(todo: Todo): void {
    this.todos = this.todos.map( t => t === todo ? {...t, completed: !t.completed} : t);
    this.emitTodo();
  }

  updateTitle(title: string, todo: Todo): void {
    this.todos = this.todos.map(t => t === todo ? {...t, title} : t);
    this.emitTodo();
  }

  toggleAll(completed = true): void {
    this.todos = this.todos.map(t => completed !== t.completed ? {...t, completed} : t);
    this.emitTodo();
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(t => !t.completed);
    this.emitTodo();
  }
}
