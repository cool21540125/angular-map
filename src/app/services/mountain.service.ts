import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Mountain } from '../models/mountain';
import { Weather } from '../models/weather';
import { MessageService } from './message.service';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MountainService {

  private apiMountains = '/api/weather/mountains';
  private apiWeatherMountain = '/api/weather/mountain';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getMountains(): Observable<Mountain[]> {
    // this.messageService.add('MountainService: fetched mountains');
    console.log(`@@@@ Fetch mountains ${this.apiMountains} @@@@`);
    return this.http.get<Mountain[]>(this.apiMountains)
      .pipe(
        catchError(this.handleError<Mountain[]>('getMountains', []))
      );
  }

  getWeather(pid: string): Observable<Weather[]> {
    const url = `${environment.backendApi}${this.apiWeatherMountain}/${pid}`;

    return this.http.get<Weather[]>(url)
      .pipe(
        tap(_ => this.log(`fetched mountain pid=${pid}`)),
        catchError(this.handleError<Weather[]>(`getMountain pid=${pid}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // Log a MountainService message with the MessageService
  private log(message: string) {
    this.messageService.add(`MountainService: ${message}`);
  }
}
