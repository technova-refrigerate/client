import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input"; import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import axios from "axios";
import getFormattedData from "../utils/dataFilter";
import { withAuthInfo } from '@propelauth/react';
import { useToast } from "@/hooks/use-toast"

const InventoryManager = withAuthInfo((props) => {
  const [products, setProducts] = useState(null);
  const [filter, setFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [outputdata, setOutputData] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products/", {
          headers: {
            Authorization: `Bearer ${props.accessToken}`,
          }
        });
        // console.log(response.data);
        setProducts(response.data);
        // console.log("products", response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    console.log("product", product, product.dateStored, product.bestBefore);
    setOutputData(`Name: ${product.name}\nSubtitle: ${product.subtitle}\nAdded: ${ (product.dateStored instanceof Date) ? product.dateStored.toLocaleDateString() : new Date(product.dateStored).toLocaleDateString() }\nBest Before: ${ (product.bestBefore instanceof Date) ? product.bestBefore.toLocaleDateString() : new Date(product.bestBefore).toLocaleDateString() }`);

  };

  const handleMunch = async (product) => {
    try {
      const response = await axios.delete(`/api/products/${product.id}`, {
        headers: {
          Authorization: `Bearer ${props.accessToken}`,
        }
      });
      toast({
        title: `Deleted ${product.name} from inventory`,
      })
      setSelectedProduct(null);
      setFilteredProducts(products.filter((p) => p.id !== product.id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }

  }

  return (
    <div>
      <Card className="w-full h-[70vh] mx-auto">
        <CardHeader>
          <CardTitle>your products</CardTitle>
          <CardDescription>eat up before things go bad!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col h-full">
            {products && (<Input
              type="text"
              placeholder="enter product name"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                // console.log(e.target.value);
                setFilteredProducts(
                  products.filter((product) => {
                    // console.log("product", product.name);
                    // console.log("target", e.target.value);
                    return product.name.toLowerCase().includes(e.target.value.toLowerCase())
                  }
                  )
                );
              }}
            />)}
            <div className="mt-4 flex-1 overflow-y-auto max-h-[400px]">
              {!selectedProduct ? (
                <ul className="space-y-2">
                  {filteredProducts &&
                    filteredProducts.map((product) => (
                      <li
                        key={product.id}
                        onClick={() => handleProductClick(product)}
                        className="cursor-pointer text-blue-600 border-b border-gray-300 pb-2"
                      >
                        {product.name} {product.subtitle ? `: ${product.subtitle}` : null}
                      </li>
                    ))}
                </ul>
              ) : (
                <div>
                  <h3 className="text-lg font-semibold">Selected Product Details</h3>
                  <pre className="whitespace-pre-wrap mt-2">{outputdata}</pre>
                </div>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          
          {selectedProduct && (
            <>
            <Button onClick={() => handleMunch(selectedProduct)}>Munch</Button>
            <Button variant="outline" onClick={() => setSelectedProduct(null)}>
              back to list
            </Button>
            </>
          )}
        </CardFooter>
      </Card>



      {/* <h1>Product Search</h1>
      <Input
        type="text"
        placeholder="Enter product name"
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
          console.log(e.target.value);
          setFilteredProducts(
            products.filter((product) =>
              product.Name.toLowerCase().includes(e.target.value.toLowerCase())
            )
          );
        }}
      />
      <div>
        <div>
          <h2>Product List</h2>
          <ul className="h-full overflow-y-auto">
            {filteredProducts &&
              filteredProducts.map((product) => (
                <li
                  key={product._id}
                  onClick={() => handleProductClick(product._id)}
                  style={{ cursor: "pointer", color: "blue" }}
                >
                  {product.Name} (ID: {product._id})
                </li>
              ))}
          </ul>
        </div>
        {selectedProduct && (
          <div>
            <h3>Selected Product Details</h3>
            <pre>{getFormattedData(selectedProduct)}</pre>
          </div>
        )}
      </div> */}
    </div>
  );
});

export default InventoryManager;
