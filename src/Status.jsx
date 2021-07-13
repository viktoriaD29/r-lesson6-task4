import React from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

class Status extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: false,
    };
  }
  
  handelOnline = () => {
    console.log(22);
    this.setState = ({
      isOnline: true,
    });
  };
  
  render() {
    return (
      <div>
        {this.state.isOnline ? (
          <Online />
        ) : (
          <Offline isOnline={this.handelOnline} />
        )}
      </div>
    );
  }
}

export default Status;
