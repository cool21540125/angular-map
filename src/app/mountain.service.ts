import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Mountain } from './mountain';
import { MOUNTAINS } from './mock-mountains';

@Injectable({
  providedIn: 'root'
})
export class MountainService {

  constructor() { }

  getMountains(): Observable<Mountain[]> {
    return of(MOUNTAINS);
  }
}
