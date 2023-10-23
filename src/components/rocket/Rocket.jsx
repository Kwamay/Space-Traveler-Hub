import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleReserve } from '../../redux/rockets/rocketsSlice';
import './rocket.css';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const {
    id, description, name, image, reserved,
  } = props;

  // Function to handle reserve button
  const handleReserveButton = () => {
    dispatch(toggleReserve(id));
  };

  return (
    <div key={id} className="rocket-container">
      <img src={image} alt={name} className="rocket-image" />
      <div className="rocket-content">
        <p className="rocket-name">{name}</p>
        <p className="rocket-description">
          {reserved && <span className="reserved-state">Reserved</span>}
          {description}
        </p>
        <button
          type="button"
          className={` ${reserved ? 'cancel-button' : 'rocket-button'}`}
          onClick={handleReserveButton}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

export default Rocket;
