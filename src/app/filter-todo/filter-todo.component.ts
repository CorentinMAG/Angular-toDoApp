import {Component, Input, OnInit} from '@angular/core';
import {TodoStoreService} from '../service/todo-store.service';

@Component({
  selector: 'app-filter-todo',
  templateUrl: './filter-todo.component.html',
  styleUrls: ['./filter-todo.component.css']
})
export class FilterTodoComponent implements OnInit {

  constructor(private todoService: TodoStoreService) { }
  all: boolean = true
  active: boolean = false
  completed: boolean = false

  ngOnInit() {
  }

  filterAll(): void {
    this.all = true
    this.active = false
    this.completed = false
    this.todoService.enableFilter('All')
  }

  filterActive(): void {
    this.all = false
    this.active = true
    this.completed = false
    this.todoService.enableFilter('Active')
  }

  filterCompleted(): void {
    this.all = false
    this.active = false
    this.completed = true
    this.todoService.enableFilter('Completed')

  }

}
