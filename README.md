Landing Page Blockchain
Esta es una Landing Page informativa sobre tecnología Blockchain, desarrollada con React + TypeScript en el frontend y Node.js + Express en el backend. Su objetivo es presentar de forma clara y atractiva información sobre el concepto de blockchain, sus beneficios y posibles aplicaciones.
Características
• Diseño moderno y responsivo para adaptarse a cualquier dispositivo.
• Frontend desarrollado con React, Vite y TypeScript.
• Backend ligero con Node.js y Express.
• Sección hero con mensaje principal.
• Contenido informativo sobre blockchain.
• Formulario de contacto funcional.
• Navegación intuitiva con barra superior.
• Pie de página con información adicional.
Estructura del Proyecto
LandingPageBlockchain-main/
│
├── index.html                 # HTML base
├── package.json               # Dependencias frontend
├── vite.config.ts              # Configuración Vite
├── tsconfig.json               # Configuración TypeScript
│
├── public/                     # Archivos estáticos
│   └── images.png
│
├── src/                        # Código frontend
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── App.css
│   ├── assets/
│   └── components/             # Componentes reutilizables
│       ├── BlockchainContent.tsx
│       ├── ContactForm.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       └── Navbar.tsx
│
└── server/                     # Backend Node.js
    ├── server.js
    ├── package.json
    └── .env
Instalación y Ejecución
1️⃣ Clonar el repositorio:
git clone https://github.com/usuario/LandingPageBlockchain.git
cd LandingPageBlockchain-main
2️⃣ Instalar dependencias del frontend:
npm install
3️⃣ Instalar dependencias del backend:
cd server
npm install
cd ..
4️⃣ Ejecutar el backend:
cd server
node server.js
# Por defecto se ejecuta en http://localhost:5000
5️⃣ Ejecutar el frontend:
npm run dev
# Por defecto se ejecuta en http://localhost:5173
Variables de Entorno
En el archivo server/.env puedes definir variables como:
PORT=5000
EMAIL_USER=tu_correo
EMAIL_PASS=tu_contraseña
Tecnologías Utilizadas
• Frontend: React, TypeScript, Vite, CSS
• Backend: Node.js, Express
• Control de versiones: Git, GitHub
Licencia
Este proyecto se distribuye bajo la licencia MIT.
