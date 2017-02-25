import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todo = { text : "" };
  todos : Todo[] = [];
  
  constructor( private todoService : TodoService) { 

  }


  ngOnInit() : void {
  	  this.todos = this.todoService.list();
  }

  create() : void {
  	this.todoService.create(this.todo.text);
  	this.todo = { text : "" };
  }

  remove(todo : Todo) : void {
  	this.todoService.remove(todo);
  }

}
