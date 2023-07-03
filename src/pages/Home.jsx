import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMoviesService } from '../service/GetMoviesService';
import { Grid, GridItem } from 'components/Grid/Grid.styled';
import { TitleH1 } from 'components/Title/Title.styled';
import { Container } from 'components/Container/Container.styled';

const URL = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getMoviesService(URL)
      .then(({ results }) => {
        setTrendingMovies(results);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <Container>
      <TitleH1>Trending today</TitleH1>
      <Grid>
        {trendingMovies.map(trendingMovie => {
          return (
            <GridItem key={trendingMovie.id}>
              <Link to={`movies/${trendingMovie.id}`}>
                <span>{trendingMovie.title}</span>
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Home;
