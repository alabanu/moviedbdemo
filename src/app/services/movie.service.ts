import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, } from '@angular/common/http';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MovieService {



  url: string = environment.api;

  constructor(private http: HttpClient) { }

  searchMovies(query, page?): Observable<any> {
    let params = new HttpParams();
    params = params.append('query', query);
    if (page) {
      params = params.append('page', page);
    }
    return this.http.get(this.url + "/search/movie", { params: params })
  }

  getMovieDetail(movie_id): Observable<any> {
    return this.http.get(this.url + "/movie/" + movie_id)
  }

  getSessionId(): Observable<any> {
    return this.http.get(this.url + "/authentication/guest_session/new")
  }

  postRating(movie_id, guest_id, value): Observable<any> {
    console.log(movie_id + "//" + guest_id + '//' + value);
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization",
      })
    };

    return this.http.post(this.url + "/movie/" + movie_id + "/rating" + "?&guest_session_id=" + guest_id, { value  }, httpOptions)
  }
}