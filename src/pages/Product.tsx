import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useContext } from "../context/ContextProvider";
import DollarRates from "../components/DollarRates";

const Product = () => {
  const [product, setProduct] = useState(null);
  const { context } = useContext();
  const params = useParams();

  useEffect(() => {
    const currentProduct = context.products.find(
      (product) => product.id === +params.productId
    );
    if (currentProduct) setProduct(currentProduct);
  }, []);

  return (
    <Layout
      banner={
        <div className="absolute top-0 left-0 w-full bg-[#7B4F94] h-24" />
      }
    >
      <h1 className="w-full h-24 text-white flex items-center font-medium text-3xl">
        {product?.name}
      </h1>
      <div className="flex justify-center my-10">
        <img
          className="max-h-[500px]"
          src={product?.image}
          alt={product?.name}
        />
      </div>
      <div className="flex flex-col text-gray-800 mb-10">
        {product?.price && (
          <span className="font-bold text-4xl my-1">${product?.price}</span>
        )}
        <span className="text-2xl my-1">{product?.description}</span>
        <span>{product?.characteristics || product?.restrictions}</span>
      </div>
      <DollarRates />
    </Layout>
  );
};

export default Product;
