// src/pages/dashboard.js
import { getProducts } from '../api/product.js';

export default async function initDashboard() {
    const productList = document.getElementById('product-list');
    if (!productList) return;

    try {
        // Traer los primeros 5 productos como ejemplo
        const products = await getProducts({ limit: 5 });
        productList.innerHTML = ''; // Limpiar lista

        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'bg-white p-4 rounded-lg shadow mb-4';
            card.innerHTML = `
                <h3 class="text-lg font-semibold">${product.title}</h3>
                <p class="text-gray-600">SKU: ${product.sku}</p>
                <p class="text-gray-600">Stock: ${product.current_stock}</p>
            `;
            productList.appendChild(card);
        });
    } catch (error) {
        productList.innerHTML = `<p class="text-red-500">Error al cargar productos: ${error.message}</p>`;
    }
}