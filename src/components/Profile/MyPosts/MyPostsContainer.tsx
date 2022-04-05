import MyPosts from './MyPosts';
import { addPost } from '../../../redux/profileReducer';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';

const mapStateToProps = (state: AppStateType) => {
  return {
    myPostsState: state.profilePage,
  };
};

//@ts-ignore
export default connect<any>(mapStateToProps, { addPost })(MyPosts);
