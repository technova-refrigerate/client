import React from 'react';
import InventoryManager from '../components/InventoryManager';
import ProductManager from '../components/ProductManager';
import open from '../assets/open.png'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AddInventory = () => {
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
              <InventoryManager />
            </TabsContent>
          </Tabs>
        </div>

      </div>

      <div className="w-1/2 flex justify-center items-center">
        <img src={open} alt="cute periwinkle fridge" className="w-3/5" />
      </div>
    </div>
  );
}

export default AddInventory;