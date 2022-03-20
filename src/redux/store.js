import dialogReducer from './dialogsReducer';
import profileReducer from './profileReducer';

const store = {
  _state: {
    dialogPage: {
      dialogs: [
        { id: 0, name: 'Dimych' },
        { id: 1, name: 'Valera' },
        { id: 2, name: 'Nikita' },
        { id: 3, name: 'Izabella' },
        { id: 4, name: 'Burgers' },
        { id: 5, name: 'Eat' },
        { id: 6, name: 'Spicy' },
      ],
      messages: [
        { id: 0, message: 'Hi' },
        { id: 1, message: 'How are you?' },
        { id: 2, message: 'Yo' },
      ],
      textAreaMessageValue: '',
    },
    profilePage: {
      posts: [
        { id: 0, name: "It's my first props", likesCount: 5 },
        { id: 1, name: 'Second', likesCount: 76 },
        { id: 2, name: 'Rofl post', likesCount: 901 },
      ],
      textareaValue: '',
    },
  },
  _callSubscriber() {
    console.log('State changed');
  },
  subscriber(observer) {
    // in real redux function name is "subscribe"
    this._callSubscriber = observer; // ----------- observer ----------- pattern -----------
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    dialogReducer(this._state.dialogPage, action);
    profileReducer(this._state.profilePage, action);
    this._callSubscriber();
  },
};

window.state = store._state; // delete this

export default store;
