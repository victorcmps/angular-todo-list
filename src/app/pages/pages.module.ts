import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule
  ],
  exports: [
    TodoComponent
  ]
})
export class PagesModule { }
