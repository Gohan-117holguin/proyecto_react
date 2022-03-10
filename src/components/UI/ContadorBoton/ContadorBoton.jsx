import React from 'react'

export const ContadorBoton = ({contenido, id, event}) => {
    return (
        <>
            <button className='boton_contador' onClick={event} id={id}>{contenido}</button>
        </>
    )
}
