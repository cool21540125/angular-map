import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MountainService } from '../../services/mountain.service';
import { Weather } from '../../models/weather';

@Component({
  selector: 'app-mountain-detail',
  templateUrl: './mountain-detail.component.html',
  styleUrls: ['./mountain-detail.component.scss']
})
export class MountainDetailComponent implements OnInit {
  @Input('currentMountain') currentMountain: string;   // tslint:disable-line: no-input-rename
  displayedColumns: string[] = ['time', 'temperature', 'body_temperature', 'humidity', 'chance_of_rain'];
  weather: Weather[];

  constructor(
    private route: ActivatedRoute,
    private mountainService: MountainService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    // route.snapshot 是一個路由資訊的靜態快照，抓取自元件剛剛建立完畢之後。
    // paramMap 是一個從 URL 中提取的路由引數值的字典。 "pid" 對應的值就是要獲取的英雄的 id。
    const pid = this.route.snapshot.paramMap.get('pid');
    this.mountainService.getWeather(pid).subscribe(
      result => {
        this.weather = result;
      });
  }

  goBack(): void {
    this.location.back();
  }
}
