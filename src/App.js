import React from 'react';
import './App.css';
import PostList from './components/PostList/index';

// TODO add functinality
// https://redux.js.org/advanced/example-reddit-api

function App() {
  return (
    <div>
      <h1>Welcome to r/ethereum</h1>
      <PostList />
    </div>
  );
}

export default App;
