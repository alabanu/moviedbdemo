import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { MoviedetailsComponent } from './components/moviecard/moviedetails/moviedetails.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'collections',
    component: CollectionsComponent
  },
  { path: 'search/:text', component: SearchComponent },
  { path: 'search/:text/movie-detail/:id', component: MoviedetailsComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
