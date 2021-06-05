import React from 'react';
import { Card, StyledBody } from 'baseui/card';
import {Heading, HeadingLevel} from 'baseui/heading';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) =>
  <HeadingLevel>
    <Card
      headerImage={
        movie.posterUrl ?
          {
            src: movie.posterUrl,
            alt: "Maybe a poster of "+movie.title,
            tabIndex: 2
          } :
          undefined
      }
      title={movie.title}
      overrides={{
        HeaderImage: {props:{tabIndex: -1 }},
        Title: {
          component: () => <Heading styleLevel={5}>{movie.title}</Heading>
        },
        Body: {props:{tabIndex: -1 }},
      }}
    >
      <StyledBody>
        Year: {movie.year}
      </StyledBody>
    </Card>
  </HeadingLevel>

export default MovieCard;