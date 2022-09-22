import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import { ToastContainer, toast } from "react-toastify"
import authService from '../apiServices/authService'

import "./LoginForm.css"

const LoginForm = () => {

  const [redirect, setRedirect] = useState(false)

    const loginSchema = Yup.object().shape({
        email: Yup.string().required("Debe ingresar un email").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, {message: "El email es invalido"})
            // .test('checkEmail', 'Este email no esta registrado', async (email) =>{
            //     return authService.checkEmail({email}).emailExist                     // codigo para vaildar si existe ese email
            // })
            ,
        password: Yup.string().required("Debe ingresar una contraseña").min(6, 'La contraseña es muy corta')
            // .test('checkPassword', 'La contraseña es incorrecta', async (password, {parent:{email}}) =>{
            //     return authService.checkPassword({ email , password }).passwordCorrect      // codigo para vaildar si coinciden usuario y contraseña
            // })
            ,
    });

    const ErrorMessage = ({ message }) => {
        return (
            <small className="errorMessage">{message}</small>
        )
    }

    const onSubmit = async (values) => {
        let response = await authService.login(values)
        if (response.status !== 200){
            toast.error( '⛔  ' + response.meta.error.msg , {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else{
            if(response.data.token){
                localStorage.setItem('token', JSON.stringify(response.data.token));
                setRedirect(true)
            }
        }
    }

    return (
        <>
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={onSubmit}
                validationSchema={loginSchema}
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