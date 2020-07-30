import { Component, OnInit } from '@angular/core';
import {TodoStoreService} from '../service/todo-store.service';
import Todo from '../model/todoModel';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  constructor(private todoStore: TodoStoreService) { }

  ngOnInit() {
  }

  createTodo(e): void {
    const todo: Todo = {
      id: this.todoStore.myTodos.length,
      title: e.target.value,
      completed: false
    }
    this.todoStore.addTodo(todo)
    e.target.value = ''

  }

}
