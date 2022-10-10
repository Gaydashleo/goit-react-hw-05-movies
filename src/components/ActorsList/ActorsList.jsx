import propTypes from 'prop-types';
import bgActor from '../../Image/oscar.jpg';
import { List, Item, PhotoWrap, Photo, Name } from './ActorsList.styled';
import Container from 'components/Container';

function ActorsList({ actors }) {
  return (
    <Container>
      <List>
        {actors.map(({ id, name, photo }) => {
          return (
            <Item key={id}>
              <PhotoWrap>
                <Photo src={photo ? `https://image.tmdb.org/t/p/w500/${photo}` : bgActor}
                  alt={name} />
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
  actors: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      photo: propTypes.string,
    }),
  ).isRequired,
};
export default ActorsList;