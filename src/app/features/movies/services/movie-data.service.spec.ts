import { MovieDataService } from './movie-data.service';
import { LoggerService } from '../../../core/services/logger.service';

jest.mock('./static-movies', () => {
  return {
    __esModule: true,
    default: [
      { Type: 'movie', Title: 'Test', Year: '2000', PosterName: 'TestPoster' },
    ],
  };
});

describe('MovieDataService', () => {

  it('should return the correct list of movies', (done) => {
    const mockLogger: LoggerService = {
      log: jest.fn(),
    };

    const service = new MovieDataService(mockLogger);

    service.getAllMovies().subscribe((movies) => {
      expect(movies).toEqual(
        [
        {
          Type: 'movie',
          Title: 'Test',
          Year: '2000',
          PosterName: 'TestPoster',
        },
      ]
      );

      done();
    });
  });

});
