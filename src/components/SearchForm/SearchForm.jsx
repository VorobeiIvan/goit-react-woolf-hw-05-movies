import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './SearchForm.css';

const SearchForm = ({ onSubmit, onReset }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get('query') || '');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
    setSearchParams({ query: inputValue });
  };

  const handleReset = () => {
    setInputValue('');
    setSearchParams({ query: '' });
    onReset();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="input-search"
        name="query"
        type="text"
        placeholder="Search movies"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button className="search-button btn" type="submit">
        Search
      </button>
      <button className="reset-button btn" type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default SearchForm;
