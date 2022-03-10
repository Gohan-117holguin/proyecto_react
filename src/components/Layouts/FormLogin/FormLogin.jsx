import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Label } from '../../UI/Label/Label'
import { Input } from '../../UI/Input/Input'
// import { BotonForms } from '../../UI/BotonForms/BotonForms'

export const FormLogin = () => {

    const [state, setState] = useState({
        form: {
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
        title: 'Credenciales correctos',
        text: 'Bienvenido de nuevo',
        })
    }

    const mostrarAlertaError = () => {
        Swal.fire({
            icon:'error',
            title:'Error Al conectar con El API',
            text:'La API no se encuentra'
        })
    }

    const mostrarAlertaWarning = () => {
        Swal.fire({
        icon: 'warning',
        title: 'Credenciales incorrectas',
        text: 'Las credenciales ingresadas son incorrectas',
        })
    }

    const manejarCambios = async (evnt) => {
        await setState({
            form: {
                ...state.form,
                [evnt.target.name]: evnt.target.value
            }
        })
    }

    const controlarBoton = () => {
        let url = 'https://backend-edw.herokuapp.com/login'
        axios.post(url, state.form)
        .then(response => {
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
                <Label para='email' clase='label' contenido='Correo' />
                <Input
                    type='text'
                    name='username'
                    clase='input_form'
                    place='Ingrese su Email'
                    auto='off'
                    evento={manejarCambios}
                />

                <Label para='password' clase='label' contenido='Contraseña' />
                <Input
                    type='password'
                    name='password'
                    clase='input_form'
                    place='Ingrese su Contraseña'
                    evento={manejarCambios}
                />

                <Input
                    type='submit'
                    value='Iniciar sesion'
                    clase='boton_form'
                    eventoOnClick={controlarBoton}
                />

                {state.error === true &&
                    <div className='alerta'>
                        <p>{state.errorMsg}</p>
                    </div>
                }
            </form>
        </>
    )
}
