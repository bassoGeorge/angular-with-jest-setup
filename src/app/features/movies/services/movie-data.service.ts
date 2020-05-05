import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import staticMovies from './static-movies';
import { Movie } from '../../../models/movie';
import { LoggerService } from '../../../core/services/logger.service';

@Injectable()
export class MovieDataService {
  constructor(private logger: LoggerService) {}

  getAllMovies(): Observable<Movie[]> {
    this.logger.log('getting movies');
    return of(staticMovies);
  }
}
