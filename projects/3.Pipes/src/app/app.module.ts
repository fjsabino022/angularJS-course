import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { CamelcasePipe } from './pipes/camelcase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CamelcasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-ar' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
