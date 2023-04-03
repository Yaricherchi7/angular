import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://localhost:5000/api/tipologiche/getCuisinesList';
  private urlRestaurants = 'http://localhost:5000/api/restaurant/getRestaurants/1/10'
  
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(){
    return this.httpClient.get(this.url);
  }

  getRestaurants(){
    return this.httpClient.get(this.urlRestaurants);
  }
  
}