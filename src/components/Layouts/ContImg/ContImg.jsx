import React from 'react'
import { Imagen } from '../../UI/Imagen/Imagen'
import imagen1 from '../../../assets/img/1.jpg'

export const ContImg = () => {
    return (
        <>
            <div>
                <Imagen ruta={imagen1} clase='imagen1' />
            </div>
        </>
    );
};
