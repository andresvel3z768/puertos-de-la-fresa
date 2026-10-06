# 🍓 Puertos de la Fresa — Sitio Web Profesional

> Sitio web completo para un negocio de fresas con crema: catálogo de productos, pedidos por WhatsApp automatizados, galería con lightbox, reseñas, mapa y diseño responsive.

---

## 📸 Vista general

| | |
|---|---|
| **Tipo** | Sitio web estático (landing page + sistema de pedidos) |
| **Negocio** | Puertos de la Fresa — postres artesanales |
| **Público** | Clientes finales (pedidos a domicilio / recoger en tienda) |
| **Idioma** | Español |
| **Estado** | ✅ Producción lista |

---

## ✨ Características

### Funcionales
- **Menú de productos** — 8 productos con precios, badges ("Más vendido", "Nuevo", "Ahorra 15%") y botón de pedido individual.
- **Sistema de pedidos por WhatsApp** — el cliente llena un formulario (nombre, teléfono, producto, cantidad, dirección, notas) y al enviarlo se abre WhatsApp con el mensaje **armado y codificado automáticamente**; solo presiona "enviar".
- **Pedidos directos** — cada tarjeta de producto y el botón flotante abren `wa.me` con un mensaje predeterminado específico del producto.
- **Galería con lightbox** — ampliación de fotos con navegación (← →), cierre con `Esc` y soporte de teclado (accesible con `Tab` + `Enter`).
- **Validación de formulario** — campos obligatorios verificados en cliente con mensajes de error amigables.
- **Información del negocio** — dirección, horarios, teléfono, correo y mapa de Google Maps embebido (sin API key).

### De diseño y experiencia
- **Hero a pantalla completa** con imagen animada (efecto zoom lento), degradado y llamadas a la acción.
- **Navegación fija** transparente que se vuelve sólida al hacer scroll + menú hamburguesa en móvil.
- **Animaciones al hacer scroll** con Intersection Observer (aparición escalonada de secciones).
- **Contadores animados** (+500 pedidos, 5.0 ★, 3 años) con easing cúbico.
- **Micro-interacciones** — zoom de imágenes al hover, tarjetas elevadas, botón WhatsApp flotante con efecto de pulso.
- **Diseño 100 % responsive** — 4 breakpoints (1024 / 900 / 640 px) probados para móvil, tablet y escritorio.
- **Accesibilidad** — `aria-label` en botones de icono, navegación por teclado en galería, soporte de `prefers-reduced-motion`, contraste AA en texto principal.

---

## 🛠 Tecnologías

| Capa | Tecnología | Justificación |
|---|---|---|
| Estructura | **HTML5 semántico** | SEO, accesibilidad, sin dependencias |
| Estilos | **CSS3 moderno** | Custom Properties, Grid, Flexbox, `clamp()`, `aspect-ratio` |
| Interactividad | **JavaScript vanilla (ES6+)** | Cero librerías: Intersection Observer, Clipboard-free WhatsApp API |
| Tipografía | Google Fonts — *Playfair Display* + *Poppins* | Contraste editorial/corporativo |
| Imágenes | Unsplash CDN | Optimizadas con parámetros `w`/`q`, carga diferida (`loading="lazy"`) |

**Sin frameworks, sin build tools, sin dependencias.** Se abre con doble clic en `index.html`.

---

## 📁 Estructura del proyecto

```
.
├── index.html          # Página única con 7 secciones + lightbox + footer
├── css/
│   └── styles.css      # Diseño completo, variables, responsive, animaciones
├── js/
│   └── main.js         # Navbar, menú móvil, scroll reveal, contadores,
│                       # lightbox, formulario → WhatsApp
└── README.md           # Esta documentación
```

### Mapa de secciones (`index.html`)

| # | Sección | `id` | Propósito |
|---|---|---|---|
| 1 | Hero | `#inicio` | Impacto visual + CTA + contadores |
| 2 | Beneficios | `#beneficios` | 4 propuestas de valor con iconos |
| 3 | Menú | `#menu` | 8 productos con precios y pedido directo |
| 4 | Galería | `#galeria` | 6 fotos con lightbox |
| 5 | Reseñas | `#resenas` | 3 testimonios con estrellas |
| 6 | Pedidos | `#pedidos` | Formulario → WhatsApp |
| 7 | Contacto | `#contacto` | Datos del negocio + mapa embebido |

---

## ▶ Cómo ejecutar

**Opción 1 — Directa:**
Abrir `index.html` en cualquier navegador moderno.

**Opción 2 — Servidor local (recomendado para desarrollo):**

```bash
# Python
python -m http.server 8000

# o Node
npx serve .
```

Luego visitar `http://localhost:8000`.

**Requisitos:** ninguno. Compatible con Chrome, Firefox, Edge y Safari (últimas 2 versiones).

---

## ⚙️ Personalización (guía rápida)

Todo el contenido es editable directamente en los archivos:

| Qué cambiar | Dónde |
|---|---|
| **Número de WhatsApp** | `js/main.js` → constante `WHATSAPP_NUMBER`, y los enlaces `wa.me/5215512345678` en `index.html` |
| **Productos y precios** | `index.html` → bloques `<article class="card">` y `<option>` del formulario |
| **Colores de marca** | `css/styles.css` → bloque `:root` (`--pink`, `--cream`, `--green`) |
| **Fotos** | URLs `images.unsplash.com` en `index.html` y `.hero-bg` en `styles.css` |
| **Dirección y horarios** | `index.html` → sección `#contacto` (y el `src` del iframe de Google Maps) |
| **Textos y reseñas** | `index.html` → secciones `#resenas`, hero y footer |

---

## 💼 Competencias demostradas

- **HTML semántico y accesible** — landmarks, `aria-*`, foco visible, teclado completo.
- **CSS avanzado** — variables CSS, Grid + Flexbox, animaciones keyframes, `clamp()` tipográfico fluido, `prefers-reduced-motion`.
- **JavaScript sin dependencias** — programación orientada a eventos, Intersection Observer, manejo de estado de UI, escaping de Unicode en URLs, validación de formularios.
- **Pensamiento de producto** — flujo de pedido optimizado (formulario → WhatsApp en 1 clic) pensado para conversión real de un negocio pequeño.
- **Diseño responsive first** — menú adaptable, imágenes con `aspect-ratio`, breakpoints progresivos.
- **Buenas prácticas** — carga diferida de imágenes, `preconnect` a fuentes, meta description para SEO, sin duplicación de lógica.

---

## 🔮 Posibles mejoras

- Carrito de compras con persistencia (`localStorage`).
- PWA (manifest + service worker) para instalación en móvil.
- Panel de administración de productos con JSON editable.
- Multi-tienda: selector de sucursal que cambia el número de WhatsApp.
- Pruebas automatizadas (Playwright) y Lighthouse CI.

---

## 👩‍💻 Autoría

Desarrollado por **[Tu Nombre]** — 2026.
Contacto: [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com) · GitHub: [tu-usuario](https://github.com/tu-usuario)

> *Proyecto demo con datos de ejemplo (dirección, teléfono, precios). Lista para producción reemplazando los datos reales según la guía de personalización.*
