import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-searchdetails',
  templateUrl: './searchdetails.component.html',
  styleUrls: ['./searchdetails.component.scss']
})
export class SearchdetailsComponent implements OnInit {

  detail: {}

  constructor(private _movieService: MovieService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("in searchdetails");
    this.getDetail();
  }

  getDetail(){
    this._movieService.getMovieDetail(this.route.snapshot.params['id']).subscribe(data => {
      this.detail = data;
    });
  }
}
