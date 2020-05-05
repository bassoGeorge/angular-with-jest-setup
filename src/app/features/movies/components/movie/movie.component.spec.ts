import { Movie } from '../../../../models/movie';
import { MovieComponent } from './movie.component';
import { render } from '@testing-library/angular';

describe('MovieComponent', () => {
  it('should render the given movie correctly', async () => {
    const movieData: Movie = {
      Title: 'Test Movie',
      Year: '2020',
      Type: 'movie',
      PosterName: 'blah.jpg',
    };

    const component = await render(MovieComponent, {
      componentProperties: {
        data: movieData,
        isFavourite: false,
      },
    });

    expect(component.getByText('Test Movie')).toBeInTheDocument();
    expect(component.getByText('2020')).toBeInTheDocument();
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

    const button = component.queryByText('Add to favourites');
    expect(button).toBeInTheDocument();

    component.click(button);

    expect(output).toBeCalledWith(true);

    component.rerender({
      isFavourite: true,
    });


    const altButton = component.getByText('Remove from favourites');
    expect(altButton).toBeInTheDocument();

    expect(component.queryByText('Add to favourites')).not.toBeInTheDocument();

    component.click(altButton);

    expect(output).toBeCalledWith(false);
  });
});
