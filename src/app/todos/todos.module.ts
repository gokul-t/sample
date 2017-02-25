import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports :[
  	TodosComponent
  ],
  declarations: [
  	TodosComponent
  ],
   providers: [
    TodoService
  ],
})
export class TodosModule { }
