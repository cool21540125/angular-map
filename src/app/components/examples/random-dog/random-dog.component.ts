import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { RandomDogService } from '../../../services/random-dog.service';

@Component({
  selector: 'app-random-dog',
  templateUrl: './random-dog.component.html',
  styleUrls: ['./random-dog.component.scss']
})
export class RandomDogComponent implements OnInit {

  title = 'demo';
  imgUrl = '';

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.load_image();
  }

  load_image() {
    this.httpClient.get('/api/breeds/image/random').subscribe(
      (result: any) => {
        console.log(result.message);
        this.imgUrl = result.message;
        this.title = `${this.imgUrl}`;
      }
    );
  }
}
