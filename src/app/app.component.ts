import { Component } from '@angular/core';
import { Editor } from '@tiptap/core';

import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  editor = new Editor({
    extensions: [
      // basic required extensions
      Document,
      Paragraph,
      Text,
    ],
  });

  value = '<p>Hello, Tiptap!</p>'; // can be HTML or JSON, see https://www.tiptap.dev/api/editor#content
}
