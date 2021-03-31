import React from 'react';
import {Header, Titulo} from './../elementos/Header';
import {Helmet} from 'react-helmet';
import BtnRegresar from './../elementos/BtnRegresar';
import BarraTotalGastos from './BarraTotalGastos';
import FormularioGasto from './FormularioGasto';
import {useParams} from 'react-router-dom';
import useObtenerGasto from './../hooks/useObtenerGasto';

const EditarGasto = () => {
    const {id} = useParams();
    const  [gasto] = useObtenerGasto(id);

    console.log(gasto);

    return ( 
        <>
            <Helmet>
                <title>Editar Gasto</title>
            </Helmet>

            <Header>
                    <BtnRegresar />
                    <Titulo>Editar Gasto</Titulo>
            </Header>

            <FormularioGasto />

            <BarraTotalGastos />
        </>
     );
}
 
export default EditarGasto;