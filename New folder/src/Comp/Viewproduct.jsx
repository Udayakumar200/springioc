import React, { useEffect, useState } from 'react';
import { viewAllProduct } from '../services/productServices';

const ViewProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        viewAllProduct()
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className='container'>
            <h2 className='text-center'>All Products</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan='3'>No products found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ViewProduct;
