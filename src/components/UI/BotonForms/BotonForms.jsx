import React from 'react'

export const BotonForms = ({clase, type, contenido, evento}) => {
    return (
        <>
            <button type={type} className={clase} onClick={evento}>{contenido}</button>
        </>
    )
}
