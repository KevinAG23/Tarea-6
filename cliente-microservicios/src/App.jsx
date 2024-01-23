// Importar las dependencias necesarias
import { useEffect, useState } from 'react';
import axios from 'axios';

// Definir el componente principal de la aplicación
function App() {
  // Definir estados para almacenar los datos de los microservicios
  const [clientesData, setClientesData] = useState([]);
  const [productosData, setProductosData] = useState([]);

  // Efecto de efecto secundario para cargar datos al montar el componente
  useEffect(() => {
    // Consumir Microservicio de Clientes
    axios.get('http://localhost:3001/clientes')
      .then(response => setClientesData(response.data))
      .catch(error => console.error(error));

    // Consumir Microservicio de Productos
    axios.get('http://localhost:3002/productos')
      .then(response => setProductosData(response.data))
      .catch(error => console.error(error));
  }, []);

  // Función para renderizar las tarjetas de clientes
  const renderClientes = () => {
    return (
      <div>
        <h2>Datos de Clientes:</h2>
        <div className="card-container">
          {clientesData.map(cliente => (
            <div key={cliente.id} className="card">
              <h3>{cliente.nombre} {cliente.apellido}</h3>
              <p>Cédula: {cliente.cedula}</p>
              <p>Dirección: {cliente.direccion}</p>
              <p>Correo: {cliente.correo}</p>
              <p>Celular: {cliente.celular}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Función para renderizar las tarjetas de productos
  const renderProductos = () => {
    return (
      <div>
        <h2>Datos de Productos:</h2>
        <div className="card-container">
          {productosData.map(producto => (
            <div key={producto.id} className="card">
              <h3>{producto.nombre}</h3>
              <p>Precio: ${producto.precio}</p>
              <p>Descripción: {producto.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Renderizar la interfaz de usuario
  return (
    <div>
      <h1>Cliente React con Vite</h1>

      {renderClientes()}
      {renderProductos()}
    </div>
  );
}

// Exportar el componente principal
export default App;
