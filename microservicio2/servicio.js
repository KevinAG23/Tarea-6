const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3002;

app.use(cors()); // Habilita CORS

const productos = [
    { id: 1, 
      nombre: 'Iphone 13', 
      precio: 800.99, 
      descripcion: 'Ofrece un rendimiento excepcional con su procesador avanzado y cámara de alta resolución.' },
    { id: 2,
      nombre: 'Levono t470',
      precio: 150.50, 
      descripcion: 'Ultradelgada, ligera y potente, esta laptop es ideal para profesionales en movimiento.' },
    { id: 3, 
      nombre: 'Iphone 13', 
      precio: 800.99, 
      descripcion: 'Su diseño compacto lo convierte en el compañero ideal para tu estilo de vida activo.' },
    { id: 4, 
      nombre: 'Levono t470', 
      precio: 150.50, 
      descripcion: 'Diseñada para los amantes de los videojuegos' },
    { id: 5, 
      nombre: 'Iphone 13', 
      precio: 800.99, 
      descripcion: 'Tecnología de carga rápida, batería duradera y un diseño moderno con pantalla de borde a borde hacen que este teléfono destaque' },
    { id: 6, 
      nombre: 'Levono t470', 
      precio: 150.50, 
      descripcion: 'Combina seguridad, rendimiento y durabilidad. ' },
    
];

app.get('/productos', (req, res) => {
    res.json(productos);
});

app.listen(puerto, () => {
    console.log(`Microservicio 2 está escuchando en http://localhost:${puerto}`);
});
