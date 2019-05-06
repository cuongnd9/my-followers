import React from 'react';
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
        {followers.map((follower, index) => (
          <FollowerItem username={follower.login} key={index} />
        ))}
      </div>
    );
  }
}

export default Content;
