# Landing Page Blockchain

> Una landing page moderna e informativa sobre tecnología Blockchain, desarrollada con React + TypeScript y Node.js

## 📋 Descripción

Esta es una Landing Page informativa sobre tecnología Blockchain, desarrollada con React + TypeScript en el frontend y Node.js + Express en el backend. Su objetivo es presentar de forma clara y atractiva información sobre el concepto de blockchain, sus beneficios y posibles aplicaciones.

## ✨ Características

- 🎨 Diseño moderno y responsivo para adaptarse a cualquier dispositivo
- ⚛️ Frontend desarrollado con React, Vite y TypeScript
- 🚀 Backend ligero con Node.js y Express
- 🦸 Sección hero con mensaje principal
- 📖 Contenido informativo sobre blockchain
- 📧 Formulario de contacto funcional
- 🧭 Navegación intuitiva con barra superior
- 🦶 Pie de página con información adicional

## 🏗️ Estructura del Proyecto

```
LandingPageBlockchain-main/
│
├── index.html              # HTML base
├── package.json            # Dependencias frontend
├── vite.config.ts          # Configuración Vite
├── tsconfig.json           # Configuración TypeScript
│
├── public/                 # Archivos estáticos
│   └── images.png
│
├── src/                    # Código frontend
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── App.css
│   ├── assets/
│   └── components/         # Componentes reutilizables
│       ├── BlockchainContent.tsx
│       ├── ContactForm.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       └── Navbar.tsx
│
└── server/                 # Backend Node.js
    ├── server.js
    ├── package.json
    └── .env
```

## 🚀 Instalación y Ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/usuario/LandingPageBlockchain.git
cd LandingPageBlockchain-main
```

### 2️⃣ Instalar dependencias del frontend

```bash
npm install
```

### 3️⃣ Instalar dependencias del backend

```bash
cd server
npm install
cd ..
```

### 4️⃣ Ejecutar el backend

```bash
cd server
node server.js
# Por defecto se ejecuta en http://localhost:5000
```

### 5️⃣ Ejecutar el frontend

```bash
npm run dev
# Por defecto se ejecuta en http://localhost:5173
```

## ⚙️ Variables de Entorno

En el archivo `server/.env` puedes definir variables como:

```env
PORT=5000
EMAIL_USER=tu_correo
EMAIL_PASS=tu_contraseña
```

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React** - Biblioteca para construir interfaces de usuario
- **TypeScript** - Superset de JavaScript con tipado estático
- **Vite** - Herramienta de construcción rápida
- **CSS** - Estilos personalizados

### Backend
- **Node.js** - Entorno de ejecución de JavaScript
- **Express** - Framework web minimalista

### Herramientas
- **Git** - Control de versiones
- **GitHub** - Plataforma de desarrollo colaborativo

## 🤝 Contribución

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto se distribuye bajo la licencia MIT. Ver `LICENSE` para más información.

⭐ Si te gusta este proyecto, ¡no olvides darle una estrella!
