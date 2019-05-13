import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Customer modules
import { SignInModule } from './sign-in/sign-in.module';
//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

//HTTP Client
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,//Custom Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SignInModule, //Custom module

    MatMenuModule, //Angular Material Module
    MatButtonModule,

    HttpClientModule,//HTTP Client Module (Allows access to HTTPClient Request)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
