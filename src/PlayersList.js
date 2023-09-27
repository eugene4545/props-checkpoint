// src/PlayersList.js
import React from "react";
import Player from "./Player";
import players from "./players";
import './App.css'

function PlayersList() {
return (
<div className="profiles" style={{display:'flex', marginTop:'70px',marginLeft:'80px', }}>
    {players.map((player, index) => (
    <Player key={index} {...player} />
    ))}
</div>
);
};

export default PlayersList;
