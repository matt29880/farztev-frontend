import {Injectable} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Media} from './media';
import { MediaType } from './mediatype';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private albumsUrl = environment.backendBaseUrl + '/api/album/';

  constructor(private http: HttpClient) {}

  getMedias(albumId: number, mediaType : MediaType): Observable<Media[]> {
    let mediaTypeId = MediaType[mediaType];
    return this.http.get<Media[]>(this.albumsUrl+ albumId+ "/media/type/" + mediaTypeId).pipe(
      tap(medias => this.log('fetched medias of album ' + albumId)),
      catchError(this.handleError('getMedias', []))
    );
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

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}