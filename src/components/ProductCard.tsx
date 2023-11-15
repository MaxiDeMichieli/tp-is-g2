const ProductCard = ({ onClick, product }) => {
  return (
    <div
      className="relative bg-white shadow-md rounded-md overflow-hidden min-h-[190px] hover:shadow-lg transition-shadow flex flex-col cursor-pointer"
      onClick={onClick}
    >
      <div
        className="bg-cover bg-center w-full h-52"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <div className="p-4 flex z-10 relative flex-col justify-between flex-grow">
        <span className="font-bold text-gray-800 text-lg">{product.name}</span>
        {product.price && (
          <span className="font-semibold text-gray-800 text-lg">
            ${product.price}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
