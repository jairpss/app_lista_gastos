import React from 'react';
import {Header, Titulo, ContenedorHeader} from './../elementos/Header';
import {Helmet} from 'react-helmet';
import Boton from './../elementos/Boton';
import {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton} from './../elementos/ElementosFormulario';

const RegistroUsuarios = () => {
    return ( 
        <>
            <Helmet>
                <title>Crear Cuenta</title>
            </Helmet>

            <Header>
                <ContenedorHeader>
                    <Titulo>Crear Cuenta</Titulo>
                    <div>
                        <Boton to='/iniciar-sesion'>Iniciar Sesion</Boton>
                    </div>
                </ContenedorHeader>
            </Header>

         </>
     );
}
 
export default RegistroUsuarios;