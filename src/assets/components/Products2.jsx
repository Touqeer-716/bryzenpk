import { useState, useEffect } from "react";

export default function Products2() {
  // 1. Create a state variable to hold our products array
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Run the fetch operation when the component loads on the screen
  useEffect(() => {
    fetch("/ci4/api/product") // Intercepted by Vite proxy locally, routes normally on server
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id} // ✅ FIXED: Changed from products.id to product.id
              className="rounded-3xl p-2  bg-slate-100 text-slate-900 dark:text-slate-100 dark:bg-slate-900 border  flex flex-col justify-between"
            >
              <div>
                {/* ✅ FIXED: Reads full image URL directly from your JSON instead of using string prefix */}
                <img
                  src={product.imgurl}
                  alt={product.name} // ✅ FIXED: Changed from shirt.name to product.name
                  className="w-full h-64 object-cover rounded-md mb-4"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/300x400?text=No+Image";
                  }}
                />
                <h2 className="text-lg font-semibol">
                  {product.name}{" "}
                  {/* ✅ FIXED: Changed from shirt.name to product.name */}
                </h2>
                <p className="text-md  ">
                  {product.des}{" "}
                  {/* ✅ FIXED: Changed from shirt.name to product.name */}
                </p>
              </div>
              <div className="mt-4 flex justify-between items-center gap-4">
                <span className="text-md font-bold rounded-2xl bg-yellow-400 hover:bg-blue-700">
                  Rs. {product.price}
                </span>
                <button className="rounded-3xl px-2 py-1 text-sm font-bold bg-red-600 text-white hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
