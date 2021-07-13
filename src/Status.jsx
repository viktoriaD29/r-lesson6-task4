import React, { Component } from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: false,
    };
  }

  handleOnline = () => {
    // console.log(22);
    // this.setState = {
    //   isOnline: true,
    // };
    this.setState((state) => ({ ...state, isOnline: true }));
    
  };

  render() {
    console.log(this.state.isOnline)
    return (
      <div>
        {this.state.isOnline ? (
          <Online />
        ) : (
          <Offline onOnline={this.handleOnline} />
        )}
      </div>
    );
  }
}

export default Status;
