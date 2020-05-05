import { Movie } from '../../models/movie';
import { MovieComponent } from './movie.component';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

describe('MovieComponent', () => {
  it('should render the given movie correctly', async () => {
    const movieData: Movie = {
      Title: 'Test Movie',
      Year: '2020',
      Type: 'movie',
      PosterName: 'blah.jpg',
    };

    await render(MovieComponent, {
      componentProperties: {
        data: movieData,
        isFavourite: false,
      },
    });

    expect(screen.getByText('Test Movie')).toBeInTheDocument();
    expect(screen.getByText('2020')).toBeInTheDocument();
  });

  it('should render the favourites button', async () => {
    const movieData: Movie = {
      Title: 'Test Movie',
      Year: '2020',
      Type: 'movie',
      PosterName: 'blah.jpg',
    };

    const output = jest.fn();

    const component = await render(MovieComponent, {
      componentProperties: {
        data: movieData,
        isFavourite: false,
        toggleFavourite: {
          emit: output,
        } as any,
      },
    });

    const button = screen.queryByText('Add to favourites');
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    expect(output).toBeCalledWith(true);

    component.rerender({
      isFavourite: true,
    });

    // Alternative APIs. Don't need screen and userEvents library problably,

    const altButton = component.getByText('Remove from favourites');
    expect(altButton).toBeInTheDocument();

    expect(component.queryByText('Add to favourites')).not.toBeInTheDocument();

    component.click(altButton);

    expect(output).toBeCalledWith(false);
  });
});
