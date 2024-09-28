import React from 'react';
import InventoryManager from '../components/InventoryManager';
import closed from '../assets/closed.png'

const MainScreen = () => {
    return (
        <div className="flex h-screen w-screen">
          <div className="w-1/2 flex justify-center items-center bg-gray-100">
            <InventoryManager className="w-3/5 h-4/5"/>
          </div>
          
          <div className="w-1/2 flex justify-center items-center bg-gray-200">
            <div className="">
            <img src={closed} alt="cute periwinkle fridge"/>
            </div>
          </div>
        </div>
      );
}

export default MainScreen;