import React from 'react';
import {Card, StyledBody, StyledAction} from 'baseui/card';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) =>
  <Card
    headerImage={
      movie.posterUrl ?
        {
          src: movie.posterUrl,
          alt: "Maybe a poster of "+movie.title
        } :
        undefined
    }
    title={movie.title}
  >
    <StyledBody>
      Year: {movie.year}
    </StyledBody>
  </Card>

export default MovieCard;