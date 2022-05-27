import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function handleChangeType(typeInput) {
    setFilters({type: typeInput})
  }

  function handleFindPets() {
    let petUrl = "http://localhost:3001/pets"
    if(filters.type !== "all") {
      petUrl += `?type=${filters.type}`
    }
    fetch(petUrl)
    .then((res) => res.json())
    .then((fetchedPets) => setPets(fetchedPets))
  }

  function handleAdoptPet(petId) {
    const petsUpdate = pets.map((pet) => {
      if(pet.id === petId) {
        return {...pet, isAdopted: true}
      } else {
        return pet
      }
    });
    setPets(petsUpdate)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleChangeType} onFindPetsClick={handleFindPets}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
