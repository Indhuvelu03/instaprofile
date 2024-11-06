import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <img src="https://tse3.mm.bing.net/th?id=OIP.PYhE4o4K6wdJCLqzbKoBrwHaE8&pid=Api&P=0&h=180" alt="Profile" className="profile-pic" />
      <div className="profile-info">
        <h2 className="username">🚶‍♂️NatureExplorer_0331🐾✨</h2>
        <button className="follow-button">Follow</button>
        <div className="stats">
          <span><strong>35</strong> posts</span>
          <span><strong>4.8k</strong> followers</span>
          <span><strong>297</strong> following</span>
        </div>
        <p className="bio">🌿 Embracing the wild, one adventure at a time 🌍</p>
      </div>
    </div>
  );
}

export default Profile;
