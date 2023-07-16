import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesService } from '../service/GetMoviesService';
import { FormMovies, InputMovies } from 'components/Form/Form.styled';
import { Button } from 'components/Button/Button.styled';
import { Grid, GridItem } from 'components/Grid/Grid.styled';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';
  const URL = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

  useEffect(() => {
    if (query === '') return;

    getMoviesService(URL)
      .then(results => {
        setSearchMovies(results);
      })
      .catch(error => console.error(error));
  }, [URL, query]);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <>
      <FormMovies onSubmit={handleSubmit}>
        <InputMovies
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search Movies"
        />
        <Button type="submit">
          <span>Search</span>
        </Button>
      </FormMovies>
      {searchMovies && (
        <Grid>
          {searchMovies.results.map(searchMovie => {
            return (
              <GridItem key={searchMovie.id}>
                <Link to={`${searchMovie.id}`} state={{ from: location }}>
                  {searchMovie.original_title}
                </Link>
              </GridItem>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default Movies;
