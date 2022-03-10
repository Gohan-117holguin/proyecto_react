import React from 'react'

export const Label = ({para, clase, contenido, valor, evento}) => {
    return (
        <>
            <label htmlFor={para} className={clase} value={valor} onChange={evento}>{contenido}</label>
        </>
    )
}
