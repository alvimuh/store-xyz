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

  async function fetchProductsByCategory(category) {
    setIsLoading(true);
    const res = await fetch(
      `https://fakestoreapi.in/api/products/category/?=type=${category}`
    );
    const data = await res.json();
    setProducts(data.products);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (currentCategory) fetchProductsByCategory(currentCategory);
  }, [currentCategory]);

  return {
    products,
    isLoading,
    currentCategory,
    setCurrentCategory,
  };
}
