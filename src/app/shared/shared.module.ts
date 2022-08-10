import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { SwitchComponent } from './components/switch/switch.component';

@NgModule({
  declarations: [ButtonComponent, SwitchComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    SwitchComponent
  ]
})
export class SharedModule { }
