"use client";

import { useState } from 'react';
import styles from './destination.module.css';

export const AddWishlistItem = ({
  onAddWishlistItem,
}) => {
  
  const [thumbnail, onThumbnailChange] = useState('/destination/image-europa.png');
  const [itemName, setItemName] = useState('');
  // TASK - React 1 week 3
  // 1. Add a useState for the handling the <input id="customWishlist" type="text" />
  // 2. Connect the onThumbnailChange to the <select>

  const onAddItemPressed = () => {
    // TASK - React 1 week 3
    // implement this function
    // Clear the <input/> field on button press
    // pass the thumbnail and the name from the input to the onAddWishlistItem function
    // call the onAddWishlistItem here
    if (!itemName.trim()) {
      alert("Please enter a name for the wishlist item.");
      return;
  }
  onAddWishlistItem(itemName, thumbnail);
  setItemName('');
  onThumbnailChange('/destination/image-europa.png');
};

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input id="customWishlist" type="text" value={itemName}  onChange={(e) => setItemName(e.target.value)}/>
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select id="customWishlistThumbnail"value={thumbnail}  onChange={(e) => onThumbnailChange(e.target.value)} >
        <option value="/destination/image-europa.png">EUROPA</option>
        <option value="/destination/image-mars.png">MARS</option>
        <option value="/destination/image-moon.png">MOON</option>
        <option value="/destination/image-titan.png">TITAN</option>
      </select>
      <button onClick={onAddItemPressed}>ADD CUSTOM</button>
    </div>
  );
};
