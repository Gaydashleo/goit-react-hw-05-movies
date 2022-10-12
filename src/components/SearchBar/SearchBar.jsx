
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Container from 'components/Container';
import { FormSearch, InputSearch, ButtonSubmit } from './SearchBar.styled';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  function onSubmitForm(e) {
    e.preventDefault();
    
    const value = e.target.elements.query.value;


    navigate({
      ...location,
      search: `query=${value}`,
    });
   
  }
// defaultValue={searchParams.get('query')}
  return (
    <Container>
      <FormSearch onSubmit={onSubmitForm}>
        <InputSearch type="text" name="query" defaultValue={searchParams.get('query')} />
        <ButtonSubmit type="submit">
          <FaSearch />
        </ButtonSubmit>
      </FormSearch>
    </Container>
  );
}

export default SearchBar;
