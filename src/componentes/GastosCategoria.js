import React from 'react';
import {Header, Titulo} from './../elementos/Header';
import {Helmet} from 'react-helmet';
import BtnRegresar from './../elementos/BtnRegresar';
import BarraTotalGastos from './BarraTotalGastos';

const GastosCategoria = () => {
    return ( 
        <>
            <Helmet>
                <title>Gastos por Categoria</title>
            </Helmet>

            <Header>
                    <BtnRegresar />
                    <Titulo>Gastos por Categoria</Titulo>
            </Header>

            <BarraTotalGastos />
        </>
     );
}
 
export default GastosCategoria;