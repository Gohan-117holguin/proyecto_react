import React, { useState, useEffect } from 'react'
import { Header } from '../../Layouts/Header/Header'
import { ContadorBoton } from '../../UI/ContadorBoton/ContadorBoton'
import { Imagen } from '../../UI/Imagen/Imagen'
import { Span } from '../../UI/Span/Span'
import ImgCard1 from '../../../assets/img/card1.png'
import ImgCard2 from '../../../assets/img/card2.jpg'

export const TryUseImage = () => {

    const [cambiar, setCambiar] = useState(false)

    const cambios = () => {
        setCambiar(!cambiar)
    }

        // useEffect
        useEffect(() => {
            const imgP = document.getElementById('imgCard1')
            const imgs = document.getElementById('imgCard2')

            const boton = document.getElementById('boton')

            if(cambiar===false){
                imgP.classList.add('show')
                imgs.classList.add('show')
                imgP.classList.remove('none')
                imgs.classList.remove('none')

                boton.classList.add('btnActivo')
                boton.classList.remove('btnDesactivo')
                boton.textContent = 'Enable'

            } else {
                imgP.classList.add('none')
                imgs.classList.add('none')
                imgP.classList.remove('show')
                imgs.classList.remove('show')

                boton.classList.remove('btnActivo')
                boton.classList.add('btnDesactivo')
                boton.textContent = 'Disable'

            }
        }, [cambiar])


    return (
        <>
            <Header />
                <section className='seccion__contador'>
                    <div className='botones_contenedor'>
                    <Span contenido='card1' />
                    <Imagen clase='img__card' ruta={ImgCard1} id='imgCard1'/>
                    </div>
                    <div className='botones_contenedor'>
                    <Span contenido='card2' />
                    <Imagen clase='img__card' ruta={ImgCard2} id='imgCard2'/>
                    </div>
                    <ContadorBoton contenido='Enable' id='boton' event={cambios} />
                </section>
        </>
    )
}
