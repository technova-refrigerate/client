import React from 'react';
import InventoryManager from '../components/InventoryManager';
import ProductManager from '../components/ProductManager';
import closed from '../assets/closed.png'
import { withAuthInfo } from '@propelauth/react';

const LandingPage = withAuthInfo((props) => {
  console.log(props);
  return (
    <div className="flex h-full w-full">
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-4/5 text-5xl font-bold text-midnight">
        <span>welcome to your fridge, {props.user.username}</span>
        <div class='pt-6 flex space-x-3 bg-transparent dark:invert'>
  	      <div class='h-2 w-2 bg-midnight rounded-xs animate-bounceHigher [animation-delay:-0.3s]'></div>
	        <div class='h-2 w-2 bg-midnight rounded-xs animate-bounceHigher [animation-delay:-0.15s]'></div>
	        <div class='h-2 w-2 bg-midnight rounded-xs animate-bounceHigher'></div>
        </div>
          {/* <Tabs defaultValue="add" className="w-full">
              <TabsList className="grid w-full grid-cols-2 gap-4">
                <TabsTrigger value="add">Add</TabsTrigger>
                <TabsTrigger value="inventory">Inventory</TabsTrigger>
              </TabsList>
              <TabsContent value="add">
                <ProductManager />
              </TabsContent>
              <TabsContent value="inventory">
                <InventoryManager />
              </TabsContent>
            </Tabs> */}
        </div>
      </div>
      <meta http-equiv="refresh" content="3;url=/add" />

      <div className="w-1/2 flex justify-center items-center">
        <img src={closed} alt="cute periwinkle fridge" className="w-3/5" />
      </div>
    </div>
  );
})

export default LandingPage;