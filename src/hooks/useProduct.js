import { useEffect, useState } from "react";

export default function useProduct() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState(null);

  async function fetchProducts() {
    const res = await fetch("https://fakestoreapi.in/api/products");
    const data = await res.json();
    setProducts(data.products);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    isLoading,
    currentCategory,
    setCurrentCategory,
  };
}
