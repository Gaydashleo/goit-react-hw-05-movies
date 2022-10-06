import PropTypes from 'prop-types';

function Container({ children }) {
  return <Container>{ children}</Container>
}
Container.propTypes = {
  children: PropTypes.node.isRequired,
};