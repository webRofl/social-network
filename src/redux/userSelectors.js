export const getUsersSelector = (state) => state.usersPage.users;

export const getPageSizeSelector = (state) => state.usersPage.pageSize;

export const getTotalUsersCountSelector = (state) =>
  state.usersPage.totalUsersCount;

export const getCurrentPageSelector = (state) => state.usersPage.currentPage;

export const getIsFetchingSelector = (state) => state.usersPage.isFetching;

export const getInProgressSelector = (state) => state.usersPage.inProgressBtn;
