import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  @Input() data: Movie;
  @Output() toggleFavourite = new EventEmitter<boolean>();

  @Input() isFavourite: boolean;
}
