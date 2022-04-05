import { usersAPI } from '../api/api';
import { UserType } from '../types/types';

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_TOGGLE_IS_FETCHING = 'SET_TOGGLE_IS_FETCHING';
const SET_TOGGLE_IS_PROGRESS = 'SET_TOGGLE_IS_PROGRESS';

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 5 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: false,
  inProgressBtn: [] as Array<number>,
};

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((user: UserType) => {
          if (user.id === action.userId)
            return { ...user, followed: !user.followed };
          return user;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };
    case SET_TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case SET_TOGGLE_IS_PROGRESS:
      return {
        ...state,
        inProgressBtn: action.isFollowProgress
          ? [...state.inProgressBtn, action.id]
          : state.inProgressBtn.filter((id) => id !== action.id),
      };
    default:
      return state;
  }
};

// action creators

type ToggleFollowActionType = {
  type: typeof TOGGLE_FOLLOW;
  userId: number;
};

const toggleFollow = (userId: number): ToggleFollowActionType => ({
  type: TOGGLE_FOLLOW,
  userId,
});

type SetUsersActionTypeActionType = {
  type: typeof SET_USERS;
  users: Array<UserType>;
};

export const setUsers = (
  users: Array<UserType>
): SetUsersActionTypeActionType => ({ type: SET_USERS, users });

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};

export const setCurrentPage = (
  currentPage: number
): SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  totalUsersCount: number;
};

export const setTotalUsersCount = (
  totalUsersCount: number
): SetTotalUsersCountActionType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});

type SetTotalIsFetchingActionType = {
  type: typeof SET_TOGGLE_IS_FETCHING;
  isFetching: boolean;
};

export const setToggleIsFetching = (
  isFetching: boolean
): SetTotalIsFetchingActionType => ({
  type: SET_TOGGLE_IS_FETCHING,
  isFetching,
});

type SetToggleProgressActionType = {
  type: typeof SET_TOGGLE_IS_PROGRESS;
  isFollowProgress: boolean;
  id: number;
};

export const setToggleIsProgress = (
  isFollowProgress: boolean,
  id: number
): SetToggleProgressActionType => ({
  type: SET_TOGGLE_IS_PROGRESS,
  isFollowProgress,
  id,
});

// thunks creators

export const getUsers =
  (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(setToggleIsFetching(true));
    const response = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setCurrentPage(currentPage));
    dispatch(setToggleIsFetching(false));
    dispatch(setUsers(response.items));
    console.log(response.items);

    dispatch(setTotalUsersCount(response.totalCount));
  };

const toggleTCFlow = async (dispatch: any, apiMethod: Function, id: number) => {
  dispatch(setToggleIsProgress(true, id));

  const unfollowData = await apiMethod(id);

  if (unfollowData.resultCode === 0) {
    dispatch(toggleFollow(id));
  }

  dispatch(setToggleIsProgress(false, id));
};

export const toggleFollowTC = (user: UserType) => (dispatch: any) => {
  if (user.followed) {
    toggleTCFlow(dispatch, usersAPI.unfollow.bind(usersAPI), user.id);
  } else {
    toggleTCFlow(dispatch, usersAPI.follow.bind(usersAPI), user.id);
  }
};

export default usersReducer;
