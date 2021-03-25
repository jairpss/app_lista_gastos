import React from 'react';
import {Header, Titulo} from './../elementos/Header';
import {Helmet} from 'react-helmet';
import BtnRegresar from './../elementos/BtnRegresar';
import BarraTotalGastos from './BarraTotalGastos';
import useObtenerGastos from './../hooks/useObtenerGastos';

const ListaGastos = () => {
    const gastos = useObtenerGastos();
    console.log(gastos);
    return ( 
        <>
            <Helmet>
                <title>Lista de Gastos</title>
            </Helmet>

            <Header>
                    <BtnRegresar />
                    <Titulo>Lista de Gastos</Titulo>
            </Header>

            <BarraTotalGastos />
         </>
     );
}
 
export default ListaGastos;