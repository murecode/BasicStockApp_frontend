// src/utils/api.js
const API_URL = 'http://127.0.0.1:8000/api';

export async function createProduct(productData) {
    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
    };

    const response = await fetch(`${API_URL}/products/`, {
        method: 'POST',
        headers,
        body: JSON.stringify(productData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Error al crear el producto');
    }

    return response.json();
}

