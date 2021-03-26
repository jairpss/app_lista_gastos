import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './elementos/Contenedor';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import InicioSesion from './componentes/InicioSesion';
import ListaGastos from './componentes/ListaGastos';
import RegistroUsuarios from './componentes/RegistroUsuarios';
import GastosCategoria from './componentes/GastosCategoria';
import EditarGasto from './componentes/EditarGasto';
import {Helmet} from 'react-helmet';
import favicon from './imagenes/logo.png';
import Fondo from './elementos/Fondo';
import {AuthProvider} from './contextos/AuthContext';
import RutaPrivada from './componentes/RutaPrivada';

WebFont.load({
  google: {
    families: ['Quicksand:400,500,700', 'sans-serif']
  }
});

const Index = () => {
  return ( 
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
      </Helmet>

      <AuthProvider>
        <BrowserRouter>
          <Contenedor>
            <Switch>
              <Route path='/iniciar-sesion' component={InicioSesion}/>
              <Route path='/registro' component={RegistroUsuarios}/>
              
              <RutaPrivada path='/categorias'>
                <GastosCategoria />
              </RutaPrivada>
              <RutaPrivada path='/lista-gastos'>
                <ListaGastos />
              </RutaPrivada>
              <RutaPrivada path='/editar-gasto/:id'>
                <EditarGasto />
              </RutaPrivada>
              <RutaPrivada path='/'>
                <App />
              </RutaPrivada>
              
            </Switch>
          </Contenedor>
        </BrowserRouter>
      </AuthProvider>
      
      <Fondo />
    </>
   );
}

ReactDOM.render(<Index />, document.getElementById('root'));
