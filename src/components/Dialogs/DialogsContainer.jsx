import React from 'react';
import Dialogs from './Dialogs';
import { addMessage } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect/withAuthRedirect';
import { compose } from 'redux';

class DialogsContainer extends React.Component {
  render() {
    return (
      <Dialogs
        dialogPageState={this.props.dialogPageState}
        addMessage={this.props.addMessage}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dialogPageState: state.dialogPage,
  };
};

export default compose(
  connect(mapStateToProps, {
    addMessage,
  }),
  withAuthRedirect
)(DialogsContainer);
