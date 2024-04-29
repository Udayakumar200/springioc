import React, { useState } from 'react';
import { createProduct } from '../services/productServices';
import { useNavigate } from 'react-router-dom';

const Addproduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    price: '',
    category: ''
  });
  const navigator = useNavigate();

  function saveProduct(e) {
    e.preventDefault();

    if (validateForm()) {
      const product = { name, price, category };

      createProduct(product)
        .then((response) => {
          console.log(response.data);
          navigator('/add');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (name.trim()) {
      errorsCopy.name = '';
    } else {
      errorsCopy.name = 'Name is required';
      valid = false;
    }
    if (price.trim()) {
      errorsCopy.price = '';
    } else {
      errorsCopy.price = 'Price is required';
      valid = false;
    }
    if (category.trim()) {
      errorsCopy.category = '';
    } else {
      errorsCopy.category = 'Category is required';
      valid = false;
    }
    setErrors(errorsCopy);
    return valid;
  }

  return (
    <div className='container'>
      <br /> <br />
      <div className='row'>
        <div className='card col-md-6 col-offset-md-3'>
          <h2 className='text-center'>Add Product</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-3'>
                <label className='form-label'>Name:</label>
                <input
                  type='text'
                  placeholder='Enter Product Name'
                  name='name'
                  value={name}
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
              </div>
              <div className='form-group mb-3'>
                <label className='form-label'>Price:</label>
                <input
                  type='text'
                  placeholder='Enter Product Price'
                  name='price'
                  value={price}
                  className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                  onChange={(e) => setPrice(e.target.value)}
                />
                {errors.price && <div className='invalid-feedback'>{errors.price}</div>}
              </div>
              <div className='form-group mb-3'>
                <label className='form-label'>Category:</label>
                <input
                  type='text'
                  placeholder='Enter Product Category'
                  name='category'
                  value={category}
                  className={`form-control ${errors.category ? 'is-invalid' : ''}`}
                  onChange={(e) => setCategory(e.target.value)}
                />
                {errors.category && <div className='invalid-feedback'>{errors.category}</div>}
              </div>
              <button className='btn btn-success' onClick={saveProduct}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
