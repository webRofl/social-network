const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

const initialState = {
  dialogs: [
    { id: 0, name: 'Dimych' },
    { id: 1, name: 'Valera' },
    { id: 2, name: 'Nikita' },
    { id: 3, name: 'Isabella' },
    { id: 4, name: 'Burgers' },
    { id: 5, name: 'Eat' },
    { id: 6, name: 'Spicy' },
  ],
  messages: [
    { id: 0, message: 'Hi', owner: 'me' },
    { id: 1, message: 'How are you?', owner: 'me' },
    { id: 2, message: 'Yo', owner: 'Isabella' },
  ],
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      const newMessage = {
        id: 3,
        message: action.message.trim(),
        owner: 'me',
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    default:
      return state;
  }
};

export const addMessage = (message) => ({ type: ADD_NEW_MESSAGE, message });

export default dialogReducer;
