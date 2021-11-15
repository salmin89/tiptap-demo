import { Component, Input, OnInit } from '@angular/core';
import { AngularNodeViewComponent } from 'ngx-tiptap';

@Component({
  selector: 'mentions-list',
  templateUrl: './mentions-list.component.html',
  styleUrls: ['./mentions-list.component.scss'],
})
export class MentionsListComponent extends AngularNodeViewComponent implements OnInit {
  @Input() inputProps: Record<string, any> = null;

  selectedIndex = 0;

  upHandler() {
    this.selectedIndex = (this.selectedIndex + this.inputProps.items.length - 1) % this.inputProps.items.length;
  }

  downHandler() {
    this.selectedIndex = (this.selectedIndex + 1) % this.inputProps.items.length;
  }

  enterHandler() {
    this.selectItem(this.selectedIndex);
  }

  selectItem(index: number) {
    const item = this.inputProps.items[index];

    if (item) {
      this.inputProps.command({ id: item });
    }
  }

  onKeyDown({ event }) {
    if (event.key === 'ArrowUp') {
      this.upHandler();
      return true;
    }

    if (event.key === 'ArrowDown') {
      this.downHandler();
      return true;
    }

    if (event.key === 'Enter') {
      this.enterHandler();
      return true;
    }

    return false;
  }

  ngOnInit() {}
}
