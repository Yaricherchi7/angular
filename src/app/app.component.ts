import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  posts: any;
  restaurants: any;

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts().subscribe((response) => {
      this.posts = response;
      console.log(this.posts);
    });

    this.service.getRestaurants().subscribe((response: any) => {
      this.restaurants = response.array;
      console.log(this.restaurants);
    });
  }
}
