import React from 'react';
import { useSelector } from 'react-redux';
import './myProfileDragon.css';

const MyProfileRockets = () => {
  const { rockets } = useSelector((store) => store.rockets);
  const reservedrockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="my-missions-container">
      <table className="mission-table">
        <thead className="table-title">
          <tr>
            <th>
              <h2 className="my-missions-title">My Rockets</h2>
            </th>
          </tr>
        </thead>
        <tbody className="table-body">
          {reservedrockets.map((rocket) => (
            <tr className="mission-list" key={rocket.rocketId}>
              <td>{rocket.rocketId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProfileRockets;
