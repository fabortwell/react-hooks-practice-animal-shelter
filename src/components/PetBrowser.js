import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  const petContainer = pets.map((pet) => <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet}/>)
  return <div className="ui cards">P{ petContainer }</div>;
}

export default PetBrowser;
