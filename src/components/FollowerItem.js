import React from 'react';

class FollowerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      follower: {}
    };
  }

  componentDidMount() {
    const { username } = this.props;
    const url = `https://api.github.com/users/${username}`;
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ follower: data }))
      .catch(err => console.log('Error when fetching data...'));
  }

  render() {
    const { follower } = this.state;
    return (
      <div className="d-flex w-100 p-3 align-items-center rounded border my-3">
        <div className="d-flex align-items-center w-100 p-3">
          <img
            className="rounded-circle mr-3"
            alt={follower.login}
            src={follower.avatar_url}
            width="80"
            height="80"
          />
          <div className="d-flex flex-column">
            <small className="font-weight-light text-secondary m-0 p-0">
              {follower.name}
            </small>
            <a className="font-weight-bold text-secondary" href={`https://github.com/${follower.login}`}>
              {follower.login}
            </a>
          </div>
        </div>
        <div className="d-flex flex-row-reverse w-100 p-3">
          <p>
            <span className="text-secondary mr-2" title="Repos">
              {follower.public_repos}
            </span>
            <i className="fab fa-github-alt text-secondary" title="Repos" />
          </p>
        </div>
      </div>
    );
  }
}

export default FollowerItem;
