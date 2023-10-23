import React from 'react';
import { useSelector } from 'react-redux';

function MyMissions() {
  const missions = useSelector((state) => state.missions.missionData);
  const myMissions = missions.filter((mission) => mission.reserved !== false);

  return (
    <div className="my-missions-container">
      <table className="mission-table">
        <thead className="table-title">
          <tr>
            <th>
              <h2 className="my-missions-title">My Missions</h2>
            </th>
          </tr>
        </thead>
        <tbody className="table-body">
          {myMissions.map((mission) => (
            <tr className="mission-list" key={mission.mission_id}>
              <td>
                {mission.mission_name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyMissions;
