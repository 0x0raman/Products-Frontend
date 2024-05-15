import api from './api';

const getProducts = async () => {
    try {
        const response = await api.get('products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

const getProductById = async (id) => {
    try {
        console.log('Getting product with ID:', id);
        const response = await api.get(`products/${id}`);
        console.log('Found product:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        throw error;
    }
};

const addProduct = async (productData) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const config = {
        headers: {
            Authorization: `Bearer ${user?.token}`,
            'Content-Type': 'application/json',
        },
    };
    try {
        const response = await api.post('products', productData, config);
        return response.data;
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};

const updateProduct = async (productId, productData) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const config = {
        headers: {
            Authorization: `Bearer ${user?.token}`,
            'Content-Type': 'application/json',
        },
    };
    try {
        const response = await api.put(`products/${productId}`, productData, config);
        return response.data;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

const deleteProduct = async (productId) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const config = {
        headers: {
            Authorization: `Bearer ${user?.token}`,
        },
    };
    try {
        const response = await api.delete(`products/${productId}`, config);
        return response.data;
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};

const productService = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
};

export default productService;