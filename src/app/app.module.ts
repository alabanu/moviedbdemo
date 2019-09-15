import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material/material.module';
import { SearchComponent } from './components/search/search.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule,  MatIconModule, MatCardModule,  MatDialogModule, MatDividerModule,  MatToolbarModule, MatChipsModule, MatSnackBarModule} from '@angular/material';
import { MaterialtRoutingModule } from './material/material-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './services/request.interceptor';
import { MovieService } from './services/movie.service';
import { MoviecardComponent } from './components/moviecard/moviecard.component';
import { MoviedetailsComponent } from './components/moviecard/moviedetails/moviedetails.component';
import { RouterModule } from '@angular/router';
import { BarRatingModule } from "ngx-bar-rating";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    CollectionsComponent,
    MoviecardComponent,
    MoviedetailsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // MaterialModule,
    BrowserModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MaterialtRoutingModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatToolbarModule,
    MatChipsModule,
    BarRatingModule,
    MatSnackBarModule
  ],
  exports: [RouterModule],
  entryComponents: [MoviedetailsComponent],
  providers: [MovieService, {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
