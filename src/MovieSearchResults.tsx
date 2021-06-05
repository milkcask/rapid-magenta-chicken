import React from 'react';
import MovieCard from './MovieCard';
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import {
  Caption1,
} from 'baseui/typography';

type MovieSearchResultsProps = {
  movies: Movie[],
}

const MovieSearchResults = ({ movies }: MovieSearchResultsProps) => 
  <>
    <Caption1>About {movies.length} results</Caption1>
    <FlexGrid
      flexGridColumnCount={[2, 2, 3, 6]}
      flexGridColumnGap="scale400"
      flexGridRowGap="scale400"
      marginTop="scale400"
    >
    { movies.map((movie) => (
      <FlexGridItem>
        <MovieCard
          movie={movie}
        />
      </FlexGridItem>
    ))}
    </FlexGrid>
  </>

export default MovieSearchResults;