import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productService from '../services/productService';

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        price: '',
        featured: false,
        rating: '',
        createdAt: '',
        company: '',
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const fetchedProduct = await productService.getProductById(id);
                setProduct(fetchedProduct);
            } catch (error) {
                console.error(error);
                navigate('/products'); 
            }
        };

        fetchProduct();
    }, [id, navigate]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await productService.updateProduct(id, product);
            navigate('/products');
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    return (
        <div>
            <h2>Update Product</h2>
            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" value={product.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input name="price" type="number" value={product.price} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="featured">Featured</label>
                    <input name="featured" type="checkbox" checked={product.featured} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="rating">Rating</label>
                    <input name="rating" type="number" step="0.1" value={product.rating} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="createdAt">Created At</label>
                    <input name="createdAt" type="date" value={product.createdAt} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="company">Company</label>
                    <input name="company" type="text" value={product.company} onChange={handleChange} />
                </div>
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
};

export default UpdateProduct;