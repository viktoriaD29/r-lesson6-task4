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

  handelOnline = () => {
    this.setState({
      isOnline: true,
    });
  };


  render() {
    // let button;
    // if (this.state.isOnline) {
    //   button = <Online />
    // } else {
    //   button = <Offline onOnline={this.handelOffline}/>;
    // }
    return (
      <div>
        {this.isOnline ? (
          <Online isOnline={this.state.isOnline} />
        ) : (
          <Offline isOnline={this.handelOnline} />
        )}
      </div>
    );
  }
}

export default Status;

// {
//   this.state.isOnline ? <Online /> : <Offline />;
// }
