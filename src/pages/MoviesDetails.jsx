import React, { useState, useEffect } from 'react';
import { useRef, Suspense } from 'react';
import { Outlet, Link, useLocation, useParams } from 'react-router-dom';
import { getMoviesService } from 'service/GetMoviesService';
import { Grid, GridItem } from 'components/Grid/Grid.styled';
import { TitleH1, TitleH2, TitleH3 } from 'components/Title/Title.styled';
import { Container, ContainerDiv } from 'components/Container/Container.styled';

const MoviesDetails = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;


  useEffect(() => {
    getMoviesService(URL)
      .then(results => {
        setSearchMovie(results);
      })
      .catch(error => console.error(error));
  }, [URL]);

  return (
    searchMovie && (
      <>
        <Container>
          <Link to={backLinkLocationRef.current}>&larr; Go back</Link>
          <ContainerDiv>
            {searchMovie.backdrop_path !== null && (
              <img
                width="250px"
                height="250px"
                src={`https://image.tmdb.org/t/p/original/${searchMovie.backdrop_path}`}
                alt={searchMovie.original_title}
              />
            )}

            <div>
              <TitleH1>{searchMovie.original_title}</TitleH1>
              <p>User Scrore: {Math.round(searchMovie.vote_average * 10)}%</p>
              <TitleH2>Overview</TitleH2>
              <p>{searchMovie.overview}</p>
              <TitleH2>Genres</TitleH2>
              <Grid>
                {searchMovie.genres &&
                  searchMovie.genres.map(element => {
                    return (
                      <GridItem key={element.id}> {element.name}</GridItem>
                    );
                  })}
              </Grid>
            </div>
          </ContainerDiv>
        </Container>

        <Container>
          <TitleH3>Additional information</TitleH3>
          <Grid>
            <GridItem>
              <Link to="cast">Cast</Link>
            </GridItem>
            <GridItem>
              <Link to="reviews">Reviews</Link>
            </GridItem>
          </Grid>
        </Container>

        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </>
    )
  );
};

export default MoviesDetails;
