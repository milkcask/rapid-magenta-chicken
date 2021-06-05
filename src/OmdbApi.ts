const apiKey = process.env.REACT_APP_OMDB_API_KEY || "OMDb API key missing";

class Movie {
  title: string;
  id: string;
  year: string;
  posterUrl: string;
  constructor(title: string, id: string, year: string, posterUrl: string ) {
    this.title = title;
    this.id = id;
    this.year = year;
    this.posterUrl = posterUrl;
  }
}

function formatMovie(movieJSON: any): Movie {
  // console.log(movieJSON)
  const posterUrl = movieJSON.Poster === "N/A" ? '' : movieJSON.Poster
  
  return {
    title: movieJSON.Title,
    id: movieJSON.imdbID,
    year: movieJSON.Year,
    posterUrl: posterUrl,
  };
}

class OmdbApi {
  searchMovies(keyword: string): Promise<Movie[]> {
  return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${keyword}`)
    .then(res => res.json()) // Improvement needed.
    .then( (data) => {
      if (data.Response === "True") {
        return data.Search.map((movieJSON: any) => formatMovie(movieJSON))
      } else {
        return []; // Improvement needed.
      }
    })
  }
}

export default OmdbApi;