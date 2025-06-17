# 🎨 Frontend — Módulo de Gestión de Clientes (Vue 3 + Vite + Tailwind)
SPA construida en Vue 3 utilizando Vite como herramienta de desarrollo y TailwindCSS para la maquetación. Se conecta a un backend en Laravel protegido por Sanctum.

## 📌 Tecnologías
- Vue 3 (Composition API)
- Vite
- Vue Router
- Axios
- TailwindCSS v3 - (tener en cuanta que la version 4 tiene problema para crear el archivo tailwind.config.js)

## 🚀 Instalación
1. Clonar el proyecto:
   ```bash
   git clone <url-del-repo-frontend>
   cd erp-frontend
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 🔐 Autenticación
- Se realiza un login mediante `/login`
- El token JWT se almacena en `localStorage`
- Las rutas internas están protegidas con Vue Router y redirigen si no hay token

## 🧩 Vistas
- **Login.vue**: formulario de autenticación
- **Clientes.vue**: CRUD completo con formulario modal

## 📁 Estructura del proyecto
```
src/
├── pages/
│   ├── Login.vue
│   └── Clientes.vue
├── services/
│   └── api.js         # Axios centralizado
├── router/
│   └── index.js       # Rutas con protección
├── assets/
│   └── main.css       # TailwindCSS
└── App.vue
```

## 📦 Consumo de API
si usas ddev usa la ruta como esta, si no tienes que cambiarla.
Axios se configura en `api.js` con:
- `baseURL`: https://erp-back-end.ddev.site/api
- `withCredentials: true`
- Token desde localStorage en cada petición

## ✅ Estilos
TailwindCSS

## 🛡️ Rutas protegidas
```js
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.meta.requiereAuth && !token) next('/login')
  else next()
})
```

## 🧪 Validaciones en frontend
- `nombre`: requerido
- `email`: formato válido
- `NIT`: debe ser único (verificado en backend)
