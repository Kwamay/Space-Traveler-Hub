import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getRockets } from '../../redux/rockets/rocketsSlice';

import Rocket from './Rocket';

const RocketList = () => {
  const { rockets } = useSelector((store) => store.rockets);
  const { isLoading } = useSelector((store) => store.rockets);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  if (isLoading) return <div className="loading-message">Rocket data loading...</div>;

  return (
    <div>
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.rocketId}
          id={rocket.rocketId}
          name={rocket.rocketName}
          description={rocket.description}
          image={rocket.flickrImages}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
};

export default RocketList;
