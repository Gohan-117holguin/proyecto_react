import React, { useState } from 'react'
import { Header } from '../../Layouts/Header/Header'
import { ContadorBoton } from '../../UI/ContadorBoton/ContadorBoton'
import { Span } from '../../UI/Span/Span'

export const Contador = () => {

    const [counter, setCounter] = useState(0)

    const sumar = () => setCounter(counter + 1)

    const restar = () => setCounter(counter - 1)

    const resetear = () => setCounter(0)

    return (
        <>
            <Header />
                <section className='seccion_contador'>
                    <Span contenido={counter} id={counter} />
                    <div className='botones_contenedor'>
                        <ContadorBoton contenido='+' id='aumentar' event={sumar} />
                        <ContadorBoton contenido='resetear' id='resetear' event={resetear} />
                        <ContadorBoton contenido='-' id='reducir' event={restar} />
                    </div>
                </section>
        </>
    )
}
