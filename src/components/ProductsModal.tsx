import { useEffect, useState } from "react";
import axios from "axios";

const ProductModal = ({ searchString, onClose }) => {
  const [products, setProducts] = useState([]);

  const searchProducts = async () => {
    try {
      const response = await axios.get(
        `https://api.mercadolibre.com/sites/MLA/search?q=${searchString}`
      );
      setProducts(response.data.results.slice(0, 10));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    searchProducts();
  }, [searchString]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 max-w-3xl w-full relative">
        <h2 className="text-2xl font-bold mb-4">Productos similares</h2>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <ul>
          {products.map((product) => (
            <li key={product.id} className="mb-2">
              {product.title} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductModal;
