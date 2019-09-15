import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent implements OnInit {

  @Input() movie: any

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(id: number): void {
    let dialogRef = this.dialog.open(MoviedetailsComponent, {
      height: '80%',
      width: '60%',
      disableClose: true,
      data: { id }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
