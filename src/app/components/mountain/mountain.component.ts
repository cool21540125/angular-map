import { Component, OnInit } from '@angular/core';
import { MountainService } from '../../services/mountain.service';
import { Mountain } from '../../models/mountain';

@Component({
  selector: 'app-mountain',
  templateUrl: './mountain.component.html',
  styleUrls: ['./mountain.component.scss']
})
export class MountainComponent implements OnInit {
  mountains: Mountain[];
  currentMountain: string;

  constructor(private mtService: MountainService) { }

  ngOnInit(): void {
    this.getMountains();
  }

  getMountains(): void {
    console.log(12344);
    this.mtService.getMountains()
        .subscribe(mountains => {
          this.mountains = mountains;
        });
  }

  onSelect(mountain: string): void {
    this.currentMountain = mountain;
  }

}
