import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MountainService } from '../mountain.service';
import { Mountain } from '../mountain';
import { Weather } from '../weather';

@Component({
  selector: 'app-mountain-detail',
  templateUrl: './mountain-detail.component.html',
  styleUrls: ['./mountain-detail.component.scss']
})
export class MountainDetailComponent implements OnInit {

  @Input() mt: Mountain;
  @Input() weather: Weather;

  constructor(
    private route: ActivatedRoute,
    private mountainService: MountainService,
    private location: Location
  ) { }

  ngOnInit(): void {
    // this.getMountain();
    this.getWeather();
  }

  getMountain(): void {
    // route.snapshot 是一個路由資訊的靜態快照，抓取自元件剛剛建立完畢之後。
    // paramMap 是一個從 URL 中提取的路由引數值的字典。 "pid" 對應的值就是要獲取的英雄的 id。
    const pid = this.route.snapshot.paramMap.get('pid');
    this.mountainService.getMountain(pid)
        .subscribe(mt => this.mt = mt);
  }

  getWeather(): void {
    // route.snapshot 是一個路由資訊的靜態快照，抓取自元件剛剛建立完畢之後。
    // paramMap 是一個從 URL 中提取的路由引數值的字典。 "pid" 對應的值就是要獲取的英雄的 id。
    const pid = this.route.snapshot.paramMap.get('pid');
    this.mountainService.getWeather(pid)
        // .subscribe(weather => this.weather = weather);
        .subscribe(weather => {
          this.weather = weather;
          console.log(this.weather);
        });
  }

  goBack(): void {
    this.location.back();
  }
}
