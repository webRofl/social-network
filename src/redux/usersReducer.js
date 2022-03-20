import { usersAPI } from '../api/api';

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_PAGE_COUNT = 'SET_TOTAL_PAGE_COUNT';
const SET_TOGGLE_IS_FETCHING = 'SET_TOGGLE_IS_FETCHING';
const SET_TOGGLE_IS_PROGRESS = 'SET_TOGGLE_IS_PROGRESS';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  inProgressBtn: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId)
            return { ...user, followed: !user.followed };
          return user;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_PAGE_COUNT:
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

export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_PAGE_COUNT,
  totalUsersCount,
});
export const setToggleIsFetching = (isFetching) => ({
  type: SET_TOGGLE_IS_FETCHING,
  isFetching,
});
export const setToggleIsProgress = (isFollowProgress, id) => ({
  type: SET_TOGGLE_IS_PROGRESS,
  isFollowProgress,
  id,
});

// thunks creators

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setToggleIsFetching(true));
  const response = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setCurrentPage(currentPage));
  dispatch(setToggleIsFetching(false));
  dispatch(setUsers(response.items));
  dispatch(setTotalUsersCount(response.totalCount));
};

const toggleTCFlow = async (dispatch, apiMethod, id) => {
  dispatch(setToggleIsProgress(true, id));

  const unfollowData = await apiMethod(id);

  if (unfollowData.resultCode === 0) {
    dispatch(toggleFollow(id));
  }

  dispatch(setToggleIsProgress(false, id));
};

export const toggleFollowTC = (user) => (dispatch) => {
  if (user.followed) {
    toggleTCFlow(dispatch, usersAPI.unfollow.bind(usersAPI), user.id);
  } else {
    toggleTCFlow(dispatch, usersAPI.follow.bind(usersAPI), user.id);
  }
};

export default usersReducer;
