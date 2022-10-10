import propTypes from 'prop-types';
import { List, Item, Title,Text } from './ReviewsList.styled';

function ReviewsList({ reviews }) {
  return (
    <>
      <List>
        {reviews.map(({ id, author, text }) => {
          return (
            <Item key={id}>
              <Title>{author}</Title>
              <Text>{text}</Text>
            </Item>
          );
        })}
      </List>
    </>
   
  );
}
ReviewsList.propTypes = {
  rewiews: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      author: propTypes.string.isRequired,
      text: propTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ReviewsList;