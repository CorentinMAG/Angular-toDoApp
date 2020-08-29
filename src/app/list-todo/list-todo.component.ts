import {Component, OnDestroy, OnInit} from '@angular/core';
import {FILTERS, TodoStoreService} from '../service/todo-store.service';
import Todo from '../model/todoModel';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css'],
})
export class ListTodoComponent implements OnInit, OnDestroy {

  private todos: Todo[];
  currentFilter: FILTERS;
  private todoSubscription: Subscription;
  private filterSubscription: Subscription;

  constructor(private todoService: TodoStoreService) { }

  ngOnInit(): void {
    this.todoSubscription = this.todoService.todoSubject.subscribe(
      (todos: Todo[]) => {
        this.todos = todos;
      }
    );
    this.todoService.emitTodo();

    this.filterSubscription = this.todoService.filterSubject.subscribe(
      (filter: FILTERS) => {
        this.currentFilter = filter;
      }
    );
    this.todoService.emitFilter();
  }

  get todolength(): number {
    const active: Todo[] = this.todos.filter(t => t.completed === false);
    return active.length;
  }

  ngOnDestroy(): void {
    this.todoSubscription.unsubscribe();
  }

  get getCompleted(): number {
    const completed: Todo[] = this.todos.filter(t => t.completed === true);
    return completed.length;
  }

  onToggleAll(e): void {
    const is_checked: boolean = e.target.checked;
    this.todoService.toggleAll(is_checked);
  }

  onClearCompleted(): void {
    this.todoService.clearCompleted();
  }
}

