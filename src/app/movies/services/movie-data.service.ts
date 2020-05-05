import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import * as staticMovies from './static-movies';
import {Movie} from '../models/movie';

@Injectable()
export class MovieDataService {
  getAllMovies(): Observable<Movie[]> {
    return of(staticMovies);
  }
}
