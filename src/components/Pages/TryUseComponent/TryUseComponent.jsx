import React, { useEffect, useState } from 'react'
import { Header } from '../../Layouts/Header/Header'
import { ContadorBoton } from '../../UI/ContadorBoton/ContadorBoton'
import { Span } from '../../UI/Span/Span'
import { Imagen } from '../../UI/Imagen/Imagen'
import ImgCounter from '../../../assets/img/the_weapon.jpg'

export const TryUseComponent = () => {

    // useState

    const useCounter = () => {
        const [counter, setCounter] = useState(0)

        const addCounter = () => setCounter(counter + 1)
        const resetCounter = () => setCounter(0)
        const substractCounter = () => setCounter(counter - 1)
    
        return {
            counter,
            addCounter,
            resetCounter,
            substractCounter
        }
    }

    const { counter, addCounter, resetCounter, substractCounter } = useCounter()

    // useEffect
    useEffect(() => {
        const img = document.getElementById('imgCounter')

        if (counter >= 10){
            img.classList.remove('inactive')
            img.classList.add('active')
        } else {
            img.classList.add('inactive')
            img.classList.remove('active')
        }
    }, [counter])

    return (
        <>
            <Header />
                <section className='seccion__contador'>
                    <Imagen clase='img__counter' ruta={ImgCounter} id='imgCounter'/>
                    <Span contenido={counter} id={counter} />
                    <div className='botones_contenedor'>
                        <ContadorBoton contenido='+' event={addCounter} />
                        <ContadorBoton contenido='resetear' event={resetCounter} />
                        <ContadorBoton contenido='-' event={substractCounter} />
                    </div>
                </section>
        </>
    )
}
