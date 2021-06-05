import OmdbApi from './OmdbApi';

it("should return an <Movie[]> with an arbitarily specified movie at index 0", () => {
    const keyword = 'Madoka Eternal'
    const expectedFirstResultTitle = 'Puella Magi Madoka Magica the Movie Part 2: Eternal'
    const OmdbClient = new OmdbApi();
    OmdbClient.searchMovies(keyword).then( movies => expect( movies[0].title ).toEqual(expectedFirstResultTitle) )
})