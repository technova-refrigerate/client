import React, { useState, useEffect } from "react";
import getFormattedData from "../utils/dataFilter";
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
import { withAuthInfo } from '@propelauth/react';
import { useToast } from "@/hooks/use-toast"

const ProductManager = withAuthInfo((props) => {
  const [products, setProducts] = useState(null);
  const [filter, setFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formattedData, setFormattedData] = useState("");
  const [storageOptions, setStorageOptions] = useState(new Set());
  const [originalData, setOriginalData] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products/all", {
          headers: {
            Authorization: `Bearer ${props.accessToken}`,
          }
        });
        // console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      const data = getFormattedData(selectedProduct);
      // console.log(data);
      if (data) {
        setFormattedData(data.formattedData);
        const options = new Set();
        for (let i = 0; i < data.storageOptions.length; i++) {
          options.add(data.storageOptions[i].label);
        }
        setStorageOptions(options);
        setOriginalData(data.storageOptions);
      }
    }

  }, [selectedProduct]);

  const handleProductClick = async (id) => {
    try {
      const response = await axios.get(`/api/products/${id}`, {
        headers: {
          Authorization: `Bearer ${props.accessToken}`,
        }
      });
      setSelectedProduct(response.data);
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      setSelectedProduct(null);
    }
  };

  const addItem = async (product, location) => {
    console.log(props.accessToken)
    let bestBeforeDate;
    for (let i = 0; i < originalData.length; i++) {
      if (location === originalData[i].label) {
        bestBeforeDate = originalData[i].min;
        break;
      }
    }

    const newProduct = {
      id: product._id,
      icon: product.icon ? product.icon : "",
      name: product.Name,
      subtitle: product.Name_subtitle ? product.Name_subtitle : "",
      bestBefore: bestBeforeDate,
      storageLocation: location,
    };
    console.log(newProduct);
    try {
      const addedProduct = await axios.post("/api/products", newProduct, {
        headers: {
          Authorization: `Bearer ${props.accessToken}`,
        },
      });
    } catch (error) {
      console.log(error);
      console.error("Error adding product:", error);
    }
  }

  const renderButtons = () => {
    // console.log([...storageOptions].join(' '));
    const buttons = [];
    if (storageOptions.has("Pantry")) {
      buttons.push(<Button variant="outline" onClick={() => addItem(selectedProduct, "Pantry")}>Pantry</Button>);
    }
    if (storageOptions.has("Freezer")) {
      buttons.push(<Button variant="outline" onClick={() => addItem(selectedProduct, "Freezer")}>Freezer</Button>);
    }
    
    if (storageOptions.has("Fridge")) {
      buttons.push(<Button variant="outline" onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          variant: "success",
        })
        
        addItem(selectedProduct, "Fridge")
      }}>Fridge</Button>);
    }
    
    return buttons;
  }

  return (
    <div>
      <Card className="w-full h-[70vh] mx-auto">
        <CardHeader>
          <CardTitle>Product Search</CardTitle>
          <CardDescription>a</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col h-[50vh]">
            {!selectedProduct && (<Input
              type="text"
              placeholder="Enter product name"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                // console.log(e.target.value);
                setFilteredProducts(
                  products.filter((product) =>
                    product.Name.toLowerCase().includes(e.target.value.toLowerCase())
                  )
                );
              }}
            />)}
            <div className="mt-4 flex-1 overflow-y-scroll">
              {!selectedProduct ? (
                <ul className="space-y-2">
                  {filteredProducts &&
                    filteredProducts.map((product) => (
                      <li
                        key={product._id}
                        onClick={() => handleProductClick(product._id)}
                        className="cursor-pointer text-blue-600 border-b border-gray-300 pb-2"
                      >
                        {product.Name} {product.Name_subtitle ? `: ${product.Name_subtitle}` : null}
                      </li>
                    ))}
                </ul>
              ) : (
                <div>
                  <h3 className="text-lg font-semibold">Selected Product Details</h3>
                  <pre className="whitespace-pre-wrap mt-2">{formattedData}</pre>
                </div>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          {selectedProduct && (
            <div>
              <>{renderButtons()}</>
              <Button variant="outline" onClick={() => setSelectedProduct(null)}>
                Back to List
              </Button>
            </div>
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

export default ProductManager;
