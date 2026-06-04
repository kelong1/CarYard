import React from "react";

const ProductCar = () => {
  return (
    <div>
      <h1>Product Car</h1>
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Price" />
        <input type="text" placeholder="Description" />
        <input type="text" placeholder="Image URL" />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductCar;
