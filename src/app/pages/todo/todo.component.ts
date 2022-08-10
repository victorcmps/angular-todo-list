import { Component, OnInit } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Todo } from 'src/app/shared/interfaces/todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todo: Todo[] = [
    { title: 'Get to work', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Pick up groceries', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Go home', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Fall asleep', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  ];

  done = [
    { title: 'Get up', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Brush teeth', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Take a shower', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Check e-mail', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  ];
;

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: any) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
