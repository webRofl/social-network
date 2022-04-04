import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';
const UPDATE_PHOTO_SUCCESS = 'profileReducer/UPDATE_PHOTO_SUCCESS';
const UPDATE_PROFILE_SUCCESS = 'profileReducer/UPDATE_PROFILE_SUCCESS';
const SET_EDIT_MODE_FORM = 'profileReducer/SET_EDIT_MODE_FORM';
const SET_ERROR_FORM = 'profileReducer/SET_ERROR_FORM';

type PostType = {
  id: number
  name: string
  likesCount: number
};

type ProfileContactsType = {
  facebook: string
  github: string
  instagram: string
  mainLink: string
  twitter: string
  vk: string
  website: string
  youtube: string
};

type ProfilePhotosType = {
  large: string | null
  small: string | null
};

type ProfileType = {
  aboutMe: string
  contacts: ProfileContactsType
  fullName: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  photos: ProfilePhotosType
  userId: number
  };

const initialState = {
  posts: [
    { id: 0, name: "It's my first props", likesCount: 5 },
    { id: 1, name: 'Second', likesCount: 76 },
    { id: 2, name: 'Rofl post', likesCount: 901 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '' as string,
  editMode: false,
  errorForm: null as string[] | null,
};

type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
            ...state.profile!.contacts,
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

type AddPostActionType = {
  type: typeof ADD_POST
  postName: string
};

export const addPost = (postName: string): AddPostActionType => ({ type: ADD_POST, postName });

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
};

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profile,
});

type SetUserStatusActionType = {
  type: typeof SET_USER_STATUS
  status: string
};

export const setUserStatus = (status: string): SetUserStatusActionType => ({
  type: SET_USER_STATUS,
  status,
});

type DeletePostActionType = {
  type: typeof DELETE_POST
  id: number
};

export const deletePost = (id: number): DeletePostActionType => ({ type: DELETE_POST, id });

type UpdatePhotoSuccessActionType = {
  type: typeof UPDATE_PHOTO_SUCCESS
  photos: ProfilePhotosType
};

const updatePhotoSuccess = (photos: ProfilePhotosType): UpdatePhotoSuccessActionType => ({
  type: UPDATE_PHOTO_SUCCESS,
  photos,
});

type UpdateProfileSuccessActionType = {
  type: typeof UPDATE_PROFILE_SUCCESS
  profile: ProfileType
  contacts: ProfileContactsType
};

const updateProfileSuccess = (profile: ProfileType, contacts: ProfileContactsType): UpdateProfileSuccessActionType => ({
  type: UPDATE_PROFILE_SUCCESS,
  profile,
  contacts,
});

type SetEditModeActionType = {
  type: typeof SET_EDIT_MODE_FORM
  editMode: boolean
};

export const setEditMode = (editMode: boolean): SetEditModeActionType => ({
  type: SET_EDIT_MODE_FORM,
  editMode,
});

type SetErrorFormActionType = {
  type: typeof SET_ERROR_FORM
  error: string
};

const setErrorForm = (error: string): SetErrorFormActionType => ({ type: SET_ERROR_FORM, error });

// thunk creator

export const getMyProfile = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response));
};

export const getStatus = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(response));
};

export const setStatus = (status: string) => async (dispatch: any) => {
  const response = await profileAPI.setStatus(status);
  if (response.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export const updatePhoto = (photo: string) => async (dispatch: any) => {
  const response = await profileAPI.sendPhoto(photo);
  if (response.resultCode === 0) {
    dispatch(updatePhotoSuccess(response.data));
  }
};

export const updateProfile = (profile: ProfileType, contacts: ProfileContactsType) => async (dispatch: any) => {
  const response = await profileAPI.updateProfile({ ...profile }, contacts);
  if (response.resultCode === 0) {
    dispatch(updateProfileSuccess(profile, contacts));
  } else {
    dispatch(setErrorForm(response.messages[0]));
  }
  return response.resultCode;
};

export default profileReducer;
