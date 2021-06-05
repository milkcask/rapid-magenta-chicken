import React from 'react';

import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';

import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';

import SearchBox from './SearchBox';
import MovieSearchResults from './MovieSearchResults';

const engine = new Styletron();

function App() {
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [firstSearch, setfirstSearch] = React.useState<Boolean>(false);

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <HeaderNavigation>
          <NavigationList $align={ALIGN.left} style={{width: '100%'}}>
            <NavigationItem>
              search-OMDb
            </NavigationItem>
            <NavigationItem style={{width: '100%'}}>
              <SearchBox setMovies={setMovies} setfirstSearch={setfirstSearch} />
            </NavigationItem>
          </NavigationList>
        </HeaderNavigation>
        { firstSearch ? (
          <MovieSearchResults movies={movies} />
        ):(null)}
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
