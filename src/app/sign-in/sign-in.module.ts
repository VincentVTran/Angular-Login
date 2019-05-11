import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Custom Component
import { SignInComponent } from './components/sign-in/sign-in.component';
import { InfoInputComponent } from './components/info-input/info-input.component';
import { SubmitComponent } from './components/submit/submit.component';
//Angular Material
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [SignInComponent, InfoInputComponent, SubmitComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [SignInComponent]
})
export class SignInModule { }
