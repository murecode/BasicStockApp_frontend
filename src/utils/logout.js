function logout() {
      if (!confirm('¿Estás seguro de que quieres cerrar sesión?')) {
        return;
      }
      localStorage.removeItem('token');
      console.log('🔒 Sesión cerrada, token eliminado');
      window.location.href = '/public/login.html'; // Ajusta según tu estructura
    }

    document.addEventListener('DOMContentLoaded', () => {
      const logoutButton = document.getElementById('logoutButton');
      if (logoutButton) {
        logoutButton.addEventListener('click', (e) => {
          e.preventDefault();
          logout();
        });
      } else {
        console.warn('⚠️ No se encontró el botón de logout');
      }
    });