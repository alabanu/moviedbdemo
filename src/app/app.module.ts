import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MaterialModule } from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material/material.module';
// import { HomeComponent } from './home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule } from '@angular/material';
import { MaterialtRoutingModule } from './material/material-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './services/request.interceptor';
import { MovieService } from './services/movie.service';
import { MoviecardComponent } from './components/moviecard/moviecard.component';
import { MoviedetailsComponent } from './components/moviecard/moviedetails/moviedetails.component';
import { SearchdetailsComponent } from './components/search/searchdetails/searchdetails.component';
import { RouterModule } from '@angular/router';
// import { CollectionsComponent } from './views/collections/collections.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    CollectionsComponent,
    MoviecardComponent,
    MoviedetailsComponent,
    SearchdetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MaterialtRoutingModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    MatCardModule
  ],
  exports: [RouterModule],
  providers: [MovieService, {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
