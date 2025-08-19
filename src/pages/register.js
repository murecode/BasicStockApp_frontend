async function register(username, email, password) {
	try {
		const response = await fetch('http://127.0.0.1:8000/api/register/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: username,
				email: email,
				password: password
			})
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.detail || 'Registro fallido');
		}

		const data = await response.json();
		console.log('Registro exitoso:', data.message);
		alert('Registro exitoso. Por favor, inicia sesión.');
		window.location.href = '/public/login.html'; // Redirigir a login tras éxito
	} catch (error) {
		console.error('Error en el registro:', error);
		alert(error.message);
	}
}
// Asociar el evento de clic al botón de registro
document.getElementById('register-button').addEventListener('click', () => {
	const username = document.getElementById('register-username').value;
	const email = document.getElementById('register-email').value;
	const password = document.getElementById('register-password').value;
	register(username, email, password);
	console.log(register)
});