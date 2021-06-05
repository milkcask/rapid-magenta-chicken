import React, { FormEvent } from 'react';
import { useStyletron } from 'baseui';

import { Input } from 'baseui/input';
import { Button } from "baseui/button";
import { Search as IconSearch } from 'baseui/icon'
import { useLiveRegion } from "@chakra-ui/live-region"

import OmdbApi from './OmdbApi';

type SearchBoxProps = {
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  setfirstSearch: React.Dispatch<React.SetStateAction<Boolean>>;
};

export default function SearchBox({ setMovies, setfirstSearch }: SearchBoxProps) {
  const [css, theme] = useStyletron();

  const [value, setValue] = React.useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {value} = event.currentTarget;
    setValue(value);
  };

  const liveRegion = useLiveRegion({ 'aria-live': "assertive"})
  const inputEl = React.useRef<HTMLInputElement>(null);

  const search = (event:FormEvent) => {
    event.preventDefault();
    const OmdbClient = new OmdbApi();
    OmdbClient.searchMovies(value).then( (movies) => {
      setMovies(movies)
      setfirstSearch(true)
      liveRegion.speak(`You searched "`+value+`".`) // FIXME: screen reader sometimes repeat old strings
      inputEl?.current?.blur()
    })
  }

  const labelText = 'Search movie'
  const a11yDescription = 'Search the O-M-D-B- for movie by title name'

  return (
    <form name="search" role="search" action="." onSubmit={search}>
      <div className={css({display: 'flex'})} tabIndex={0}>
        <Input
          type="search"
          name="search"
          id="search"
          value={value}
          placeholder={labelText}
          onChange={onChange}
          aria-label={a11yDescription}
          aria-role="searchbox"
          clearable
          clearOnEscape
          inputRef={inputEl}
        />
        <Button type="submit">
          <IconSearch />
        </Button>
      </div>
    </form>
  );
}