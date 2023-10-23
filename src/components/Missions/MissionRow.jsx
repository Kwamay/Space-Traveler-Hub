import React from 'react';
import { useDispatch } from 'react-redux';
import { joinMission, cancelMission } from '../../redux/missions/missionsSlice';
import './missions.css';

function MissionRow({ mission }) {
  const isActiveMember = mission.reserved;
  const buttonText = isActiveMember ? 'Leave Mission' : 'Join Mission';
  const statusText = isActiveMember ? 'Active member' : 'NOT a member';

  const dispatch = useDispatch();

  const handleMissionAction = () => {
    if (isActiveMember) {
      dispatch(cancelMission(mission.mission_id));
    } else {
      dispatch(joinMission(mission.mission_id));
    }
  };

  return (
    <tr key={mission.mission_id}>
      <td className="mission-name-cell">
        <h3 className="mission-name">{mission.mission_name}</h3>
      </td>
      <td className="mission-description-cell">
        <p className="mission-description">{mission.description}</p>
      </td>
      <td className="mission-status-cell">
        <div className="mission-status">
          <p className={isActiveMember ? 'active-member-status' : 'not-member-status'}>
            {statusText}
          </p>
        </div>
      </td>
      <td className="mission-action-cell">
        <button
          type="button"
          className={isActiveMember ? 'leave-mission-button' : 'join-mission-button'}
          onClick={handleMissionAction}
        >
          {buttonText}
        </button>
      </td>
    </tr>
  );
}

export default MissionRow;
