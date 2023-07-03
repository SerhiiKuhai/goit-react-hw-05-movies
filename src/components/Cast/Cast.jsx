import React, { useState, useEffect } from 'react';
import { getMoviesService } from 'service/GetMoviesService';
import { Grid, GridItem } from 'components/Grid/Grid.styled';
import { Container } from 'components/Container/Container.styled';

const { useParams } = require('react-router-dom');

export const Cast = () => {
  const { movieId } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMoviesService(URL)
      .then(results => {
        setCast(results);
      })
      .catch(error => console.error(error));
  }, [URL]);

  return (
    cast && (
      <Container>
        <Grid>
          {cast.cast &&
            cast.cast.map(element => {
              return (
                <GridItem key={element.id}>
                  {element.profile_path !== null && (
                    <img
                      width="100px"
                      height="150px"
                      src={`https://image.tmdb.org/t/p/w500/${element.profile_path}`}
                      alt={element.name}
                    />
                  )}

                  <h3>{element.name}</h3>
                  <p>{element.character}</p>
                </GridItem>
              );
            })}
        </Grid>
      </Container>
    )
  );
};
