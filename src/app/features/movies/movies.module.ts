import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import {MovieDataService} from './services/movie-data.service';
import { MovieComponent } from './components/movie/movie.component';


@NgModule({
  declarations: [MovieListComponent, MovieComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  providers: [MovieDataService]
})
export class MoviesModule { }
