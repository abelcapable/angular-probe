import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

import {Airlines, Airline} from './airline';
import {MessageService} from './message.service';
import {Keys} from './keys';
import {RequestType} from './request-types';
import {Hero} from './hero';

@Injectable({
  providedIn: 'root'
})

export class AirlineService {

  private airlinesUrl = `/flex/airlines/rest/v1/json`;
  private COSUrl = `${this.airlinesUrl}/${RequestType.active}?appId=${Keys.appId}&appKey=${Keys.appKey}`;
  private a = RequestType.active;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getAirlines(): Observable<Airlines> {
    return this.http.get<Airlines>(this.COSUrl, this.httpOptions)
      .pipe(
        catchError(this.handleError('getAirlines', null))
      );
  }

  /*getAirline(id: string): Observable<Airline> {
    const url = `https://api.flightstats.com/flex/airlines/rest/v1/json/iata/AA?appId=808e8b6a&appKey=09b3e1548325f1eb00cd03e6f55d1b55`
    this.messageService.add(`AirlineService: fetched hero id=${id}`);

  }*/

  /** GET hero by id. Will 404 if not found */
  /*getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Hero>(url)
      .pipe(
        tap(_ => this.log(`fetched hero: ${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }*/

  /** Log a AirlineService message */
  private log(message: string) {
    this.messageService.add(`AirlineService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // let the app keep running be returning empty result
      return of(result as T);
    };
  }
}
