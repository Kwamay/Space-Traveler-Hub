import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissionsAsync } from '../../redux/missions/missionsSlice';
import Missions from './Missions';

function MissionsContainer() {
  const missions = useSelector((state) => state.missions.missionData);
  const selectedMissions = useSelector(
    (state) => state.missions.selectedMissions,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions || missions.length === 0) {
      dispatch(fetchMissionsAsync());
    }
  }, [dispatch, missions]);

  return <Missions missions={missions} selectedMissions={selectedMissions} />;
}

export default MissionsContainer;
