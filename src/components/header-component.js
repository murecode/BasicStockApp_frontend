class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {

    // Inyectar Tailwind CSS dentro del shadow DOM
    const tailwindLink = document.createElement('link');
    tailwindLink.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
    tailwindLink.rel = 'stylesheet';
    this.shadowRoot.appendChild(tailwindLink);

    this.shadowRoot.innerHTML += `
      <header class="bg-blue-500 text-white p-4">
        <div class="container mx-auto">
          <h1 class="text-2xl font-bold">BasicStockApp</h1>
          <nav class="mt-2">
            <a href="/public/dashboard.html" class="mr-4 text-white hover:underline">Dashboard</a>
            <a href="/public/inventory.html" class="mr-4 text-white hover:underline">Inventario</a>
            <a href="/public/reports.html" class="mr-4 text-white hover:underline">Reportes</a>
            <button id="logoutButton" class="text-white hover:underline">Cerrar Sesión</button>
          </nav>
        </div>
      </header>
      `;

    // Inyectar script externo
    // const script = document.createElement('script');
    // script.type = 'module';
    // script.src = '../src/utils/logout.js'; // Archivo externo
    // this.shadowRoot.appendChild(script);

  }
};

customElements.define('app-header', HeaderComponent);