import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../store/slice/ViewProductSlice";

const ViewProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { status, product } = useSelector((state) => state.viewProduct);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  if (!status || !product) {
    return <p>Loading...</p>;
  }

 return (
    <div>
      <h1>View Product {id}</h1>
      <p>Status: {status}</p>
      {status === 'idle' && product && (
        <div>
          <p>Fetched Product:</p>
          <pre>{JSON.stringify(product, null, 2)}</pre>
        </div>
      )}
      {status === 'error' && <p>Error fetching product.</p>}
    </div>
  );
};

export default ViewProduct;
