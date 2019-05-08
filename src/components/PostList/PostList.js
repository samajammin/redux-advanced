import React, { Component } from 'react';

export default class PostList extends Component {
  render() {
    if (!this.props.posts.items) {
      return <div>Loading...</div>;
    }
    return this.props.posts.items.map((item, idx) => {
      return (
        <li key={idx}>
          {' '}
          <a href={item.url}>{item.title}</a>
        </li>
      );
    });
  }
}
