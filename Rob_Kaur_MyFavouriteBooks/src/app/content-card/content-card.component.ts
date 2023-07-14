import { Component } from '@angular/core';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentList: any = [];

  constructor() {
    this.contentList.add({
      
        id: 1,
        title: 'To Kill a Mockingbird',
        description: 'A Classic coming-of-age story that explores themes of racial injustice and morality',
        creator: 'Harper lee',
        imgURL: 'assets/image/mockingbird.jpg',
        type: 'Fiction',
        tags: ['classic,2015'],
        highlight: false
    });
    this.contentList.add({
      id: 2,
        title: 'The Great Gatsby',
        description: 'Set in the Roaring Twenties, this novel depicts the glamorous and decadent lives of wealthy individuals and the emptiness that lies beneath the surface',
        creator: 'F.Scott Fitzgerald',
        imgURL: 'assets/image/great.jpg',
        type: 'Fiction',
        tags: ['science fiction,2013'],
        highlight: true
    });
    this.contentList.add({
      id: 3,
        title: 'Pride & predudice',
        description: 'A classic romance novel featuring the spirited Elizabeth bennet and her tumultuous relationship with the enigmatic Mr-Darcy in 19th-century England',
        creator: 'Jane Austen',
        imgURL: 'assets/image/image4.jpg',
        type: 'Fiction',
        tags: ['classic,2010'],
        highlight: true
    });
  }
}