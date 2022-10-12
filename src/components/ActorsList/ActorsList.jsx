import PropTypes from 'prop-types';
import bgActor from '../../utils/Image/oscar.jpg';
import { List, Item, PhotoWrap, Photo, Name } from './ActorsList.styled';
import Container from 'components/Container';

function ActorsList({ actors }) {
  return (
    <Container isPadding>
      <List>
        {actors.map(({ id, name, photo }) => {
          return (
            <Item key={id}>
              <PhotoWrap>
                <Photo
                  src={
                    photo ? `https://image.tmdb.org/t/p/w500/${photo}` : bgActor}
                    alt={name}
                />
              </PhotoWrap>
              <Name>{name}</Name>
            </Item>
          );
        })}
      </List>
    </Container>
  );
}
ActorsList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      photo: PropTypes.string,
    }),
  ).isRequired,
};
export default ActorsList;