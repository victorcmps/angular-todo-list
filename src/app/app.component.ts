import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';

  @ViewChild('mode') host!: ElementRef;

  toggleMode(toggleMode: boolean) {
    if (toggleMode) {
      return this.host.nativeElement.classList.replace('dark-mode', 'light-mode');
    }

    return this.host.nativeElement.classList.replace('light-mode', 'dark-mode');
  }
}