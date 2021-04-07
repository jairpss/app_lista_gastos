import React from 'react';
import {Header, Titulo} from './../elementos/Header';
import {Helmet} from 'react-helmet';
import BtnRegresar from './../elementos/BtnRegresar';
import BarraTotalGastos from './BarraTotalGastos';
import useObtenerGastoMesCategoria from './../hooks/useObtenerGastoMesCategoria';
import {ListaDeCategorias, ElementoListaCategorias, Categoria, Valor} from './../elementos/ElementosDeLista';
import IconoCategoria from './../elementos/IconoCategoria';
import moneda from './../funciones/moneda';

const GastosCategoria = () => {
    const gastosPorCategoria = useObtenerGastoMesCategoria();
    console.log(gastosPorCategoria);

    return ( 
        <>
            <Helmet>
                <title>Gastos por Categoria</title>
            </Helmet>

            <Header>
                    <BtnRegresar />
                    <Titulo>Gastos por Categoria</Titulo>
            </Header>

            <ListaDeCategorias>
                {gastosPorCategoria.map((elemento, index) => {
                    return(
                        <ElementoListaCategorias key={index}>
                            <Categoria>
                                <IconoCategoria id={elemento.categoria}/>
                                {elemento.categoria}
                            </Categoria>
                            <Valor>{moneda(elemento.cantidad)}</Valor>
                        </ElementoListaCategorias>
                    );
                })}
            </ListaDeCategorias>

            <BarraTotalGastos />
        </>
     );
}
 
export default GastosCategoria;