import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent implements OnInit {

  
  movieState: string = 'ready'

  @Input() movie: any

  
  constructor() { }

  ngOnInit() {
  }

}
