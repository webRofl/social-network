import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import MessageForm from './MessageForm/MessageForm';
import { InitialDialogPageStateType } from '../../redux/dialogsReducer';

type PropType = {
  dialogPageState: InitialDialogPageStateType;
  addMessage: (message: string) => void;
};

const Dialogs: React.FC<PropType> = (props) => {
  const DialogsElements = props.dialogPageState.dialogs.map((data, index) => (
    <DialogItem path={String(data.id)} name={data.name} key={index} />
  ));

  const MessageElements = props.dialogPageState.messages.map((data, index) => (
    <Message message={data.message} key={index} owner={data.owner} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{DialogsElements}</div>
      <div>
        <div className={classes.messagesList}>{MessageElements}</div>
        <div>
          <MessageForm addMessage={props.addMessage} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
