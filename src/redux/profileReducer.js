import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';
const UPDATE_PHOTO_SUCCESS = 'profileReducer/UPDATE_PHOTO_SUCCESS';

const initialState = {
  posts: [
    { id: 0, name: "It's my first props", likesCount: 5 },
    { id: 1, name: 'Second', likesCount: 76 },
    { id: 2, name: 'Rofl post', likesCount: 901 },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 3,
        name: action.postName,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_USER_STATUS:
      return { ...state, status: action.status };
    case DELETE_POST:
      return { ...state, posts: state.posts.filter((id) => id !== action.id) };
    case UPDATE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.photos,
        },
      };
    default:
      return state;
  }
};

// action creator

export const addPost = (postName) => ({ type: ADD_POST, postName });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});

export const deletePost = (id) => ({ type: DELETE_POST, id });

const updatePhotoSuccess = (photos) => ({
  type: UPDATE_PHOTO_SUCCESS,
  photos,
});

// thunk creator

export const getMyProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response));
};

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(response));
};

export const setStatus = (status) => async (dispatch) => {
  const response = await profileAPI.setStatus(status);
  if (response.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export const updatePhoto = (photo) => async (dispatch) => {
  const response = await profileAPI.sendPhoto(photo);
  if (response.resultCode === 0) {
    dispatch(updatePhotoSuccess(response.data));
  }
};

export default profileReducer;
