import React from 'react';
import './App.css';
import UserPosts from './component/UserPosts'
import AddNewPost from './component/AddNewPost';
function App() {
  return (
    <div className="App">
      <h2>Twitter Clone</h2>
      <AddNewPost />
      <UserPosts />
    </div>
  );
}

export default App;
