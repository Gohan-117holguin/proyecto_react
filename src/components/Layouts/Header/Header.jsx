import React from 'react';
import { NavLink } from 'react-router-dom';
import { PrimerBoton } from '../../UI/PrimerBoton/PrimerBoton';

export const Header = () => {
    return(
        <>
            <header>
                <NavLink to='/'><PrimerBoton contenido='Home' /></NavLink>
                <NavLink to='/aboutUs'><PrimerBoton contenido='About us' /></NavLink>
                <NavLink to='/contact'><PrimerBoton contenido='Contact' /></NavLink>
                <NavLink to='/contador'><PrimerBoton contenido='Contador' /></NavLink>
                <NavLink to='/tryUseComponent'><PrimerBoton contenido='Contador 2' /></NavLink>
                <NavLink to='/tryUseImage'><PrimerBoton contenido='Card Imagen' /></NavLink>
            </header>
        </>
    );
};
