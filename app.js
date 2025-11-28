/**
 * Kraitt Sim - Application Logic
 * Vanilla JS (ES6+)
 */

// --- Data ---
const products = [
    {
        id: 'diot-2025',
        title: 'DIOT 2025',
        category: 'Software Fiscal',
        shortDescription: 'Genera tu DIOT 2025. Optimiza tu proceso de declaración con DIOT.',
        description: 'El software definitivo para cumplir con la obligación de la DIOT. Importa tus XMLs, clasifica proveedores automáticamente y genera el archivo batch (.dec) listo para cargar al SAT. Incluye validaciones preventivas para evitar multas.',
        price: '$1,299.00 MXN',
        image: 'https://placehold.co/600x400/1e3a8a/ffffff?text=DIOT+2025&font=roboto'
    },
    {
        id: 'adcofi',
        title: 'ADCOFI',
        category: 'Administración',
        shortDescription: 'Administrador de Comprobantes Fiscales. Descarga y valida.',
        description: 'Tu asistente fiscal personal. ADCOFI se conecta al portal del SAT para descargar masivamente tus emitidos y recibidos. Valida el estado (vigente/cancelado), detecta EFOS (listas negras) y exporta reportes detallados a Excel para tu contabilidad.',
        price: '$2,450.00 MXN',
        image: 'https://placehold.co/600x400/1e3a8a/ffffff?text=ADCOFI&font=roboto'
    },
    {
        id: 'validador-movil',
        title: 'Validador Móvil',
        category: 'App Móvil',
        shortDescription: 'Valida facturas al instante desde tu celular escaneando el código QR.',
        description: 'La herramienta perfecta para viáticos y gastos de campo. Escanea el QR de cualquier factura impresa o digital y verifica en tiempo real si es válida ante el SAT. Evita facturas apócrifas o canceladas antes de pagarlas.',
        price: '$499.00 MXN',
        image: 'https://placehold.co/600x400/1e3a8a/ffffff?text=Validador+Movil&font=roboto'
    },
    {
        id: 'visor-trifasico',
        title: 'Visor Trifásico',
        category: 'Auditoría',
        shortDescription: 'Análisis 360° de tu información fiscal: SAT vs Contabilidad vs Bancos.',
        description: 'Auditoría electrónica en tus manos. Compara lo que tiene el SAT, lo que tienes en tu ERP y tus movimientos bancarios. Detecta discrepancias fiscales antes de que la autoridad te envíe una carta invitación.',
        price: '$3,800.00 MXN',
        image: 'https://placehold.co/600x400/1e3a8a/ffffff?text=Visor+Trifasico&font=roboto'
    },
    {
        id: 'eric',
        title: 'ERIC',
        category: 'Contabilidad',
        shortDescription: 'Escritor Rápido de Información Contable. Automatización de pólizas.',
        description: 'Dile adiós a la captura manual. ERIC lee tus XMLs y genera automáticamente las pólizas contables para los principales sistemas del mercado (COI, Contpaqi, etc.). Configura tus asientos una vez y procesa miles de facturas en minutos.',
        price: '$1,850.00 MXN',
        image: 'https://placehold.co/600x400/1e3a8a/ffffff?text=ERIC&font=roboto'
    },
    {
        id: 'rex',
        title: 'REX',
        category: 'Utilería',
        shortDescription: 'Robot Extractor de XML. Descarga masiva inteligente y programada.',
        description: 'El robot que trabaja mientras duermes. Programa descargas automáticas nocturnas de todos tus clientes. REX se encarga de mantener tu repositorio de XMLs siempre actualizado, organizado por RFC, año y mes.',
        price: '$999.00 MXN',
        image: 'https://placehold.co/600x400/1e3a8a/ffffff?text=REX&font=roboto'
    }
];

// --- DOM Elements ---
const catalogView = document.getElementById('catalog-view');
const productDetailView = document.getElementById('product-detail-view');
const productGrid = document.getElementById('product-grid');

// Detail Elements
const detailImage = document.getElementById('detail-image');
const detailTitle = document.getElementById('detail-title');
const detailDescription = document.getElementById('detail-description');
const detailPrice = document.getElementById('detail-price');
const whatsappBtn = document.getElementById('whatsapp-btn');

// --- App Logic ---

const app = {
    init: () => {
        app.renderCatalog();
    },

    renderCatalog: () => {
        productGrid.innerHTML = '';
        products.forEach(product => {
            const card = document.createElement('div');
            // Card Container
            card.className = 'bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col transform hover:-translate-y-1';

            // Card Content based on Reference Image (Blue Header + White Body)
            card.innerHTML = `
                <!-- Blue Header Area -->
                <div class="bg-[#1e3a8a] p-6 relative overflow-hidden group cursor-pointer" onclick="app.showDetail('${product.id}')">
                    <div class="absolute top-0 right-0 p-0">
                         <span class="bg-blue-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider shadow-sm">${product.category}</span>
                    </div>
                    <div class="mt-4 text-center">
                        <h3 class="text-3xl font-bold text-white mb-1 tracking-tight">${product.title}</h3>
                        <div class="w-12 h-1 bg-blue-400 mx-auto rounded-full mt-2"></div>
                    </div>
                    <!-- Decorative circle/glow -->
                    <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
                </div>

                <!-- White Body Area -->
                <div class="p-6 flex-1 flex flex-col">
                    <h4 class="font-bold text-gray-900 mb-2 text-lg">${product.title.split(' ')[0]}...</h4> <!-- Subtitle simulation -->
                    <p class="text-gray-600 text-sm mb-6 flex-1 leading-relaxed">${product.shortDescription}</p>
                    
                    <div class="mt-auto">
                        <button onclick="app.showDetail('${product.id}')" class="w-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                            Ver Detalles
                        </button>
                    </div>
                </div>
            `;
            productGrid.appendChild(card);
        });
    },

    showDetail: (productId) => {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        // Populate Data
        detailImage.src = product.image;
        detailTitle.textContent = product.title;
        detailDescription.textContent = product.description;
        detailPrice.textContent = product.price;

        // WhatsApp Link Logic
        const message = `Hola, me interesa informacion sobre ${product.title}`;
        const encodedMessage = encodeURIComponent(message);
        whatsappBtn.href = `https://wa.me/5215557585751?text=${encodedMessage}`;

        // Switch Views
        catalogView.classList.add('hidden');
        productDetailView.classList.remove('hidden');

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    returnToCatalog: () => {
        productDetailView.classList.add('hidden');
        catalogView.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', app.init);

// Expose app to window for inline onclick handlers
window.app = app;
