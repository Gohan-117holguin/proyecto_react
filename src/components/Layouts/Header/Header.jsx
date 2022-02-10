import React from 'react';

import { PrimerBoton } from '../../UI/PrimerBoton/PrimerBoton';

export const Header = () => {
    return(
        <>
            <PrimerBoton contenido='Home' />
            <PrimerBoton contenido='About us' />
            <PrimerBoton contenido='Contact' />
        </>
    );
};
