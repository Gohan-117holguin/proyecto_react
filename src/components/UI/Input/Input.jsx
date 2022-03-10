import React from 'react'

export const Input = ({type, name, clase, value, place, id, auto, eventoChange, eventoOnClick}) => {
    return (
        <>
            <input type={type} name={name} value={value} className={clase} onChange={eventoChange} onClick={eventoOnClick} placeholder={place} id={id} autoComplete={auto} />
        </>
    )
}
