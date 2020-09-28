import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Mountain } from './mountain';
import { MOUNTAINS } from './mock-mountains';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MountainService {

  constructor(private messageService: MessageService) { }

  getMountains(): Observable<Mountain[]> {
    // TODO: send the message _after_ fetching the mountains
    this.messageService.add('MountainService: fetched mountains');
    return of(MOUNTAINS);
  }

  getMountain(id: string): Observable<Mountain> {
    // TODO: send the message _after_ fetching the mountain
    this.messageService.add(`MountainService: fetched mountain id=${id}`);
    return of(MOUNTAINS.find(mt => mt.id === id));
  }
}
