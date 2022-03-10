import React from 'react'

export const Span = ({contenido, id}) => {
    return (
        <>
            <span className='span' id={id}>{contenido}</span>
        </>
    )
}
