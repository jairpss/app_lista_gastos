import React from 'react';
import {Header, Titulo, ContenedorHeader} from './../elementos/Header';
import {Helmet} from 'react-helmet';
import Boton from './../elementos/Boton';
import {Formulario, Input, ContenedorBoton} from './../elementos/ElementosFormulario';
import {ReactComponent as SvgLogin} from './../imagenes/registro.svg';
import styled from 'styled-components';

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height:6.25rem;
    margin-bottom: 1.25rem;
`;

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

                <Input 
                    type='password'
                    name='password2'
                    placeholder='Confirmar Contraseña'
                    
                />
            </Formulario>
            <ContenedorBoton>
                 <Boton as='button' primario type='submit'>Crear Cuenta</Boton>
            </ContenedorBoton>
           
         </>
     );
}
 
export default RegistroUsuarios;