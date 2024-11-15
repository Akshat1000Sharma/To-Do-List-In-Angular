import { Component,EventEmitter,Output } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title!:string;
  desc!:string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  onSubmit(){
    const todo = {
      sno: 0,
      title:this.title,
      desc:this.desc,
      active:true                                     
    }
    this.todoAdd.emit(todo)
  }
}
