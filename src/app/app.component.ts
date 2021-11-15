import { Component, Injector } from '@angular/core';
import { Editor } from '@tiptap/core';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Mention from '@tiptap/extension-mention';
import { AngularRenderer } from 'ngx-tiptap';
import { MentionsListComponent } from './mentions-list/mentions-list.component';
import tippy from 'tippy.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private injector: Injector) {}

  editor = new Editor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Mention.configure({
        HTMLAttributes: {
          class: 'mention',
        },
        suggestion: {
          items: ({ query }) => {
            return [
              'Lea Thompson',
              'Cyndi Lauper',
              'Tom Cruise',
              'Madonna',
              'Jerry Hall',
              'Joan Collins',
              'Winona Ryder',
              'Christina Applegate',
              'Alyssa Milano',
              'Molly Ringwald',
              'Ally Sheedy',
              'Debbie Harry',
              'Olivia Newton-John',
              'Elton John',
              'Michael J. Fox',
              'Axl Rose',
              'Emilio Estevez',
              'Ralph Macchio',
              'Rob Lowe',
              'Jennifer Grey',
              'Mickey Rourke',
              'John Cusack',
              'Matthew Broderick',
              'Justine Bateman',
              'Lisa Bonet',
            ]
              .filter((item) => item.toLowerCase().startsWith(query.toLowerCase()))
              .slice(0, 10);
          },
          render: () => {
            let renderer: AngularRenderer<MentionsListComponent>;
            let popup;

            return {
              onStart: (props) => {
                renderer = new AngularRenderer(
                  MentionsListComponent,
                  this.injector
                  // props
                );

                renderer.instance.inputProps = props;

                // renderer.updateProps({ props });
                popup = tippy('body', {
                  getReferenceClientRect: props.clientRect,
                  appendTo: () => document.body,
                  content: renderer.dom,
                  showOnCreate: true,
                  interactive: true,
                  trigger: 'manual',
                  placement: 'bottom-start',
                });
              },
              onUpdate(props) {
                renderer.instance.inputProps = props;
                popup[0].setProps({
                  getReferenceClientRect: props.clientRect,
                });
              },
              onKeyDown(props) {
                return renderer.instance.onKeyDown(props);
              },
              onExit() {
                popup[0].destroy();
                renderer.destroy();
              },
            };
          },
        },
      }),
    ],
    content: `
    <p>Hi everyone! Don’t forget the daily stand up at 8 AM.</p>
    <p><span data-mention data-id="Jennifer Grey"></span> Would you mind to share what you’ve been working on lately? We fear not much happened since Dirty Dancing.
    <p><span data-mention data-id="Winona Ryder"></span> <span data-mention data-id="Axl Rose"></span> Let’s go through your most important points quickly.</p>
    <p>I have a meeting with <span data-mention data-id="Christina Applegate"></span> and don’t want to come late.</p>
    <p>– Thanks, your big boss</p>
      `,
  });

  value = '<p>Hello, Tiptap!</p>'; // can be HTML or JSON, see https://www.tiptap.dev/api/editor#content
}
