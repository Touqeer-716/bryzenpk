import { useState, useEffect } from "react";

export default function Products2() {
  // 1. Create a state variable to hold our products array
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const api = "/ci4/api/product";
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

      {products.length === 0 ? (
        <p className="text-center text-slate-500">
          No products available at the moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-3xl overflow-hidden border  flex flex-col justify-between"
            >
              <div>
                <img
                  src={product.imgurl}
                  alt={product.name}
                  className="w-full h-80 object-cover rounded-t-3xl mb-4 "
                  onError={(e) => {
                    e.target.src = "https://placehold.co/300x400?text=No+Image";
                  }}
                />
                <div className="px-4">
                  <h2 className="text-lg font-semibold">
                    {product.name}{" "}
                    {/* ✅ FIXED: Changed from shirt.name to product.name */}
                  </h2>
                  <p className="text-md  ">
                    {product.des}{" "}
                    {/* ✅ FIXED: Changed from shirt.name to product.name */}
                  </p>
                </div>
                <div className="mt-4 flex justify-between items-center gap-4 px-4 pb-2">
                  <span className="text-md font-bold rounded-2xl ">
                    PKR . {product.price}
                  </span>
                  <button className="rounded-full bg-amber-500 hover:bg-amber-700 text-slate-950 px-4 py-1.5 text-xs font-black uppercase tracking-wider transition-colors duration-200 cursor-pointer">
                  Add to Cart
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
