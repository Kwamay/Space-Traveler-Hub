import React from 'react';
import './dragon.css';
import { useDispatch, useSelector } from 'react-redux';
import { reserveDragon } from '../../redux/Dragon/dragonSlice';

export default function Dragons() {
  const dragons = useSelector((state) => state.dragon.dragons);
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(reserveDragon(id));
  };

  return (
    <div className="main-dragon" data-testid="main-dragon">
      {dragons.map((dragon, index) => (
        <div key={dragon.name} className="singledragon">
          <img src={dragon.flickr_images[0]} alt={`Dragon ${index + 1}`} className="dragon-image" />
          <div className="dragon-data">
            <h1 className="dragon-name">{dragon.name}</h1>
            <p className="dragon-description">
              <span className={dragon.isreserved ? 'button-22' : 'button-23'}>{dragon.isreserved ? 'RESERVED' : ''}</span>
              {dragon.description}
            </p>
            <button className={dragon.isreserved ? 'button-39' : 'dragon-button'} type="button" onClick={() => handleClick(dragon.id)}>{dragon.isreserved ? 'Cancel Dragon' : 'Reserve Dragon'}</button>
          </div>
        </div>
      ))}
    </div>
  );
}
