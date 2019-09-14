import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent implements OnInit {


  movieState: string = 'ready'

  @Input() movie: any


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(id: number): void {
    console.log("**************" + id);
    let dialogRef = this.dialog.open(MoviedetailsComponent, {
      height: '60%',
      width: '50%',
      data: { id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
