import PostList from './PostList';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { posts: state.postsBySubreddit[state.selectedSubreddit] };
};

export default connect(
  mapStateToProps,
  null
)(PostList);
