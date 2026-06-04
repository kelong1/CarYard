import React from "react";
import { useFetchCarsQuery } from "../features/Products/productApi";
import Car from "./Car";
import { useSelector } from "react-redux";

const ViewCars = () => {
  const user = useSelector((state) => state.authReducer.user);
  const { data: cars = [], isLoading, isError } = useFetchCarsQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold">
        Loading cars...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 font-semibold">
        Error fetching cars
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          View Cars
        </h1>

        {/* Tabs (UI only for now) */}
        <div className="mt-4 sm:mt-0 flex gap-2 overflow-x-auto">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm whitespace-nowrap">
            All
          </button>
          <button className="px-4 py-2 bg-white shadow rounded-full text-sm whitespace-nowrap hover:bg-gray-50">
            Toyota
          </button>
          <button className="px-4 py-2 bg-white shadow rounded-full text-sm whitespace-nowrap hover:bg-gray-50">
            BMW
          </button>
          <button className="px-4 py-2 bg-white shadow rounded-full text-sm whitespace-nowrap hover:bg-gray-50">
            Mercedes
          </button>
        </div>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car._id}>
            <Car car={car} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCars;
