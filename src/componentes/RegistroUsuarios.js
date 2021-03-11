import React, {useState} from 'react';
import {Header, Titulo, ContenedorHeader} from './../elementos/Header';
import {Helmet} from 'react-helmet';
import Boton from './../elementos/Boton';
import {Formulario, Input, ContenedorBoton} from './../elementos/ElementosFormulario';
import {ReactComponent as SvgLogin} from './../imagenes/registro.svg';
import styled from 'styled-components';
import {auth} from './../firebase/firebaseConfig';
import {useHistory} from 'react-router-dom';

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height:6.25rem;
    margin-bottom: 1.25rem;
`;

const RegistroUsuarios = () => {
    const history = useHistory();
    const [correo, establecerCorreo] = useState('');
    const [password, establecerPassword] = useState('');
    const [password2, establecerPassword2] = useState('');

    const handleChange = (e) => {
        switch(e.target.name){
            case 'email':
                establecerCorreo(e.target.value);
                break;
            case 'password':
                establecerPassword(e.target.value);
                break;
            case 'password2':
                establecerPassword2(e.target.value);
                break;
            default:
                break;     
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        //Comprobamos que el correo sea valido, campos llenos, password iguales
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if(!expresionRegular.test(correo)){
            console.log('Ingresa un correo valido');
            return;
        }
        if(correo === '' || password === '' || password2 === ''){
            console.log('Completa todos los campos');
            return;
        }
        if(password !== password2){
            console.log('Las contraseñas no coiciden');
            return;
        }
        try {
            await auth.createUserWithEmailAndPassword(correo, password);
            history.push('/');
        } catch(error){
            let mensaje;
            switch(error.code){
                case 'auth/invalid-password':
                    mensaje = 'La contraseña tiene que ser de al menos 6 caracteres.'
                    break;
                case 'auth/email-already-in-use':
                    mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.'
                break;
                case 'auth/invalid-email':
                    mensaje = 'El correo electrónico no es válido.'
                break;
                default:
                    mensaje = 'Hubo un error al intentar crear la cuenta.'
                break;
            }
            console.log(mensaje);
        }
    }

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

            <Formulario onSubmit={handleSubmit}>
                <Svg />
                <Input 
                    type='email'
                    name='email'
                    placeholder='Correo Electronico'
                    value={correo}
                    onChange={handleChange}
                />
                <Input 
                    type='password'
                    name='password'
                    placeholder='Contraseña'
                    value={password}
                    onChange={handleChange}
                />

                <Input 
                    type='password'
                    name='password2'
                    placeholder='Confirmar Contraseña'
                    value={password2}
                    onChange={handleChange}
                />
                <ContenedorBoton>
                    <Boton as='button' primario type='submit'>Crear Cuenta</Boton>
                </ContenedorBoton>
            </Formulario>
            
           
         </>
     );
}
 
export default RegistroUsuarios;