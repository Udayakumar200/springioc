import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Optionproduct = () => {
  const navigate = useNavigate();

  const handleDisplayProduct = () => {
    navigate('/view');
  };

  const handleAddProduct = () => {
    navigate('/add');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center mx-70">
        <button onClick={handleDisplayProduct} className="btn btn-primary me-2">
          Display product
        </button>
        <button onClick={handleAddProduct} className="btn btn-primary">
          Add product
        </button>
      </div>
    </div>
  );
};

export default Optionproduct;
 