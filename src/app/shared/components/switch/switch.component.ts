import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleAriaState(event: MouseEvent) {
    let element = (event.target as HTMLInputElement);
    let state = element.getAttribute('aria-checked');
    let isState = (state === 'true');
    element.setAttribute('aria-checked', isState ? 'false' : 'true');
  }

}
