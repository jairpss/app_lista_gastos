import React, { useEffect } from 'react'
import styled, {keyframes} from 'styled-components';
import theme from './../theme';

//Animacion de las alertas
const slideDown = keyframes`
    0% {
        transform: translateY(-1.25rem); /* 20px */
        opacity: 0;
    }
 
    10% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
    
    90% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
 
    100% {
        transform: translateY(1.25rem);
        opacity: 0;
    }
`;
 
//Estilo de las alertas
const ContenedorAlerta = styled.div`
    z-index: 1000;
    width: 100%;
    left: 0;
    top: 1.25rem; /* 20px */
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slideDown} 4s ease forwards;
 
    p {
 
        background: ${(props) => {
            if(props.tipo === 'error'){
                return theme.rojo;
            } else if (props.tipo === 'exito') {
                return theme.verde;
            } else {
                return '#100F10';
            }
        }};
        color: #fff;
        font-family: 'Quicksand', sans-serif;
        font-weight: 600;
        padding: 1.25rem 2.5rem; /* 20px 40px */
        border-radius: 0.31rem; /* 5px */
        box-shadow: 0px 0px 15px rgba(0,0,0,.1);
        text-align: center;
    }
`;

const Alerta = ({tipo, mensaje, estadoAlerta, cambiarEstadoAlerta}) => {
    useEffect(() => {
        let tiempo;

        if(estadoAlerta === true){
            tiempo = setTimeout(() => {
                cambiarEstadoAlerta(false);
            }, 4000);
        }
        //LA funcion de limpieza se ejecuta si el componente se desmonta
        //Limpia el tiempo para que no intente cambiar el estado si el componente no esta en pantalla
        //Es importante para poder cambiar de componenetes en pantalla sin errores.
        return(() => clearTimeout(tiempo));
    }, [estadoAlerta, cambiarEstadoAlerta]);

    return ( 
        <>
            {estadoAlerta &&
                <ContenedorAlerta tipo={tipo}>
                    <p>{mensaje}</p>
                </ContenedorAlerta>
            }
        </>
        
     );
}
 
export default Alerta;