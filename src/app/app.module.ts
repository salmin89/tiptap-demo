import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NgxTiptapModule } from 'ngx-tiptap';
import { MentionsListComponent } from './mentions-list/mentions-list.component';

@NgModule({
  declarations: [AppComponent, MentionsListComponent],
  imports: [BrowserModule, FormsModule, NgxTiptapModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
