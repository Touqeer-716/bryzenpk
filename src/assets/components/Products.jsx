import { useState, useEffect } from "react";
import Card from "./Card.jsx";
export default function Products() {
  // 1. Create a state variable to hold our products array
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const api = "/api/products";
  // 2. Run the fetch operation when the component loads on the screen
  useEffect(() => {
    fetch(api) // Intercepted by Vite proxy locally, routes normally on server
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server responded with status: ${response.status}`);
        }
        return response.json(); // Parse the clean JSON response from CI4
      })
      .then((data) => {
        setProducts(data); // Update state with our database row arrays
        setLoading(false); // Turn off loading screen
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty array dependency ensures this fires exactly ONCE per page load

  // 3. Render loading or error states if necessary
  if (loading)
    return <div className="text-center p-5">Loading awesome products...</div>;
  if (error)
    return <div className="text-red-500 text-center p-5">Error: {error}</div>;

  // 4. Main Storefront Display
  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-6 text-center ">
        Our Latest Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="h-full">
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
