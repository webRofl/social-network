import profileReducer, {
  addPost,
  setUserProfile,
  setUserStatus,
  deletePost,
} from './profileReducer';

const testState = {
  posts: [
    { id: 0, name: "It's my first props", likesCount: 5 },
    { id: 1, name: 'Second', likesCount: 76 },
    { id: 2, name: 'Rofl post', likesCount: 901 },
  ],
  profile: null,
  status: '',
};

test('add post working correctly', () => {
  const action = addPost('test name');

  const newState = profileReducer(testState, action);

  expect(newState.posts.length).toBe(4);
  expect(newState.posts[3].id).toBe(3);
});

test('set user profile working correctly', () => {
  const action = setUserProfile({ name: 'Max', age: 19 });

  const newState = profileReducer(testState, action);

  expect(newState.profile.name).toBe('Max');
  expect(newState.profile.age).toBe(19);
});

test('set user status working correctly', () => {
  const action = setUserStatus('new status');

  const newState = profileReducer(testState, action);

  expect(newState.status).toBe('new status');
  expect(newState.status.length).toBe(10);
});

test('delete post working correctly', () => {
  const action = deletePost(1);

  const newState = profileReducer(testState, action);

  expect(newState.posts[2].id).toBe(2);
});
