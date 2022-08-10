import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TodoComponent
  ]
})
export class PagesModule { }
