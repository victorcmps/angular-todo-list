import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { SwitchComponent } from './components/switch/switch.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [ButtonComponent, SwitchComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    SwitchComponent,
    CardComponent
  ]
})
export class SharedModule { }
