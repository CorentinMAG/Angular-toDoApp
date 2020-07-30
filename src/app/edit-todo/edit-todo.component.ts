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

  createTodo(): void {
    const input: HTMLInputElement = document.querySelector('input')
    const todo: Todo = {
      id: this.todoStore.myTodos.length,
      title: input.value,
      completed: false
    }
    this.todoStore.addTodo(todo)
    input.value = ''

  }

}
