const SearchForm = ({
  inputValue,
  onInput,
  onSearch,
  onReset,
  searchBtnDisabled,
  resetBtnDisabled,
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="input-label" htmlFor="query">
        <input
          className="input-search"
          type="text"
          placeholder="Search movies"
          name="query"
          autoFocus
          value={inputValue}
          onChange={onInput}
          required
        />
      </label>
      <button
        className="search-btn btn"
        type="submit"
        disabled={searchBtnDisabled}
      >
        Search
      </button>
      <button
        className="reset-btn btn"
        type="button"
        onClick={onReset}
        disabled={resetBtnDisabled}
      >
        Reset
      </button>
    </form>
  );
};

export default SearchForm;
