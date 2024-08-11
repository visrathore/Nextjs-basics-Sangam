import React from "react";

const ProductsPage = ({ searchParams }) => {
  return (
    <main>
      ProductsPage <p>{searchParams.productsValue}</p>
    </main>
  );
};

export default ProductsPage;
