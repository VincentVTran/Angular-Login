import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Custom Component
import { SignInComponent } from './components/sign-in/sign-in.component';
import { InfoInputComponent } from './components/info-input/info-input.component';
//Angular Material
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule } from '@angular/forms'
@NgModule({
  declarations: [SignInComponent, InfoInputComponent],
  imports: [
    CommonModule,
    MatInputModule, //Angular Input Module
    MatButtonModule, //Angular Button Module

    FormsModule, //Angular form stuff
    ReactiveFormsModule 
  ],
  exports: [SignInComponent]
})
export class SignInModule { }
