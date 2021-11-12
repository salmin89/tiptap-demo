import { Component } from '@angular/core';
import { Editor } from '@tiptap/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  editor = new Editor({
    extensions: [],
  });

  value = '<p>Hello, Tiptap!</p>'; // can be HTML or JSON, see https://www.tiptap.dev/api/editor#content
}
