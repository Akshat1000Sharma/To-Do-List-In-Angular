import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[] = [];
  localItem: string | null;

  constructor() {
    this.localItem = localStorage.getItem("todos");
    if (this.localItem === null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  deleteTodo(todo: Todo) {
    console.log(`Deleting the task with S.No. ${todo.sno}`);
    console.log("Todos is --> ",this.todos)
    console.log("Todo is --> ",todo)
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    let i=1
    for (const key of this.todos) {
      key.sno=i;
      i++;
    }
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  
  addTodo(todo: Todo) { 
    todo.sno = this.todos.length + 1
    console.log(`Adding the task with S.No. ${todo.sno}`);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  toggleTodo(todo: Todo) { 
    console.log(`Completed the task with S.No. ${todo.sno}`);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
