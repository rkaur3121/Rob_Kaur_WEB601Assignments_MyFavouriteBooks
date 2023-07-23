import { Component } from '@angular/core';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentList: any = [];

  constructor() {
    this.contentList.add();
  }
}