import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NgxTiptapModule } from 'ngx-tiptap';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, NgxTiptapModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
