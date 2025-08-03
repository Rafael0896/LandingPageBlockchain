// landingpage/server/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hola desde el backend!' });
});

app.listen(PORT, () => {
    console.log(`🚀 Backend corriendo en http://localhost:${PORT}`);
});