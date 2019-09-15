import { Component, OnInit, Input, Inject } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  detailState: string = 'ready'
  // detail: {}
  @Input() detail: any
  id:number;

  constructor(private _movieService: MovieService , 
    private route: ActivatedRoute, private dialogRef: MatDialogRef<MoviedetailsComponent>,
        @Inject(MAT_DIALOG_DATA) data) { this.id = data.id}

  ngOnInit() {
    this.getDetail();
  }

  getDetail(){
    this._movieService.getMovieDetail(this.id).pipe(take(1)).subscribe(data => {
      this.detail = data;
    });
  }
}
