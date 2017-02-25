import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {

  todos : Todo [] = [{ id : 1, text : "nothing" },{ id :2 , text : "something"}];
  constructor() { }

  list(){
  	 return this.todos;
  }

  show(id : number): Todo {
  	for (var i = this.todos.length - 1; i >= 0; i--) {
  		if(this.todos[i].id === id) {
  			return this.todos[i];
  		}
  	}
  	return null;
  }

  create(text : String):Todo {
    var todo = {
  		id : Math.random(),
  		text : text
  	};
  	this.todos.push(todo);
  	return todo;
  }

  remove(todo : Todo){
    this.todos.splice(this.todos.indexOf(todo),1);
  }
}
