import React from 'react';

const Offline = (props) => {
  return (
    <div className="status">
      <span className="status__text">Offline</span>
      <button className="status__btn" onClick={props.onOnline}>
        Recconect
      </button>
    </div>
  );
};

export default Offline;
