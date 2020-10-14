import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RandomDogService {

  dog = '';
  constructor(
    private httpClient: HttpClient
  ) {
    console.log(`${environment.dogApi}.....`);
  }

  load_image(): Observable<any> {
    return this.httpClient.get(environment.dogApi);
  }
}
