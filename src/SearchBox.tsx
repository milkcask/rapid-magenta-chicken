import React, { FormEvent } from 'react';
import {Input} from 'baseui/input';
import {Button} from "baseui/button";
import {Search as IconSearch} from 'baseui/icon'
import {useStyletron} from 'baseui';
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

  const search = (event:FormEvent) => {
    event.preventDefault();
    const OmdbClient = new OmdbApi();
    OmdbClient.searchMovies(value).then( (movies) => {
      setMovies(movies)
      setfirstSearch(true)
    })
  }

  const labelText = 'Search movie'
  const a11yDescription = 'Search the O-M-D-B- for movie by title name'

  return (
    <form name="search" role="search" action="." onSubmit={search}>
      <div className={css({display: 'flex'})}>
        <Input
          type="search"
          name="search"
          id="search"
          value={value}
          placeholder={labelText}
          onChange={onChange}
          aria-label={a11yDescription}
          clearable
          clearOnEscape
          autoFocus
        />
        <Button type="submit">
          <IconSearch />
        </Button>
      </div>
    </form>
  );
}