import React from 'react';
import { useSelector } from 'react-redux';
import './myProfileDragon.css';

const MyProfileDragon = () => {
  const dragons = useSelector((state) => state.dragon.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.isreserved);

  return (
    <div className="my-missions-container">
      <table className="mission-table">
        <thead className="table-title">
          <tr>
            <th>
              <h2 className="my-missions-title">My Dragons</h2>
            </th>
          </tr>
        </thead>
        <tbody className="table-body">
          {reservedDragons.map((dragon) => (
            <tr className="mission-list" key={dragon.id}>
              <td>{dragon.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProfileDragon;
