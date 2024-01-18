// app.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderBannerComponent } from './header-banner/header-banner.component';
import { TextFormComponent } from './text-form/text-form.component';
import { ColorCounterComponent } from './color-counter/color-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBannerComponent,
    TextFormComponent,
    ColorCounterComponent,
  ],
  imports: [BrowserModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
