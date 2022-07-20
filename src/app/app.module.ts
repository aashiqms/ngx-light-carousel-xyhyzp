import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxCarouselModule } from 'ngx-light-carousel'

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxCarouselModule ],
  declarations: [ AppComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
