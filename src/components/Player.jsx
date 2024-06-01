import React from "react";
import { useState } from "react";

const Player = ({ initialName, symbol, isActive }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  }

  const editablePlayerName = isEditing ? (
    <input type="text" required value={playerName} onChange={handleChange}></input>
  ) : (
    <span className="player-name">{playerName}</span>
  );

  return (
    <li className={isActive ? 'active': undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
