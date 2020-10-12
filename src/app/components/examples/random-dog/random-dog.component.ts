import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RandomDogService } from '../../../services/random-dog.service';

@Component({
  selector: 'app-random-dog',
  templateUrl: './random-dog.component.html',
  styleUrls: ['./random-dog.component.scss']
})
export class RandomDogComponent implements OnInit {

  title = 'demo';
  imgUrl = '';

  constructor(
    // private httpClient: HttpClient
    private randomDogService: RandomDogService
  ) { }

  ngOnInit(): void {
    this.load_image();
  }

  load_image() {
    this.randomDogService.load_image().subscribe(
      result => {
        this.imgUrl = result.message;
      }
    );
  }
}
