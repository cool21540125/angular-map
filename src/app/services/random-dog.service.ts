import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomDogService {

  dog = '';
  constructor(
    private httpClient: HttpClient
  ) { }

  load_image() {
    this.httpClient.get('/api/breeds/image/random').subscribe(
      (dog: any) => {
        this.dog = dog;
      }
    );
  }
}
