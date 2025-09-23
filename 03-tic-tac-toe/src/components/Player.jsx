import { useState } from "react";

export default function Player({ name, symbol }) {
  const [ isEditing, setIsEditing ] = useState(false);
  const [ playerName, setPlayerName] = useState(name);

  function handleEditClick() {
    // setIsEditing(!isEditing); // schedules a state update and does not happens immediately
    // Best Practice: Updating state based on old state
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editalbePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = 'Edit';
  if (isEditing) {
    editalbePlayerName = <input type="text" required  value={playerName} onChange={handleChange} />;
    btnCaption = 'Save';
  }

  return (
    <li>
      <span className="player">
        { editalbePlayerName }
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}