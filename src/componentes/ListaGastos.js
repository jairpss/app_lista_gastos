import React from 'react';
import {Header, Titulo} from './../elementos/Header';
import {Helmet} from 'react-helmet';
import BtnRegresar from './../elementos/BtnRegresar';
import BarraTotalGastos from './BarraTotalGastos';
import useObtenerGastos from './../hooks/useObtenerGastos';
import {
    Lista, ElementoLista, ListaDeCategorias, ElementoListaCategorias,
    Categoria, Descripcion, Valor, Fecha, ContenedorBotones, BotonAccion,
    BotonCargarMas, ContenedorBotonCentral, ContenedorSubtitulo, Subtitulo
} from './../elementos/ElementosDeLista';
import IconoCategoria from './../elementos/IconoCategoria';
import moneda from './../funciones/moneda';
import {ReactComponent as IconoEditar} from './../imagenes/editar.svg';
import {ReactComponent as IconoBorrar} from './../imagenes/borrar.svg';
import {Link} from 'react-router-dom';
import Boton from './../elementos/Boton';

const ListaGastos = () => {
    const [gastos] = useObtenerGastos();
    
    return ( 
        <>
            <Helmet>
                <title>Lista de Gastos</title>
            </Helmet>

            <Header>
                    <BtnRegresar />
                    <Titulo>Lista de Gastos</Titulo>
            </Header>

            <Lista>
                {gastos.map((gasto) => {
                    return(
                        <ElementoLista key={gasto.id}>
                            <Categoria>
                                <IconoCategoria  id={gasto.categoria} />
                                {gasto.categoria}
                            </Categoria>

                            <Descripcion>
                                {gasto.descripcion}   
                            </Descripcion>
                            <Valor>{moneda(gasto.cantidad)}</Valor>   
                        
                            <ContenedorBotones>
                                <BotonAccion as={Link} to={`/editar/${gasto.id}`}>
                                    <IconoEditar />
                                </BotonAccion>
                                <BotonAccion>
                                    <IconoBorrar />
                                </BotonAccion>
                            </ContenedorBotones>
                        </ElementoLista>
                    );
                })}

                <ContenedorBotonCentral>
                    <BotonCargarMas>Cargar más...</BotonCargarMas>
                </ContenedorBotonCentral>

                {gastos.length === 0 &&
                    <ContenedorSubtitulo>
                        <Subtitulo>No hay gastos para mostrar</Subtitulo>
                        <Boton as={Link} to='/'>Agregar Gasto</Boton>
                    </ContenedorSubtitulo>
                }
            </Lista>

            <BarraTotalGastos />
         </>
     );
}
 
export default ListaGastos;