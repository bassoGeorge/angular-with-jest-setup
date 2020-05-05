import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../../services/movie-data.service';
import {Movie} from '../../../../models/movie';

@Component({
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieDataService: MovieDataService) {}

  ngOnInit(): void {
    this.movieDataService.getAllMovies().subscribe(
      movies => this.movies = movies
    );
  }
}
