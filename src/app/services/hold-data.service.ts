import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HoldDataService {

  constructor() {
    this.setPostData();
   }

  setPostData() {
    console.log(FOOD_POST)
    localStorage.setItem('posts',  JSON.stringify(FOOD_POST) );
  }

  getPostData() {
    return JSON.parse(localStorage.getItem('posts'))
  }

}


const FOOD_POST = [
  {
    post_img: "product1.png",
    comments: 1000,
    likes: 8000,
    post_date: "03 jan"
  },
  {
    post_img: "product2.png",
    comments: 1000,
    likes: 8000,
    post_date: "03 jan"
  },
  {
    post_img: "product3.png",
    comments: 1000,
    likes: 8000,
    post_date: "03 jan"
  },
  {
    post_img: "product4.png",
    comments: 1000,
    likes: 8000,
    post_date: "03 jan"
  }
];
