import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const ResidentInfo = ({ urlCharacter }) => {
  const [characterMorty, setCharacterMorty] = useState({});

  useEffect(() => {
    axios.get(urlCharacter).then((res) => setCharacterMorty(res.data));
  }, []);

 

  return (
    <div className="character">
      <img src={characterMorty.image} alt="character" />
      <h3>
        {characterMorty.name}
   
      </h3>
      <hr />
      <p>Race: {characterMorty.species}</p>
      <p>Status: {characterMorty.status}</p>
      <p>Origin: {characterMorty.origin?.name}</p>
      <p>Episodes Where Appear: {characterMorty.episode?.length}</p>
    </div>
  );
};

export default ResidentInfo;
