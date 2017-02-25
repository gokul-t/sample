import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TodosModule } from './../todos/todos.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TodosModule
  ],
  declarations: [
  	DashboardComponent
  ]
})
export class DashboardModule { }
