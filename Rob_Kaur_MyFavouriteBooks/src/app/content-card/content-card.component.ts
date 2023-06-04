import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  @Input() content: Content;
  @Input() first: boolean;

  showContent(getContent: any) {
    console.log('Content ID:', getContent.id);
    console.log('Content Title:', getContent.title);
}
}