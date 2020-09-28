import { Component, OnInit } from '@angular/core';
import { Mountain } from '../mountain';

@Component({
  selector: 'app-mountain',
  templateUrl: './mountain.component.html',
  styleUrls: ['./mountain.component.scss']
})
export class MountainComponent implements OnInit {

  mountain: Mountain = {
    id: 'D001',
    name: '中央尖山'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
