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


export async function getProducts(endpoint, options = {}) {
	const token = localStorage.getItem('token');
	const headers = {
		'Content-Type': 'application/json',
		...(token && { 'Authorization': `Bearer ${token}` }),
		...options.headers,
	};

	const response = await fetch(`${API_URL}${endpoint}`, { ...options, headers });
	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.detail || 'Error en la solicitud');
	}
	return response.json();
}

// export async function getProductsByparams(params = {}) {
// 	const queryString = new URLSearchParams(params).toString();
// 	const endpoint = `/products/${queryString ? `?${queryString}` : ''}`;
// 	return getProducts(endpoint, { method: 'GET' });
// }

