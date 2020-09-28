import { Component, OnInit, Input } from '@angular/core';
import { Mountain } from '../mountain';

@Component({
  selector: 'app-mountain-detail',
  templateUrl: './mountain-detail.component.html',
  styleUrls: ['./mountain-detail.component.scss']
})
export class MountainDetailComponent implements OnInit {

  @Input() mt: Mountain;

  constructor() { }

  ngOnInit(): void {
  }

}
