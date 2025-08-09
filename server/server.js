// server/server.js

// 1. Importar las librerías
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize'); // Importamos Sequelize

// 2. Inicializar la aplicación de Express
const app = express();
const PORT = process.env.PORT || 5002;

// 3. Configurar Middlewares
app.use(cors());
app.use(express.json());

// 4. Conectar a la base de datos de MySQL usando Sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql' // Le decimos a Sequelize que estamos usando MySQL
    }
);

// Verificamos la conexión a la base de datos
sequelize.authenticate()
    .then(() => console.log('Conexión a MySQL exitosa.'))
    .catch(err => console.error('Error al conectar a MySQL:', err));

// 5. Definir el "Modelo" (la estructura de la tabla) para los comentarios
const Comment = sequelize.define('Comment', {
    // Sequelize añade 'id' por defecto
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contact: {
        type: DataTypes.STRING,
        allowNull: true // El teléfono es opcional
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false
    }
    // Sequelize añade 'createdAt' y 'updatedAt' automáticamente
}, {
    tableName: 'comments' // Aseguramos que el nombre de la tabla sea 'comments'
});

// 6. Crear la ruta del API para guardar comentarios
app.post('/api/comments', async (req, res) => {
    try {
        const { name, email, contact, comment } = req.body;

        if (!name || !email || !comment) {
            return res.status(400).json({ message: 'Por favor, completa todos los campos requeridos.' });
        }

        // Usamos el método 'create' de Sequelize para guardar en la base de datos
        const newComment = await Comment.create({
            name,
            email,
            contact,
            comment
        });

        res.status(201).json({ message: 'Comentario guardado con éxito!', data: newComment });

    } catch (error) {
        console.error("Error al guardar el comentario:", error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
});

// 7. Sincronizar el modelo y luego iniciar el servidor
// sequelize.sync() puede crear la tabla si no existe, pero es mejor crearla manualmente.
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
});