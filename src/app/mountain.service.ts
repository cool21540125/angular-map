import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Mountain } from './mountain';
import { Weather } from './weather';
import { MOUNTAINS } from './mock-mountains';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MountainService {

  private apiWeather = '/api/weather/mountain';  // URL to web api

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getMountains(): Observable<Mountain[]> {
    // this.messageService.add('MountainService: fetched mountains');
    return this.http.get<Mountain[]>(this.apiWeather)
      .pipe(
        tap(_ => this.log('fetched mountains')),
        catchError(this.handleError<Mountain[]>('getMountains', []))
      );
  }

  getMountainNo404<Data>(pid: string): Observable<Mountain> {
    const url = `${this.apiWeather}/?pid=${pid}`;
    return this.http.get<Mountain[]>(url)
      .pipe(
        map(mountains => mountains[0]),
        tap(h => {
          const outcome = h ? `fetched` : `did not found`;
          this.log(`${outcome} mountain pid=${pid}`);
        }),
        catchError(this.handleError<Mountain>(`getMountain pid=${pid}`))
      );
  }

  getMountain(pid: string): Observable<Mountain> {
    // this.messageService.add(`MountainService: fetched mountain id=${pid}`);
    // return of(MOUNTAINS.find(mt => mt.pid === pid));
    const url = `${this.apiWeather}/${pid}`;
    console.log(123);
    return this.http.get<Mountain>(url).pipe(
      tap(_ => this.log(`fetched mountain pid=${pid}`)),
      catchError(this.handleError<Mountain>(`getMountain pid=${pid}`))
    );
  }

  getWeather(pid: string): Observable<Weather> {
    // this.messageService.add(`MountainService: fetched mountain id=${pid}`);
    // return of(MOUNTAINS.find(mt => mt.pid === pid));
    const url = `${this.apiWeather}/${pid}`;
    // console.log(456);
    // console.log(url);
    // console.log(456);
    return this.http.get<Weather>(url).pipe(
      tap(_ => this.log(`fetched mountain pid=${pid}`)),
      // tap(data => {
      //   console.log(`${data}`);
      //   console.log('@@@@');
      // }),
      catchError(this.handleError<Weather>(`getMountain pid=${pid}`))
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
