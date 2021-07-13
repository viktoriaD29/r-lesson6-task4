import React, { Component } from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

const Status = (props) => {
  const { isOnline } = props;
  return isOnline ? <Online /> : <Offline onOnline={this.handleOnline} />;
};

export default Status;
