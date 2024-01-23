const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3001;

app.use(cors()); // Habilita CORS

const clientes = [
    { id: 1, cedula: '123456789', nombre: 'Juan', apellido: 'Pérez', direccion: 'Calle 123', correo: 'juan@example.com', celular: '555-1234' },
    { id: 2, cedula: '987654321', nombre: 'María', apellido: 'Gómez', direccion: 'Avenida 456', correo: 'maria@example.com', celular: '555-5678' },
    { id: 3, cedula: '123456789', nombre: 'Jose', apellido: 'Zambrano', direccion: 'Calle 123', correo: 'juan@example.com', celular: '555-1234' },
    { id: 4, cedula: '987654324', nombre: 'Pablo', apellido: 'Velasco', direccion: 'Avenida 456', correo: 'maria@example.com', celular: '555-5678' },
    { id: 5, cedula: '123456785', nombre: 'Marcia', apellido: 'Pérez', direccion: 'Calle 123', correo: 'juan@example.com', celular: '555-1234' },
    { id: 6, cedula: '987654326', nombre: 'Miryam', apellido: 'Nuñez', direccion: 'Avenida 456', correo: 'maria@example.com', celular: '555-5678' },
];

app.get('/clientes', (req, res) => {
    res.json(clientes);
});



app.listen(puerto, () => {
    console.log(`Microservicio 1 está escuchando en http://localhost:${puerto}`);
});
