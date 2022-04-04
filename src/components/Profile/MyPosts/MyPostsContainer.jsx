import MyPosts from './MyPosts';
import { addPost } from '../../../redux/profileReducer.ts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    myPostsState: state.profilePage,
  };
};

export default connect(mapStateToProps, { addPost })(MyPosts);
