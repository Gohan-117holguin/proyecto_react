import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Label } from '../../UI/Label/Label'
import { Input } from '../../UI/Input/Input'
// import { BotonForms } from '../../UI/BotonForms/BotonForms'

export const FormRegister = () => {

    const [state, setState] = useState({
        form: {
            'name': '',
            'username': '',
            'password': '',
        },
        error: false,
        errorMsg: '',
    })

    const enviarDatos = (evnt) => {
        evnt.preventDefault()
    }

    const mostrarAlertaSucces = () => {
        Swal.fire({
            icon: 'success',
            title: 'Usuario Registrado',
            text: 'El usuario fue registrado exitosamente',
        })
    }

    const mostrarAlertaError = () => {
        Swal.fire({
            icon: 'error',
            title: 'Error Al conectar con El API',
            text: 'La API no se encuentra',
        })
    }

    const mostrarAlertaWarning = () => {
        Swal.fire({
            icon: 'warning',
            title: 'Credenciales Existentes',
            text: 'Las credenciales ingresadas ya existen',
        })
    }

    const manejarCambios = async (evnt) => {
        await setState({
            form: {
                ...state.form,
                [evnt.target.name]: evnt.target.value,
            },
        })
    }

    const controlarBoton = () => {
        let url = 'https://backend-edw.herokuapp.com/usuario'
        axios.post(url, state.form)
        .then((response) => {
            console.log(response)
            if (response.data.status === 'ok') {
                mostrarAlertaSucces()
            } else {
                setState({
                    error: true,
                    errorMsg: response.data.Message,
            })
            mostrarAlertaWarning()
            }
        })
        .catch((error) => {
            console.log(error)
            mostrarAlertaError()
        })
    }

    return (
        <>
            <form className='form' onSubmit={enviarDatos}>
                <Label para='nombre' clase='label' contenido='Nombre' />
                <Input
                    type='text'
                    name='name'
                    clase='input_form'
                    place='Nombre'
                    auto='off'
                    evento={manejarCambios}
                />

                <Label para='email' clase='label' contenido='Correo' />
                <Input
                    type='email'
                    name='username'
                    clase='input_form'
                    place='Correo'
                    auto='off'
                    evento={manejarCambios}
                />

                <Label para='contraseña' clase='label' contenido='Contraseña' />
                <Input
                    type='password'
                    name='password'
                    clase='input_form'
                    place='Contraseña'
                    evento={manejarCambios}
                />

                <Input
                    type='submit'
                    value='Registrarse'
                    clase='boton_form'
                    eventoOnClick={controlarBoton}
                />
            </form>
        </>
    )
}
