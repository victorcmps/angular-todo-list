import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() toggleMode = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleDarkMode(event: MouseEvent) {
    const element = event.target as HTMLInputElement;
    let toggleState = (element.ariaChecked === 'true');
    this.toggleMode.emit(toggleState);
  }
}
