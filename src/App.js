import './App.css';
import Logo from './imagenes/hola.png';
import ListaTareas from './componentes/ListaTareas';

function App() {
  return (
    <div className="app-tareas">
      <div className='tareas-logo-contenedor'>
        <img
          src={Logo}
          className='tareas-logo'
          alt='Logo de tareas'
        />
      </div>
      <div className='tareas-lista-principal'> 
        <h1>Mis Tareas</h1>
          <ListaTareas />
      </div>
    </div>
  );
}

export default App;
