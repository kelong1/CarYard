import React from "react";
import { useRemoveCarMutation } from "../features/Products/ProductApi";
import { useNavigate } from "react-router-dom";

const Car = ({ car }) => {
  const navigate = useNavigate();
  const [removeCar] = useRemoveCarMutation();

  const handleDelete = async () => {
    try {
      await removeCar(car);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = () => {
    navigate("/updateproductcar", { state: { car } });
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full overflow-hidden">
      {/* IMAGE SECTION */}
      <div className="w-full h-56 bg-gray-100 overflow-hidden">
        <img
          src={car.imageUrl}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* CONTENT SECTION */}
      <div className="p-4 flex flex-col flex-grow">
        {/* NAME */}
        <h2 className="text-xl font-bold text-gray-800 mb-1 truncate">
          {car.name}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {car.description}
        </p>

        {/* PRICE */}
        <p className="text-green-600 text-xl font-bold mb-4">
          ${Number(car.price).toFixed(2)}
        </p>

        {/* BUTTONS */}
        <div className="mt-auto flex gap-2">
          <button
            onClick={handleDelete}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Delete
          </button>

          <button
            onClick={handleUpdate}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Car;
