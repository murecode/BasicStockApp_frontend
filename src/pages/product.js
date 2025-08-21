// src/pages/create-product.js
import { createProduct } from '../api/product.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('product-form');
    const responseDiv = document.getElementById('response-message');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const productData = {
                title: document.getElementById('title').value,
                sku: document.getElementById('sku').value,
                description: document.getElementById('description').value,
                current_stock: parseInt(document.getElementById('current_stock').value),
                min_stock: parseInt(document.getElementById('min_stock').value),
                purchase_price: parseFloat(document.getElementById('purchase_price').value),
                sale_price: parseFloat(document.getElementById('sale_price').value),
            };

            try {
                const result = await createProduct(productData);
                if (responseDiv) {
                    responseDiv.textContent = 'Producto creado exitosamente!';
                    responseDiv.className = 'text-green-500';
                }
                form.reset(); // Limpia el formulario
                setTimeout(() => window.location.href = '/public/inventory.html', 2000); // Redirige después de 2 segundos
            } catch (error) {
                if (responseDiv) {
                    responseDiv.textContent = `Error: ${error.message}`;
                    responseDiv.className = 'text-red-500';
                }
            }
        });
    }
});