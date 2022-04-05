import React from 'react';
import Dialogs from './Dialogs';
import {
  addMessage,
  InitialDialogPageStateType,
} from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';

type PropType = {
  dialogPageState: InitialDialogPageStateType;
  addMessage: (message: string) => void;
};

class DialogsContainer extends React.Component<PropType> {
  render() {
    return (
      <Dialogs
        dialogPageState={this.props.dialogPageState}
        addMessage={this.props.addMessage}
      />
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    dialogPageState: state.dialogPage,
  };
};

export default compose<any>(
  connect(mapStateToProps, {
    addMessage,
  }),
  withAuthRedirect
)(DialogsContainer);
