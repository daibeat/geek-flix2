import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap, timestamp } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Movie, PagedResults } from './movie';
import { MessageService } from './message.service';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})

export class MovieService {

  private baseUrl = 'https://api.themoviedb.org/3';  // URL to web API
  private key = environment.apiKey; // Private API key

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`MovieService: ${message}`);
  }

  getMovies(): Observable<PagedResults> {
    const url = `${this.baseUrl}/discover/movie${this.key}&sort_by=release_date.desc&primary_release_date.lte=2021-08-16&include_adult=false&include_video=false&page=1`;
    return this.http.get<PagedResults>(url);
  }

  getMovie(id: number): Observable<Movie> {
    const movie = `${this.baseUrl}/movie/${id}${this.key}&language=en-US`;
    return this.http.get<Movie>(movie);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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

}
