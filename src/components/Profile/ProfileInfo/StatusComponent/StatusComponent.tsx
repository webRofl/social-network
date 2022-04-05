import React, { useState, useEffect } from 'react';
import { AppStateType } from '../../../../redux/redux-store';
import classes from './StatusComponent.module.css';

type PropType = {
  status: string;
  setStatus: (status: string) => void;
};

const StatusComponent: React.FC<PropType> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const onStatusChange = (status: string) => {
    setStatus(status);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.setStatus(status);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div className={classes.wrapper__profileStatusBlock}>
      <span className={classes.wrapper__profileStatusTip}>Status: </span>
      {editMode ? (
        <input
          type="text"
          value={status}
          onBlur={deactivateEditMode}
          autoFocus={true}
          onChange={(event) => onStatusChange(event.currentTarget.value)}
          className={`${classes.wrapper__profileStatusInput} ${classes.wrapper__profileStatus}`}
        />
      ) : (
        <span
          onDoubleClick={activateEditMode}
          className={classes.wrapper__profileStatus}
        >
          {status || 'click for create your first status'}
        </span>
      )}
    </div>
  );
};

export default StatusComponent;
