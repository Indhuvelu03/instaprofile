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
        
        {/* New Followed by section with profile pictures */}
        <div className="followed-by">
          <span>Followed by </span>
          <div className="followed-user">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="travelbug_92" className="followed-user-pic" />
            <span>travelbug_92</span>
          </div>, 
          <div className="followed-user">
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="mountain_dreamer" className="followed-user-pic" />
            <span>mountain_dreamer</span>
          </div>, 
          <div className="followed-user">
            <img src="https://randomuser.me/api/portraits/women/47.jpg" alt="forestwhisperer" className="followed-user-pic" />
            <span>forestwhisperer</span>
          </div>
          <span> ...others</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
