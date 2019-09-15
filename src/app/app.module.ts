import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule,  MatIconModule, MatCardModule,  MatDialogModule, MatDividerModule,  MatToolbarModule, MatChipsModule, MatSnackBarModule, MatProgressSpinnerModule, MatSpinner, MatExpansionPanel, MatExpansionPanelTitle, MatExpansionModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './services/request.interceptor';
import { MovieService } from './services/movie.service';
import { MoviecardComponent } from './components/moviecard/moviecard.component';
import { MoviedetailsComponent } from './components/moviecard/moviedetails/moviedetails.component';
import { RouterModule } from '@angular/router';
import { BarRatingModule } from "ngx-bar-rating";
import {GoTopButtonModule} from 'ng2-go-top-button';


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
    BrowserModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatToolbarModule,
    MatChipsModule,
    BarRatingModule,
    MatSnackBarModule,
    GoTopButtonModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ],
  exports: [RouterModule],
  entryComponents: [MoviedetailsComponent],
  providers: [MovieService, {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
