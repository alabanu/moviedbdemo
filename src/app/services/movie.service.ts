import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
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
    return this.http.get(`${this.url}/search/movie`, { params: params })
  }

  getMovieDetail(movie_id): Observable<any> {
    return this.http.get(`${this.url}/movie/${movie_id}`)
  }

  // searchMovies(query: string) {
  // return this.http.get(`${this.baseUrl}/search/movie${this.getParams({ query: query })}`)
  //   .pipe(map((res: any) => <Movie[]>res.results));
  // this.searchMoviesByKeyWords(query);
  // }

  // searchMoviesByKeyWords(query) {
  //   this.movieService.searchEntries(query).subscribe(res => {
  //     this.results = res.results;
  //   });

  // searchMovies(keyword: string) {
  //   return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query=' + 
  //   keyword + '&sort_by=popularity.desc&api_key=' + this.apiKey)
  //     .map(res => res.json());
  // }

  // searchEntries(keywords: Observable<string>) {
  //   return keywords.debounceTime(400)
  //                   .distinctUntilChanged()
  //                     .switchMap(keyword => this.searchMovies(keyword));
  // }
}
