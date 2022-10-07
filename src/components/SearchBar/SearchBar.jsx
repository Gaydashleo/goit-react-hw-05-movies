import { useState } from 'react';
import { toast } from 'react-toastify';
import { FormSearch, InputSearch, ButtonSubmit } from './SearchBar.styled';
import { FaSearch } from 'react-icons/fa';
import propTypes from 'prop-types';

function SearchBar({onHandleSubmit}) {
  const [query, setQuery] = useState('');

  function onSubmitForm(e) {
    e.preventDefault();
    if (query.trim()==='') {
      return toast.info('Please enter')
    }
      onHandleSubmit(query.trim());
    setQuery('');
  };

  return (
    <>
      <FormSearch onsubmit={onSubmitForm}>
        <InputSearch
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..." />
        <ButtonSubmit type="submit">
          <FaSearch />
        </ButtonSubmit>
      </FormSearch>
    </>
  );
}

SearchBar.propTypes = {
  onHandleSubmit: propTypes.func.isRequired,
};

export default SearchBar;