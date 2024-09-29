import React from 'react';
import InventoryManager from '../components/InventoryManager';
import closed from '../assets/closed.png'

const MainScreen = () => {
  return (
    <div className="flex h-full w-full">
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-4/5">
          <InventoryManager />
        </div>

      </div>

      <div className="w-1/2 flex justify-center items-center">
        <img src={closed} alt="cute periwinkle fridge" className="w-3/5"/>
      </div>
    </div>
  );
}

export default MainScreen;