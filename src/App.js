import React from 'react';
import PostForm from './components/PostForm.js';
import Posts from './components/Posts.js';
import FetchedPosts from './components/FetchedPosts.js';

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные Посты:</h2>
          <Posts posts={[]} />
        </div>
        <div className="col">
        <h2>Асинхронные Посты:</h2>
          <FetchedPosts posts={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;