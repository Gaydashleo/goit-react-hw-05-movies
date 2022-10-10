import propTypes from 'prop-types';
import bgActor from '../../Image/oscar.jpg';
import { List, Item, PhotoWrap, Photo, Name } from './ActorsList.styled';


function ActorsList({ actors }) {
  return (
    <>
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
    </>
  );
}
ActorsList.propTypes = {
  actors: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      photo: propTypes.string.isRequired,
    }),
  ).isRequired,
};
export default ActorsList;