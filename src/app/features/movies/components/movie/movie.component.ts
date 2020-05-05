import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../../../../models/movie';
import { LoggerService } from '../../../../core/services/logger.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() data: Movie;
  @Input() isFavourite: boolean;

  @Output() toggleFavourite = new EventEmitter<boolean>();

  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
    this.logger.log('movie component ready!');
  }
}
