import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useUpdateCarMutation } from "../features/Products/ProductApi";

const UpdateProductCar = () => {
  const location = useLocation();
  const car = location.state?.car;
  const navigate = useNavigate();
  const [updateCar] = useUpdateCarMutation();
  const [name, setName] = useState(car.name);
  const [description, setDescription] = useState(car.description);
  const [price, setPrice] = useState(car.price);
  const [file, setFile] = useState(null);

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  const onChangeFile = (event) => {
    setFile(event.target.files[0]);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("id", car._id);
    formData.append("name", name);
    formData.append("price", Number(price));
    formData.append("description", description);

    if (file instanceof File) {
      formData.append("imageUrl", file);
    }

    try {
      await updateCar({
        id: car._id,
        formData,
      }).unwrap();

      navigate("/viewcars");
    } catch (err) {
      console.log("UPDATE ERROR:", err);
    }
    navigate("/viewcars");
  };

  return (
    <div>
      <h1>Update Product Car Page</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            value={name}
            onChange={onChangeName}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Price</label>

          <input
            type="number"
            name="price"
            required
            placeholder="Enter your price"
            value={price}
            onChange={onChangePrice}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={onChangeDescription}
            required
            placeholder="Enter your description"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">imageUrl</label>
          <input
            type="file"
            name="imageUrl"
            onChange={onChangeFile}
            required
            placeholder="Enter your image URL"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Product Car
        </button>
      </form>
    </div>
  );
};

export default UpdateProductCar;
