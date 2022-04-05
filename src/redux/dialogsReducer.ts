const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

type InitialDialogsType = {
  id: number;
  name: string;
};

type InitialMessageType = {
  id: number;
  message: string;
  owner: string;
};

const initialState = {
  dialogs: [
    { id: 0, name: 'Dimych' },
    { id: 1, name: 'Valera' },
    { id: 2, name: 'Nikita' },
    { id: 3, name: 'Isabella' },
    { id: 4, name: 'Burgers' },
    { id: 5, name: 'Eat' },
    { id: 6, name: 'Spicy' },
  ] as Array<InitialDialogsType>,
  messages: [
    { id: 0, message: 'Hi', owner: 'me' },
    { id: 1, message: 'How are you?', owner: 'me' },
    { id: 2, message: 'Yo', owner: 'Isabella' },
  ] as Array<InitialMessageType>,
};

export type InitialDialogPageStateType = typeof initialState;

const dialogReducer = (
  state = initialState,
  action: any
): InitialDialogPageStateType => {
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

type AddMessageActionType = {
  type: typeof ADD_NEW_MESSAGE;
  message: string;
};

export const addMessage = (message: string): AddMessageActionType => ({
  type: ADD_NEW_MESSAGE,
  message,
});

export default dialogReducer;
