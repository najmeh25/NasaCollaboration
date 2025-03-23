"use client";
import PlanetWishlistItem from '@/components/destination/PlanetWishlistItem';

import { useState } from 'react';
import PlanetCard from '@/components/destination/PlanetCard';
import styles from '@/components/destination/destination.module.css';
import { AddWishlistItem } from '@/components/destination/AddWishlistItem';

// TASK - React 1 week 2
// Move this to its own file

export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);
  const onAddOrRemovePlanet = (name, index) => {
    
    console.log(`You selected the following planet: ${name}, with the index of ${index}`);
  
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
          {/* TASK - React 1 week 2 */}
          {/* Display the number Of selected planets */}
          {/* Display the "no planets" message if it is empty! */}
          <p>{selectedPlanets.length === 0 ? "No planets in wishlist :(" : `You have ${selectedPlanets.length} planets in your wishlist`}</p>
          <b>List coming soon after lesson 3!</b>
        
          
          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}
          {/* 
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
          </div> */}
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {/* TASK - React 1 week 2 */}
          {/* Add all 4 planets! Europa, Moon, Mars, Titan  */}
          {/* Use the README.md file for descriptions */}
          {/* Create a <PlanetCard /> component, which accepts the following properties: */}
          {/* name, description, thumbnail, isSelected, onAddOrRemovePlanet */}
          <PlanetCard 
            name="Europa"
            description="Lorem ipsum..." 
            thumbnail="/destination/image-europa.png" 
            isSelected={selectedPlanets.includes("Europa")} 
            onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
          <PlanetCard 
            name="Moon"
            description="Lorem ipsum..."
            thumbnail="/destination/image-moon.png" 
            isSelected={selectedPlanets.includes("Moon")} 
            onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
          <PlanetCard 
            name="Mars"
            description="Lorem ipsum..."
            thumbnail="/destination/image-mars.png" 
            isSelected={selectedPlanets.includes("Mars")} 
            onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
          <PlanetCard 
            name="Titan"
            description="Lorem ipsum..."
            thumbnail="/destination/image-titan.png" 
            isSelected={selectedPlanets.includes("Titan")} 
            onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
          <div className={styles.planetCard}>
            <img className={styles.planetThumbnail} src="/destination/image-europa.png" alt="" />
            <div className={styles.planetDescription}>
            <h2>EUROPA {selectedPlanets.includes("Europa") ? "- SELECTED" : ""}</h2>
              <p>Lorem ipsum...</p>
            </div>
            <button 
              className="roundButton" 
              onClick={() => onAddOrRemovePlanet('Pluto', 0)}
            > 
             {selectedPlanets.includes("Europa") ? "REMOVE" : "ADD PLANET"}
            </button>
          </div>
          <div className={styles.planetCard}>
            <img className={styles.planetThumbnail} src="/destination/image-europa.png" alt="" />
            <div className={styles.planetDescription}>
            <h2>EUROPA {selectedPlanets.includes("Europa") ? "- SELECTED" : ""}</h2>
              <p>Lorem ipsum...</p>
            </div>
            <button className="roundButton"  onClick={() => onAddOrRemovePlanet('Europa', 0)} > 
            {selectedPlanets.includes("Europa") ? "REMOVE" : "ADD PLANET"}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Destinations;
