import React from 'react';
import { ClipLoader } from 'react-spinners';
import FollowerItem from './FollowerItem';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: []
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/cuongw/followers')
      .then(res => res.json())
      .then(data => this.setState({ followers: data }))
      .catch(err => console.log('Error when fetching data...'));
  }

  render() {
    const { followers } = this.state;
    return (
      <div>
        {followers.length === 0 && (
          <p className="p-5 text-center">
            <ClipLoader sizeUnit={'px'} size={40} color={'#123abc'} />
          </p>
        )}
        {followers.length > 0 &&
          followers.map((follower, index) => (
            <FollowerItem username={follower.login} key={index} />
          ))}
      </div>
    );
  }
}

export default Content;
