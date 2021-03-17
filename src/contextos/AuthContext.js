import React, {useContext, useState, useEffect} from 'react';
import {auth} from './../firebase/firebaseConfig';
//Codigo para saber si ya esta iniciada la sesion true or false

//Creamos el contexto
const AuthContext = React.createContext();

//Creamos un Hook para acceder al contexto
const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
    const [usuario, cambiarUsuario] = useState();
    //Creamos un state para saber cuando termina de cargar la comprobacion de onAuthStateChanged
    const [cargando, cambiarCargando] = useState(true);

    //Effect oara ejecutar la comprobacion una sola vez
    useEffect(() => {
        //Comprobamos si hay un usuario
        const cancelarSesion = auth.onAuthStateChanged((usuario) => {
            cambiarUsuario(usuario);
            cambiarCargando(false);
        });

        return cancelarSesion;
    }, []);

    return (
        <AuthContext.Provider value={{usuario: usuario}}>
            {!cargando && children}
        </AuthContext.Provider>
    );
}

export {AuthProvider, AuthContext, useAuth};