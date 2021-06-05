import React from 'react';
import MovieCard from './MovieCard';
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
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
      <Heading styleLevel={3}>Search result</Heading>
      <Caption1>About {movies.length} results</Caption1> {/* Improvement: focus for accessibility? */}
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
    </HeadingLevel>
  </main>

export default MovieSearchResult;