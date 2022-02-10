import React from 'react';

import { SegundoBoton } from '../../UI/SegundoBoton/SegundoBoton';

export const Footer = () => {
    return(
        <>
            <SegundoBoton contenido='Github' />
            <SegundoBoton contenido='Twitter' />
            <SegundoBoton contenido='Linkedin' />
        </>
    );
};
