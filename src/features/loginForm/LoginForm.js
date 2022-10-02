import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import { useDispatch } from 'react-redux'
import { login } from '../user/userSlice'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import authService from '../apiServices/authService'

import "./LoginForm.css"

const LoginForm = () => {

  const [redirect, setRedirect] = useState(false)

    /*const loginSchema = Yup.object().shape({
            email: Yup.string().required("Debe ingresar un email").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, {message: "El email es invalido"})
            .test('checkEmail', 'Este email no esta registrado', async (value) =>{
                let email = value ? value : ''
                let response = await authService.checkEmail({email})
                if(response.status === 200){
                    return response.data.emailExist                 // codigo para vaildar si existe ese email
                }
                return true
            }),
            password: Yup.string().required("Debe ingresar una contraseña").min(6, 'La contraseña es muy corta')
                .test('checkPassword', 'El email o contraseña no coinciden', async (password, {parent:{email}}) =>{
                    let emailValue = email ? email : ''
                    let passwordValue = password ? password : ''
                    let response = await authService.checkPassword({email: emailValue, password:passwordValue})
                    if(response.status === 200){
                        return response.data.passwordCorrect        // codigo para vaildar si coinciden email y contraseña
                    }
                    return true
                }),
    });*/ // Hace un fetch cada vez que tocas una tecla y el tema de que las validaciones las hace el controlador de login tipo seria 3 fetch para loguearte aparte que se tendrian que crear los controladores

    const ErrorMessage = ({ message }) => {
        return (
            <small className="errorMessage">{message}</small>
        )
    }

    const onSubmit = async (values) => {
        try {
            let res = await authService.login(values)
            console.log(res.data)
            if(res.data.token){
                const token = res.data.token
                localStorage.setItem('token', JSON.stringify(token));
                dispatch(login(token)) 
                setRedirect(true)
            }
        } catch (err) {
            if(err.response.data.errors){
                err.response.data.errors.forEach(error =>{
                    toast.error( error.msg , {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                })
            }
            console.log(err.response)
        }
    }

    function validationSchema() {
        return {
            email: Yup.string().email('Tiene que ser un email valido').required('El email es requerido'),
            password: Yup.string().required('Se requiere un email')
        }
    }

    return (
        <>
            <Formik
                initialValues={{email: '', password: ''}}
                validateOnChange= {false}
                validateOnBlur= {false}
                onSubmit={onSubmit}
                validationSchema={Yup.object(validationSchema())}
            >
                {({ errors, touched }) => (
                    <Form className="loginForm">

                        <Field type="email" name="email" placeholder="email"/>
                        {errors.email && touched.email && <ErrorMessage message={errors.email} />}

                        <Field type="password" name="password" placeholder="contraseña"/>
                        {errors.password && touched.password && <ErrorMessage message={errors.password} />}

                        <Field type="submit" name="submit" value="Entrar" className="loginButton" />

                    </Form>
                )}
            </Formik>
            <ToastContainer/>
            {redirect && ( <Navigate to="/" replace={true} />)}
        </>
    )
}

export default LoginForm