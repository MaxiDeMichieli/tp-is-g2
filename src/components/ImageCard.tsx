const ImageCard = ({ onClick, image, title }) => {
  return (
    <div
      className="relative bg-white p-4 shadow-md rounded-md overflow-hidden min-h-[220px] destination-hover cursor-pointer"
      onClick={onClick}
    >
      <div
        className="absolute top-0 left-0 bg-cover bg-center w-full h-full transition-transform transform scale-105 duration-300 destination-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="w-full h-full flex z-10 relative flex-col justify-end">
        <span className="font-extrabold text-white text-xl">{title}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-gray-900" />
    </div>
  );
};

export default ImageCard;
