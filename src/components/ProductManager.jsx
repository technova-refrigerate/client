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

const ProductManager = () => {
  const [products, setProducts] = useState(null);
  const [filter, setFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products/all");
        // console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = async (id) => {
    try {
      const response = await axios.get(`/api/products/${id}`);
      setSelectedProduct(response.data);
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      setSelectedProduct(null);
    }
  };

  return (
    <div>
      <Card className="w-full h-[70vh] mx-auto">
        <CardHeader>
          <CardTitle>Product Search</CardTitle>
          <CardDescription>a</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col h-[50vh]">
            <Input
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
            />
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
                  <pre className="whitespace-pre-wrap mt-2">{getFormattedData(selectedProduct)}</pre>
                </div>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          {selectedProduct && (
            <Button variant="outline" onClick={() => setSelectedProduct(null)}>
              Back to List
            </Button>
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
};

export default ProductManager;
