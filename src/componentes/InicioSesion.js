import React from 'react';
import {Header, Titulo, ContenedorHeader} from './../elementos/Header';
import {Helmet} from 'react-helmet';
import Boton from './../elementos/Boton';
import {Formulario, Input, ContenedorBoton} from './../elementos/ElementosFormulario';
import {ReactComponent as SvgLogin} from './../imagenes/login.svg';
import styled from 'styled-components';

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height:12.5rem;
    margin-bottom: 1.25rem;
`;

const InicioSesion = () => {
    return ( 
        <>
            <Helmet>
                <title>Iniciar Sesion</title>
            </Helmet>

            <Header>
                <ContenedorHeader>
                    <Titulo>Iniciar Sesion</Titulo>
                    <div>
                        <Boton to='/registro'>Registrarse</Boton>
                    </div>
                </ContenedorHeader>
            </Header>

            <Formulario>
                <Svg />
                <Input 
                    type='email'
                    name='email'
                    placeholder='Correo Electronico'

                />
                <Input 
                    type='password'
                    name='password'
                    placeholder='Contraseña'
                    
                />
            </Formulario>
            <ContenedorBoton>
                 <Boton as='button' primario type='submit'>Iniciar Sesion</Boton>
            </ContenedorBoton>
           
        </>
     );
}
 
export default InicioSesion;