import React from 'react';
import MovieCard from './MovieCard';
import {Grid, Cell, StyledCell} from 'baseui/layout-grid';

import {
  Caption1,
} from 'baseui/typography';
import {Heading, HeadingLevel} from 'baseui/heading';


type MovieSearchResultProps = {
  movies: Movie[],
}

const MovieSearchResult = ({ movies }: MovieSearchResultProps) => 
  <main tabIndex={0} role="main">
    <HeadingLevel>
      <Grid
        gridColumns={[2, 3, 5]}
        gridUnit="rem"
        gridGutters={[0.5, 1, 1]}
        gridMargins={[1, 2, 6]}
        gridGaps={1.75}
      >
      <StyledCell $gridGaps={0} $span={12}>
        <Heading styleLevel={3}>Search result</Heading>
        <Caption1>About {movies.length} results</Caption1> {/* Improvement: focus for accessibility? */}
      </StyledCell>
      { movies.map((movie) => (
        <Cell key={movie.id}>
          <MovieCard
            movie={movie}
          />
        </Cell>
      ))}
      </Grid>
    </HeadingLevel>
  </main>

export default MovieSearchResult;