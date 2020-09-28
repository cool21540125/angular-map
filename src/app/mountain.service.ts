import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Mountain, MountainWeather } from './mountain';
import { MOUNTAINS } from './mock-mountains';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MountainService {

  private apiMountainList = '/api/weather/mountain';  // URL to web api
  private apiMountainWeather = '/api/weather';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getMountains(): Observable<Mountain[]> {
    // TODO: send the message _after_ fetching the mountains
    this.messageService.add('MountainService: fetched mountains');
    // return of(MOUNTAINS);
    return this.http.get<Mountain[]>(this.apiMountainList);
  }

  getMountain(pid: string): Observable<Mountain> {
    // TODO: send the message _after_ fetching the mountain
    this.messageService.add(`MountainService: fetched mountain id=${pid}`);
    return of(MOUNTAINS.find(mt => mt.pid === pid));
  }

  // getMountain(id: string): Observable<MountainWeather> {
  //   // TODO: send the message _after_ fetching the mountain
  //   this.messageService.add(`MountainService: fetched mountain id=${id}`);
  //   return this.http.get<MountainWeather[]>(`${this.apiMountainWeather}/${id}`);
  // }

  // Log a MountainService message with the MessageService
  private log(message: string) {
    this.messageService.add(`MountainService: ${message}`);
  }
}
