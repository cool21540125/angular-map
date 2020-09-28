import { Component, OnInit } from '@angular/core';
import { Mountain } from '../mountain';
import { MountainService } from '../mountain.service';

@Component({
  selector: 'app-mountain',
  templateUrl: './mountain.component.html',
  styleUrls: ['./mountain.component.scss']
})
export class MountainComponent implements OnInit {
  mountains: Mountain[];

  constructor(private mtService: MountainService) { }

  ngOnInit(): void {
    this.getMountains();
  }

  getMountains(): void {
    this.mtService.getMountains()
        .subscribe(mountains => this.mountains = mountains);
  }

}
