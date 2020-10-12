import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-udfpower',
  templateUrl: './udfpower.component.html',
  styleUrls: ['./udfpower.component.scss']
})
export class UdfpowerComponent implements OnInit {

  power = 2;
  factor = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
