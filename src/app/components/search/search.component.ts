import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';
import { Subject, fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  searchkey: string;
  form: FormGroup;
  movies = [];
  page: number;
  totalPages: number;
  totalResults: number;
  empty: number = 0;
  regularDistribution = 100 / 6 + '%';

  @ViewChild('movieSearchInput') movieSearchInput: ElementRef;

  constructor(private formBuilder: FormBuilder, private router: Router, private _movieService: MovieService) { }

  ngOnInit() {
    
    this.form = this.formBuilder.group({
      movie: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]+')])
    });

    this.router.navigate(['/search', this.form.controls['movie'].value]);

    fromEvent(this.movieSearchInput.nativeElement, 'keyup').pipe(
      // get value
      map((event: any) => {
        this.empty = 1;
        return event.target.value;
      })
      // Time in milliseconds between key events
      , debounceTime(800)
      // If previous query is diffent from current   
      , distinctUntilChanged()
      // subscription for response
    ).subscribe((text: string) => {
      this.searchkey = text;
      this._movieService.searchMovies(text).subscribe(data => {
        this.movies = data.results
        this.page = data.page
        this.totalPages = data.total_pages
        this.totalResults = data.total_results
      });
    });
   
  }

  searchMovies(form) {
    this.empty = 1;
    this.router.navigate(['/search', this.form.controls['movie'].value])
    console.log(this.form.value);

    this._movieService.searchMovies(this.form.controls['movie'].value).subscribe(data => {
      this.movies = data.results
      this.page = data.page
      this.totalPages = data.total_pages
      this.totalResults = data.total_results
    });

  }

  loadMore() {
    this._movieService.searchMovies(this.form.controls['movie'].value, this.page + 1).subscribe(data => {
      this.movies = this.movies.concat(data.results)
      this.page = data.page
      this.totalPages = data.total_pages
      this.totalResults = data.total_results
    });
  }


}
