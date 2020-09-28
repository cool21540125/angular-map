import { Component, OnInit } from '@angular/core';
import { AREAS } from '../mock-areas';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  areas = AREAS;
  constructor() { }

  ngOnInit(): void {
  }

}
