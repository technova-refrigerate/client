import React from 'react';
import InventoryManager from '../components/InventoryManager';
import ProductManager from '../components/ProductManager';
import open from '../assets/open.png'
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