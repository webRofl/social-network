import appReducer, { initializeApp } from './appReducer';

const testState = {
  isInitialized: false,
};

test('initializeApp working correctly', () => {
  const action = initializeApp();

  const newState = appReducer(testState, action);

  expect(newState.isInitialized).toBe(true);
});
