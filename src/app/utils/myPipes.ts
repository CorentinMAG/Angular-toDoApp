import {Pipe, PipeTransform} from '@angular/core';
import Todo from '../model/todoModel';
import {FILTERS} from '../service/todo-store.service';

@Pipe({
  name: 'filter'
})

export class SearchTextPipe implements PipeTransform {
  transform(todoList: Todo[] , filter: FILTERS) {
    if(filter === 'All') {  return todoList }
    else if (filter === 'Active') { return todoList.filter( t => !t.completed) }
    else { return todoList.filter( t => t.completed)}
  }
}
