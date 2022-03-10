import React from 'react';
import { NavLink } from 'react-router-dom';
import { SegundoBoton } from '../../UI/SegundoBoton/SegundoBoton';

export const Footer = () => {
    return(
        <>
            <footer>
                <NavLink to='/home'><SegundoBoton contenido='Github' /></NavLink>
                <SegundoBoton contenido='Twitter' />
                <SegundoBoton contenido='Linkedin' />
                <NavLink to='/login'><SegundoBoton contenido='Login' /></NavLink>
                <NavLink to='/register'><SegundoBoton contenido='Register' /></NavLink>
            </footer>
        </>
    );
};
