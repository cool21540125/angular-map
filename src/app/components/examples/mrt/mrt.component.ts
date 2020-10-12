import { Component, OnInit } from '@angular/core';
import { stationList } from './station-list.const';

@Component({
  selector: 'app-mrt',
  templateUrl: './mrt.component.html',
  styleUrls: ['./mrt.component.scss']
})
export class MrtComponent implements OnInit {

  list = stationList;

  constructor() { }

  ngOnInit(): void {
  }

}
