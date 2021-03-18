import React from 'react';
import {Helmet} from 'react-helmet';
import {Header, Titulo, ContenedorBotones, ContenedorHeader} from './elementos/Header';
import Boton from './elementos/Boton';
import BotonCerrarSesion from './elementos/BotonCerrarSesion';
import FormularioGasto from './componentes/FormularioGasto';

const App = () => {
  return ( 
    <>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>Agregar Gasto</Titulo>
          <ContenedorBotones>
            <Boton to='/categorias'>Categorias</Boton>
            <Boton to='/lista-gastos'>Lista de Gastos</Boton>
            <BotonCerrarSesion />
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
      <FormularioGasto />
    </>
   );
}
 
export default App;