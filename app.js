const express = require('express');
const app = express();
const port = 3000;

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación Express!');
});

// Ruta para clientes
app.get('/clientes', (req, res) => {
  const clientes = [
    { id: 1, nombre: 'Cliente 1' },
    { id: 2, nombre: 'Cliente 2' },
    { id: 3, nombre: 'Cliente 3' },
  ];
  res.json(clientes);
});

// Ruta para productos
app.get('/productos', (req, res) => {
  const productos = [
    { id: 1, nombre: 'Producto 1' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' },
  ];
  res.json(productos);
});
app.post('/clientes', (req, res) => {
    // Implementar la lógica para crear un nuevo cliente
    res.json({ mensaje: 'Cliente creado correctamente' });
  });
  
  // Rutas para productos con PUT y DELETE (implementar la lógica según sea necesario)
  app.put('/productos/:id', (req, res) => {
    // Implementar la lógica para actualizar un producto
  });
  
  app.delete('/productos/:id', (req, res) => {
    // Implementar la lógica para eliminar un producto
  });


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
