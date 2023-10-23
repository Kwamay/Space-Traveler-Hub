import React from 'react';
/* import MyRockets from './MyRockets'; */
import MyMissions from './MyMissions';
import './profiles.css';
import MyProfileDragon from './myProfileDragon';
import MyProfileRockets from './rocket';

function MyProfiles() {
  return (
    <div className="profile-container">
      <MyProfileRockets />
      <MyMissions />
      <MyProfileDragon />
    </div>
  );
}

export default MyProfiles;
