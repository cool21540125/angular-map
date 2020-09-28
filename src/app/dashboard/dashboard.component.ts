import { Component, OnInit } from '@angular/core';
import { Mountain } from '../mountain';
import { MountainService } from '../mountain.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mountains: Mountain[] = [];

  constructor(private mountainService: MountainService) { }

  ngOnInit(): void {
    this.getMountains();
  }

  getMountains(): void {
    this.mountainService.getMountains()
        .subscribe(mountains => this.mountains = mountains.slice(1, 5));
  }
}
