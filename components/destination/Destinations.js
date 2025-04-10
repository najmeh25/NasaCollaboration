"use client";
import PlanetCard from '@/components/destination/PlanetCard';
import { useState } from 'react';
import styles from '@/components/destination/destination.module.css';
const planets = ["Europa", "Moon", "Mars", "Titan"];
export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);
  
  const onAddOrRemovePlanet = (name) => {
    console.log(`You selected the following planet: ${name}`);
    
    setSelectedPlanets((prev) => {
      if (prev.includes(name)) {
        console.log(`${name} was already in the wishlist. Removing it...`);
        return prev.filter((planet) => planet !== name);
      } else {
        console.log(`${name} was not in the wishlist. Adding it...`);
        return [...prev, name];
      }
    });
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          <p>{selectedPlanets.length === 0 ? "No planets in wishlist :(" : `You have ${selectedPlanets.length} planets in your wishlist`}</p>
        </section>
        
        <section className="card">
          <h2>Possible destinations</h2>
          {planets.map((planet) => (
            <PlanetCard
              key={planet}
              name={planet}
              description={`Description for ${planet}`}
              thumbnail={`/destination/image-${planet.toLowerCase()}.png`}
              isSelected={selectedPlanets.includes(planet)}
              onAddOrRemovePlanet={onAddOrRemovePlanet}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Destinations;
