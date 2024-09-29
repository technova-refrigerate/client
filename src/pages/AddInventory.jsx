import React from 'react';
import InventoryManager from '../components/InventoryManager';
import ProductManager from '../components/ProductManager';
import open from '../assets/open.png'
import alm from '../assets/foods/alm.png'
import avo from '../assets/foods/avo.png'
import butter from '../assets/foods/butter.png'
import garlic from '../assets/foods/garlic.png'
import nana from '../assets/foods/nana.png'
import pow from '../assets/foods/pow.png'
import steak from '../assets/foods/steak.png'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { withAuthInfo, useRedirectFunctions, useLogoutFunction } from '@propelauth/react'

const AddInventory = withAuthInfo((props) => {
  const logoutFunction = useLogoutFunction();
  const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } = useRedirectFunctions();

  if (props.isLoggedIn) {
    return (
      <div className="flex h-full w-full">
        <div className="w-1/2 flex justify-center items-center">
          <div className="w-4/5">
            <Tabs defaultValue="add" className="w-full">
              <TabsList className="grid w-full grid-cols-2 gap-4">
                <TabsTrigger value="add">Add</TabsTrigger>
                <TabsTrigger value="inventory">Inventory</TabsTrigger>
              </TabsList>
              <TabsContent value="add">
                <ProductManager />
              </TabsContent>
              <TabsContent value="inventory">
                <InventoryManager props={props} />
              </TabsContent>
            </Tabs>
          </div>

        </div>

        <div className="w-1/2 flex justify-center items-center">
          <img src={open} alt="cute periwinkle fridge" className="w-3/5" />
          <img src={alm} alt="almond milk" className="absolute h-20 mb-20 mr-36" />
          <img src={avo} alt="avocado" className="absolute h-12 mb-56 mr-40" />
          <img src={butter} alt="butter" className="absolute h-12 mb-10 mr-16" />
          <img src={garlic} alt="garlic" className="absolute h-12 mb-52 mr-20" />
          <img src={nana} alt="bananas" className="absolute h-14 mb-56 ml-10" />
          <img src={pow} alt="powdered milk" className="absolute h-20 mb-12 ml-16" />
          <img src={steak} alt="avocado" className="absolute h-12 mt-28 ml-20" />
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <p>you are not logged in!</p>
        {/* <button onClick={() => redirectToAccountPage()}>Account</button> */}
        {/* <p>You are logged in as {props.user.email}</p> */}
        {/* <button onClick={() => logoutFunction(true)}>Logout</button> */}
        <button onClick={() => redirectToLoginPage()}>login</button>
        <button onClick={() => redirectToSignupPage()}>signup</button>
      </div>
    )
  }
})

export default AddInventory;