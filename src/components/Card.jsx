function Card({ image, imageAlt, description, price, onClick }) {
  return (
    <div
      className="relative w-full max-w-md cursor-pointer group mx-auto"
      onClick={onClick}
    >
      <div className="relative w-full h-72">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
      </div>
      <div className="bg-white flex justify-between items-center p-4">
        <p className="text-gray-800 text-base font-medium truncate ">
          {description}
        </p>
        <p className="text-gray-800 text-base font-semibold">{price}€</p>
      </div>
    </div>
  );
}

export default Card;
