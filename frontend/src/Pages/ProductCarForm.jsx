import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddCarMutation } from "../features/Products/ProductApi";

const ProductCarForm = () => {
  const navigate = useNavigate();
  const [addCar] = useAddCarMutation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("imageUrl", file);

    addCar(formData);
    navigate("/viewcars");
    setName("");
    setPrice("");
    setDescription("");
    setFile(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Add Product Car
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
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
              placeholder="Enter your imageUrl"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            AddProductCar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductCarForm;
