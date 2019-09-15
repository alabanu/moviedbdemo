import { Component, OnInit, Input, Inject, Pipe } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { take } from 'rxjs/operators';
import { Movie } from '../../../models/movie';
import { Session } from '../../../models/session';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  
  @Input() detail: Movie
  id: number;
  @Input() session: Session
  ratingForm: FormGroup;
  loading: Boolean =  false;

  constructor(private _movieService: MovieService, private _snackBar: MatSnackBar, private fb: FormBuilder,
    private route: ActivatedRoute, private dialogRef: MatDialogRef<MoviedetailsComponent>,
    @Inject(MAT_DIALOG_DATA) data) { this.id = data.id }

  ngOnInit() {
    this.createForm();
    this.getDetail();
  }

  createForm() {
    this.ratingForm = this.fb.group({
      rating: ["", Validators.required],
    })
  }

  //forcing fixed rating to solve issue multiple of 0.50 WS
  getDetail() {
    this._movieService.getMovieDetail(this.id).pipe(take(1))
      .subscribe(data => {
        this.detail = data;
        this.ratingForm.patchValue({
          rating: !!this.detail.vote_average ? this.detail.vote_average.toFixed(0) : '',
        })
      }
        , error => {
          this.openSnackbar(error, 'error');
        });
  }


  close() {
    this.loading = true;
    this.vote(this.detail.id, this.ratingForm.controls['rating'].value);
  }

  vote(movie_id, vote) {
    this._movieService.getSessionId().subscribe(data => {
      this.session = data;
      if (this.session.success == true) {
        this.postRating(this.session.guest_session_id, movie_id, vote)
      }
    });
  }

  postRating(session_id, movie_id, vote_value) {

    this._movieService.postRating(movie_id, session_id, vote_value).pipe(take(1))
      .subscribe(data => {
        this.detail = data;
        this.loading = false;
        this.dialogRef.close();
        this.openSnackbar('Thanks for voting!', 'success');
      }
        , error => {
          this.openSnackbar(error, 'error');
        });
  }

  openSnackbar(msg, action) {
    this._snackBar.open(msg, action, {
      duration: 2500,
    });
  }

}

