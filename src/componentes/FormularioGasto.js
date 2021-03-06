import React, { useState, useEffect } from 'react';
import {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton} from './../elementos/ElementosFormulario';
import Boton from './../elementos/Boton';
import {ReactComponent as IconoPlus} from './../imagenes/plus.svg';
import SelectCategorias from './SelectCategorias';
import DatePicker from './DatePicker';
import getUnixTime from 'date-fns/getUnixTime';
import fromUnixTime from 'date-fns/fromUnixTime';
import agregarGasto from './../firebase/agregarGasto';
import {useAuth} from './../contextos/AuthContext';
import Alerta from './../elementos/Alerta';
import {useHistory} from 'react-router-dom';
import editarGasto from './../firebase/editarGasto';

const FormularioGasto = ({gasto}) => {
    const [inputDescripcion, cambiarInputDescripcion] = useState('');
    const [inputCantidad, cambiarInputCantidad] = useState('');
    const [categoria, cambiarCategoria] = useState('Categoria');  //**** */
    const [fecha, cambiarFecha] = useState(new Date());
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({});

    const {usuario} = useAuth();
    const history = useHistory();
    
    useEffect(() => {
        //Comprobamos si hay algun gasto y se establece el state con los vals del gasto
        if (gasto) {
            //Comprobamos que el gasto sea del user actual comparando el uid del gasto con el del user
            if(gasto.data().uidUsuario === usuario.uid){
                cambiarCategoria(gasto.data().categoria);
                cambiarFecha(fromUnixTime(gasto.data().fecha));
                cambiarInputDescripcion(gasto.data().descripcion);
                cambiarInputCantidad(gasto.data().cantidad);
            } else {
                history.push('/lista-gastos')
            }
        }
    }, [gasto, usuario, history]);

    const handleChange = (e) => {
        if(e.target.name === 'descripcion'){
            cambiarInputDescripcion(e.target.value);
        } else if(e.target.name === 'cantidad'){
            cambiarInputCantidad(e.target.value.replace(/[^0-9.]/g, ''));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //le agregamos dos decimales a la cantidad
        let cantidad = parseFloat(inputCantidad).toFixed(2);

        //Comprobamos que haya una desc y cantidad
        if(inputDescripcion !== '' && inputCantidad !== ''){
            if(cantidad) {
                if(gasto){
                    editarGasto({
                        id: gasto.id,
                        categoria: categoria,
                        descripcion: inputDescripcion,
                        cantidad: cantidad,
                        fecha: getUnixTime(fecha)
                    }).then(() => {
                        history.push('/lista-gastos');
                    }).catch((error) => {
                        console.log(error);
                    })
                } else {
                    agregarGasto({
                    categoria: categoria,
                    descripcion: inputDescripcion,
                    cantidad: cantidad,
                    fecha: getUnixTime(fecha),
                    uidUsuario: usuario.uid
                })
                .then(() => {
                    cambiarCategoria('categoria');  //**** */
                    cambiarInputDescripcion('');
                    cambiarInputCantidad('');
                    cambiarFecha(new Date());

                    cambiarEstadoAlerta(true);
                    cambiarAlerta({tipo: 'exito', mensaje: '??Gasto agregado correctamente!'});
                })
                .catch((error) => {
                    cambiarEstadoAlerta(true);
                    cambiarAlerta({tipo: 'error', mensaje: 'Hubo un problema al intentar agregar el gasto'});
                })
                }    
            } else {
                cambiarEstadoAlerta(true);
                cambiarAlerta({tipo: 'error', mensaje: 'La cantidad que ingresaste no es correcta'});
            }

        } else {
            cambiarEstadoAlerta(true);
            cambiarAlerta({tipo: 'error', mensaje: 'Por favor completa todos los campos'});
        }
    }

    return ( 
        <Formulario onSubmit={handleSubmit}>
            <ContenedorFiltros>
                <SelectCategorias categoria={categoria} cambiarCategoria={cambiarCategoria} />
                <DatePicker fecha={fecha} cambiarFecha={cambiarFecha} />
            </ContenedorFiltros>

            <div>
                <Input 
                    type='text'
                    name='descripcion'
                    id='descripcion'
                    placeholder='Descripci??n'
                    value={inputDescripcion}
                    onChange={handleChange}
                />
                <InputGrande 
                    type='text'
                    name='cantidad'
                    id='cantidad'
                    placeholder='$0.00'
                    value={inputCantidad}
                    onChange={handleChange}
                />
            </div>
            <ContenedorBoton>
                <Boton as='button' primario conIcono type='submit'>
                   {gasto ? 'Editar Gasto' : 'Agregar Gasto'} <IconoPlus />
                </Boton>
            </ContenedorBoton>
            <Alerta 
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoAlerta}
                cambiarEstadoAlerta={cambiarEstadoAlerta}
            />
        </Formulario>
     );
}
 
export default FormularioGasto;

