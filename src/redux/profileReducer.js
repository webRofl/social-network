import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';
const UPDATE_PHOTO_SUCCESS = 'profileReducer/UPDATE_PHOTO_SUCCESS';
const UPDATE_PROFILE_SUCCESS = 'profileReducer/UPDATE_PROFILE_SUCCESS';
const SET_EDIT_MODE_FORM = 'profileReducer/SET_EDIT_MODE_FORM';
const SET_ERROR_FORM = 'profileReducer/SET_ERROR_FORM';

const initialState = {
  posts: [
    { id: 0, name: "It's my first props", likesCount: 5 },
    { id: 1, name: 'Second', likesCount: 76 },
    { id: 2, name: 'Rofl post', likesCount: 901 },
  ],
  profile: null,
  status: '',
  editMode: false,
  errorForm: null,
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
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.profile,
          contacts: {
            ...state.profile.contacts,
            ...action.contacts,
          },
        },
      };
    case SET_EDIT_MODE_FORM:
      return {
        ...state,
        editMode: action.editMode,
      };
    case SET_ERROR_FORM:
      return {
        ...state,
        errorForm: action.error,
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

const updateProfileSuccess = (profile, contacts) => ({
  type: UPDATE_PROFILE_SUCCESS,
  profile,
  contacts,
});

export const setEditMode = (editMode) => ({
  type: SET_EDIT_MODE_FORM,
  editMode,
});

const setErrorForm = (error) => ({ type: SET_ERROR_FORM, error });

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

export const updateProfile = (profile, contacts) => async (dispatch) => {
  const response = await profileAPI.updateProfile(profile);
  if (response.resultCode === 0) {
    dispatch(updateProfileSuccess(profile, contacts));
  } else {
    dispatch(setErrorForm(response.messages[0]));
  }
  return response.resultCode;
};

export default profileReducer;
