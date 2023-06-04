import { Component } from '@angular/core';

import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
    contentList:Content[] =[
       {
      id: 1,
      title: 'To Kill a Mockingbird',
      description: 'A Classic coming-of-age story that explores themes of racial injustice and morality',
      creator: 'Harper lee',
      imgURL: 'assets/image/mockingbird.jpg',
      type: 'Fiction'
    
    };

    const content2 = {
      id: 2,
      title: 'The Great Gatsby',
      description: 'Set in the Roaring Twenties, this novel depicts the glamorous and decadent lives of wealthy individuals and the emptiness that lies beneath the surface',
      creator: 'F.Scott Fitzgerald',
      imgURL: 'assets/image/great.jpg',
      type: 'Fiction'
      
    };

    const content3 = {
      id: 3,
      title: 'Pride & predudice',
      description: 'A classic romance novel featuring the spirited Elizabeth bennet and her tumultuous relationship with the enigmatic Mr-Darcy in 19th-century England',
      creator: 'Jane Austen',
      imgURL: 'assets/image/image4.jpg',
      type: 'Fiction'
      
    };
    const content4 = {
      id: 4,
      title: 'The Alchemist',
      description: 'A philosophical novel about a young Andalusian shepherd boy who embarks on a journey to discover his personal legend and the true meaning of life.',
      creator: 'Paulo Coelho',
      imgURL: 'assets/image/great.jpg',
      type: 'Fiction'
      
    };
    const content5 = {
      id: 5,
      title: 'The Lord of the Rings',
      description: 'An epic fantasy trilogy that follows a diverse group of characters on a perilous quest to destroy a powerful ring and save Middle-earth from darkness.',
      creator: 'J.R.R. Tolkien',
      imgURL: 'assets/image/great.jpg',
      type: 'Fiction'
      
    };


  ];
  findTitle : string ='';
  filterResult: boolean = false;
  message :string =''
  
  findContent() {
    this.filterResult = this.contentList.some(content => content.title.toLowerCase() === this.findTitle.toLowerCase());
  
    if (this.filterResult) {
      this.message = 'title exists.';
    } else {
      this.message = ' title does not exist.';
    }
  }
  ngOnInit(){
    
  }
  
}

