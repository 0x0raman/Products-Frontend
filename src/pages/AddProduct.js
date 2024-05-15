import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import productService from '../services/productService';

const AddProduct = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Add Product</h2>
            <Formik
                initialValues={{
                    productId: '',
                    name: '',
                    price: '',
                    featured: false,
                    rating: '',
                    createdAt: '',
                    company: ''
                }}
                validationSchema={Yup.object({
                    productId: Yup.string().required('Required'),
                    name: Yup.string().required('Required'),
                    price: Yup.number().required('Required').typeError('Price must be a number'),
                    company: Yup.string().required('Required'),
                    createdAt: Yup.date().required('Required').typeError('Invalid date'),
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        const formattedValues = {
                            ...values,
                            rating: values.rating ? parseFloat(values.rating) : undefined, 
                            createdAt: new Date(values.createdAt).toISOString(), 
                        };
                        console.log('Submitting product data:', formattedValues);
                        await productService.addProduct(formattedValues);
                        navigate('/products'); 
                    } catch (error) {
                        console.error('Product creation failed', error);
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="productId">Product ID</label>
                            <Field name="productId" type="text" />
                            <ErrorMessage name="productId" component="div" />
                        </div>
                        <div>
                            <label htmlFor="name">Name</label>
                            <Field name="name" type="text" />
                            <ErrorMessage name="name" component="div" />
                        </div>
                        <div>
                            <label htmlFor="price">Price</label>
                            <Field name="price" type="number" />
                            <ErrorMessage name="price" component="div" />
                        </div>
                        <div>
                            <label htmlFor="featured">Featured</label>
                            <Field name="featured" type="checkbox" />
                            <ErrorMessage name="featured" component="div" />
                        </div>
                        <div>
                            <label htmlFor="rating">Rating</label>
                            <Field name="rating" type="number" step="0.1" />
                            <ErrorMessage name="rating" component="div" />
                        </div>
                        <div>
                            <label htmlFor="createdAt">Created At</label>
                            <Field name="createdAt" type="date" />
                            <ErrorMessage name="createdAt" component="div" />
                        </div>
                        <div>
                            <label htmlFor="company">Company</label>
                            <Field name="company" type="text" />
                            <ErrorMessage name="company" component="div" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>Add Product</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddProduct;