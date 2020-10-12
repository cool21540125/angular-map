import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RandomDogService {

  dog = '';
  constructor(
    private httpClient: HttpClient
  ) { }

  load_image(): Observable<any> {
    return this.httpClient.get('/api/breeds/image/random');
  }
}
