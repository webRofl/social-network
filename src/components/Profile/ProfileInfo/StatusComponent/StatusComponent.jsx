import React, { useState, useEffect } from 'react';
import classes from './StatusComponent.module.css';

const StatusComponent = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const onStatusChange = (status) => {
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
    <div>
      {editMode ? (
        <div>
          <input
            type="text"
            value={status}
            onBlur={deactivateEditMode}
            autoFocus={true}
            onChange={(event) => onStatusChange(event.currentTarget.value)}
          />
        </div>
      ) : (
        <div>
          <span onDoubleClick={activateEditMode}>
            {status || 'click for create your first status'}
          </span>
        </div>
      )}
    </div>
  );
};

export default StatusComponent;
