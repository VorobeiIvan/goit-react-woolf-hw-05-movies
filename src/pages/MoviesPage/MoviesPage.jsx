import './MoviesPage.css';
const MoviesPage = () => {
  return (
    <div>
      <h1 className="movies-page-title">Movies search</h1>
      <form className="search-form">
        <label className="input-label" htmlFor="query">
          <input
            className="input-search"
            type="text"
            placeholder="Search movies"
            name="query"
            autoFocus
            required
            minLength="2"
            maxLength="40"
            pattern="^[a-zA-Zа-яА-Я]+$"
            title="Please enter only letters"
          />
        </label>

        <button className="search-btn btn" type="submit" disabled = {true}>
          Search
        </button>
        <button className="reset-btn btn" type="reset" disabled={false}>
          Reset
        </button>
      </form>

      <div className="movies-container">
        <ul className="movies-list"></ul>
        <p className="massage">No movies found</p>
      </div>
    </div>
  );
};

export default MoviesPage;
