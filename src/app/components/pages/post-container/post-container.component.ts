import { Component, OnInit } from '@angular/core';
import { HoldDataService } from '../../../services/hold-data.service'

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit {

  posts;
  constructor(
    private _posts: HoldDataService
  ) { }

  ngOnInit(): void {
    this.getPostData();
  }

  getPostData() {
    this.posts = this._posts.getPostData(1)
    console.log(this.posts)
  }


  //TODO:: remove carousel test code after post carousel implements

  slideConfig = {
    "slidesToShow": 2,
    "slidesToScroll": 2,
    "prevArrow": false,
    "nextArrow": false
  };

}
