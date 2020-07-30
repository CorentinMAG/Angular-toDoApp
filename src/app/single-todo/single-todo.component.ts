import {Component, Input, OnInit} from '@angular/core';
import Todo from '../model/todoModel';
import {TodoStoreService} from '../service/todo-store.service';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})
export class SingleTodoComponent implements OnInit {

  private editing: boolean = false
  private title: string = ''

  constructor(private todoStore: TodoStoreService) { }

  @Input() todo: Todo;

  ngOnInit() {
  }

  get myTodo(): Todo {
    return this.todo
  }

  deleteTodo(): void {
    this.todoStore.removeTodo(this.myTodo)
  }

  toggleTodo(): void {
    this.todoStore.toggleTodo(this.myTodo)

  }

  startEditing(): void {
    this.editing = true
    this.title = this.myTodo.title
  }

  handleInput(e): void {
    this.title = e.target.value
  }

  updateTodo(): void {
    const input: HTMLInputElement = document.querySelector(`#todo_${this.myTodo.id}`)
    const newTitle: string = input.value
    this.todoStore.updateTitle(newTitle, this.myTodo)
    this.editing = false
  }

  removeChange(): void {
    this.title = this.myTodo.title
    this.editing = false
  }

}
