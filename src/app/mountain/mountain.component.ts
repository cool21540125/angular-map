import { Component, OnInit } from '@angular/core';
import { Mountain } from '../mountain';
import { MOUNTAINS } from '../mock-mountains';

@Component({
  selector: 'app-mountain',
  templateUrl: './mountain.component.html',
  styleUrls: ['./mountain.component.scss']
})
export class MountainComponent implements OnInit {

  mountains = MOUNTAINS;
  selectedMt: Mountain;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(mt: Mountain): void {
    this.selectedMt = mt;
  }

}
