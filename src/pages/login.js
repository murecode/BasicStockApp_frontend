async function login(email, password) {
	try {
		const response = await fetch('http://127.0.0.1:8000/api/login/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		});

		if (!response.ok) {
			throw new Error('Login fallido');
		}

		const data = await response.json();
		console.log("Respuesta completa:", data);
		localStorage.setItem('token', data.access_token);
		console.log('Login exitoso, token guardado:', data.access_token);


		// Redirigir a la página autorizada (por ejemplo, dashboard)
		window.location.href = '/public/dashboard.html'; // Cambia esto a la URL de tu página autorizada
	} catch (error) {
		console.error('Error en el login:', error);
		alert('email o contraseña incorrectos');
	}
}

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Asociar el evento de clic al botón de inicio de sesión
    const loginButton = document.getElementById('login-button');
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            const username = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            login(username, password);
        });
    } else {
        console.error('No se encontró el elemento con id "login-button"');
    }
});