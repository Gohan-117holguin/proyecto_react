import React from 'react'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'
import { Label } from '../../UI/Label/Label'
import { Input } from '../../UI/Input/Input'
import { BotonForms } from '../../UI/BotonForms/BotonForms'

export const FormContact = () => {

    const mostrarAlertaSucces = () => {
        Swal.fire({
            icon:'success',
            title:'Mensaje enviado Correctamente',
        })
    }

    const sendEmail = (event) => {
        event.preventDevault()

        emailjs.sendForm('service_r00ndud', 'template_hpltwv8', event.target, '7SNvA-iIMYEdqWJYc')
        .then(response => {
            console.log(response)
            if (response.data.status === "ok") {
                mostrarAlertaSucces()
            } else {
                mostrarAlertaWarning()
            }
        })
        .catch(error => console.log(error))
    }

    /*const mostrarAlertaError = () => {
        Swal.fire({
            icon:'error',
            title:'Alerta con SweetAlert',
            text:'Aqui se mostrara la informacion'
        })
    }*/

    const mostrarAlertaWarning = () => {
        Swal.fire({
            icon:'warning',
            title:'Alerta con SweetAlert',
            text:'Aqui se mostrara la informacion'
        })
    }

    return (
        <>
            <form className='form' onSubmit={sendEmail}>

                <Label para='asunto' clase='label' contenido='Nombre' />
                <Input type='text' name='user_name' clase='input_form' place='Nombre' auto='off' />

                <Label para='email' clase='label' contenido='Correo' />
                <Input type='text' name='user_email' clase='input_form' place='Para' auto='off' />

                <Label para='mensaje' clase='label' contenido='Mensaje' />
                <textarea id='mensaje' name='user_message' className='textarea_form' placeholder='Mensaje'></textarea>

                <BotonForms
                    type='submit'
                    contenido='Enviar'
                    clase='boton_form'
                    evento={mostrarAlertaSucces}
                />

            </form>
        </>
    )
}
