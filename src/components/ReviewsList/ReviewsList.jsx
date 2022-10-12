import PropTypes from 'prop-types';
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
  rewiews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ReviewsList;