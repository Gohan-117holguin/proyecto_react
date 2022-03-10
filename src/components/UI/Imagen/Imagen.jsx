import React from 'react';

export const Imagen = ({clase, ruta, id}) => {
    return(
        <>
            <figure>
                <img className={clase} src={ruta} id={id} alt=''></img>
            </figure>
        </>
    );
};
