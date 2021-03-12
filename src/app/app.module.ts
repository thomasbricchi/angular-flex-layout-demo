import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CardComponent } from './card/card.component';
import { Esempio3Component } from './esempio3/esempio3.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    Esempio3Component
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
