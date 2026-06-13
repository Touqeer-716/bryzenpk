import React, { useState } from "react";

const AddProduct = () => {
  // 1. Unified state for form inputs
  const [formData, setFormData] = useState({
    name: "",
    des: "",
    des_long: "",
    price: "",
  });

  // 2. Separate states for file payload and UI state
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  // Handle standard text inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image input and generate local preview URL
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file)); // Creates local URL for browser display
    }
  };

  // Process and dispatch form via Multipart/Form-Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    // Validation guard clause
    if (!imageFile) {
      setStatus({ type: "error", message: "Please select a product image." });
      setLoading(false);
      return;
    }

    // Pack text inputs and file binaries into FormData
    const submissionPayload = new FormData();
    submissionPayload.append("name", formData.name);
    submissionPayload.append("des", formData.des);
    submissionPayload.append("des_long", formData.des_long);
    submissionPayload.append("price", formData.price);
    submissionPayload.append("image", imageFile); // Matches $this->request->getFile('image') in CI4

    try {
      // Uses root-relative URL (intercepted by Vite proxy locally, native on server)
      const response = await fetch("/api/products", {
        method: "POST",
        body: submissionPayload,
        // CRITICAL: Do NOT set "Content-Type" header.
        // Leaving it empty allows the browser to automatically set boundary lines.
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: result.message || "Product created successfully!",
        });
        // Clear form fields upon successful database write
        setFormData({ name: "", des: "", des_long: "", price: "" });
        setImageFile(null);
        setImagePreview(null);
      } else {
        setStatus({
          type: "error",
          message:
            result.messages?.error ||
            result.message ||
            "Failed to save product.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Network or server communication failure.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-8 bg-white border border-gray-200 rounded-3xl shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Add New Streetwear Product
      </h2>

      {/* Status Feedback Messages */}
      {status.message && (
        <div
          className={`p-4 mb-6 rounded-2xl text-sm font-medium ${
            status.type === "success"
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="e.g., Off-White Drop Shoulder Tee"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:border-black outline-none transition"
          />
        </div>

        {/* Short & Long Description Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Short Description
            </label>
            <textarea
              name="des"
              value={formData.des}
              onChange={handleInputChange}
              required
              rows="3"
              placeholder="Brief card preview text..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:border-black outline-none transition resize-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Long Description
            </label>
            <textarea
              name="des_long"
              value={formData.des_long}
              onChange={handleInputChange}
              rows="3"
              placeholder="Detailed specs, fabric composition, sizing..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:border-black outline-none transition resize-none"
            />
          </div>
        </div>

        {/* Price & Image File Picker Split Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Price (USD)
            </label>
            <input
              type="number"
              name="price"
              step="0.01"
              value={formData.price}
              onChange={handleInputChange}
              required
              placeholder="45.00"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:border-black outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product Image File
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 file:cursor-pointer cursor-pointer"
            />
          </div>
        </div>

        {/* Dynamic Image Preview Screen */}
        {imagePreview && (
          <div className="mt-4 border border-dashed border-gray-300 rounded-2xl p-4 flex flex-col items-center bg-gray-50">
            <p className="text-xs font-semibold text-gray-500 mb-2">
              Asset Upload Preview
            </p>
            <img
              src={imagePreview}
              alt="Preview"
              className="w-48 h-48 object-cover rounded-xl shadow-sm"
            />
          </div>
        )}

        {/* Submission Action Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 px-6 font-bold text-white bg-black hover:bg-gray-900 rounded-xl transition duration-150 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-sm"
        >
          {loading ? "Streaming Assets to Database..." : "Publish Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
