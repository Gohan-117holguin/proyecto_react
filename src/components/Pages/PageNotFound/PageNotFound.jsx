import React from 'react'
import { NavLink } from 'react-router-dom';
import { Imagen } from '../../UI/Imagen/Imagen'
import { SegundoBoton } from '../../UI/SegundoBoton/SegundoBoton'
import image2 from '../../../assets/img/404.png'

export const PageNotFound = () => {
  return (
    <>
      <section className='page_not'>
        <figure>
          <Imagen clase='image2' ruta={image2} alt='' />
        </figure>
          <h2>Error 404</h2>
          <p>Page not found</p>
          <NavLink to='/'><SegundoBoton contenido='Atras' /></NavLink>
      </section>
    </>
  )
}
