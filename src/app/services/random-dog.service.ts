import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RandomDogService {

  constructor(
    private httpClient: HttpClient
  ) {}

  load_image(): Observable<any> {
    console.log(`@@@@ ${environment.dogApi} @@@@`);
    return this.httpClient.get(environment.dogApi);
  }
}
