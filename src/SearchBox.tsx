import React, { FormEvent } from 'react';
import { useStyletron } from 'baseui';

import { FormControl } from "baseui/form-control";
import { Input } from 'baseui/input';
import { Button } from "baseui/button";
import { Search as IconSearch } from 'baseui/icon'

import OmdbApi from './OmdbApi';

type SearchBoxProps = {
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  setfirstSearch: React.Dispatch<React.SetStateAction<Boolean>>;
};

export default function SearchBox({ setMovies, setfirstSearch }: SearchBoxProps) {
  const [css, theme] = useStyletron();

  const labelText = 'Search movie'
  const a11yDescription = 'Search the O-M-D-B- for movie by title name.'
  const [a11yCaption, setA11yCaption] = React.useState(a11yDescription);
  const inputEl = React.useRef<HTMLInputElement>(null);

  const [value, setValue] = React.useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {value} = event.currentTarget;
    setValue(value);
    setA11yCaption(a11yDescription);
  };

  const search = (event:FormEvent) => {
    event.preventDefault();
    const OmdbClient = new OmdbApi();
    OmdbClient.searchMovies(value).then( (resultMovies) => {
      setMovies(resultMovies)
      setfirstSearch(true)
      setA11yCaption(`You searched "`+value+`". ` + a11yDescription)
      inputEl?.current?.blur()
    })
  }

  const srOnly = css({
    position:'absolute',
    left:'-10000px',
    top:'auto',
    width:'1px',
    height:'1px',
    overflow:'hidden',
  })

  return (
    <form name="search" role="search" action="." onSubmit={search}>
      <div tabIndex={0} className={css({display: 'flex'})}>
        <FormControl
          label={() => labelText}
          caption={() => a11yCaption}
          overrides={{
            Label: { props: { className: srOnly}},
            Caption: { props: { className: srOnly, "aria-live": "assertive"}},
            ControlContainer: { style: { margin: 0}},
          }}
        >
          <Input
            type="search"
            name="search"
            id="search"
            value={value}
            placeholder={labelText}
            onChange={onChange}
            aria-role="searchbox"
            clearable
            clearOnEscape
            inputRef={inputEl}
          />
        </FormControl>
        <Button type="submit">
          <IconSearch />
        </Button>
      </div>
    </form>
  );
}