import React, { Component } from 'react';

const Offline = (props) => {
  return (
    <div className="status">
      <span className="status__text">Offline</span>
      <button className="status__btn" onClick={props.isOnline}>
        Reconnect
      </button>
    </div>
  );
};

export default Offline;
