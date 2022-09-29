import React, { useState } from "react"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import { useDispatch } from 'react-redux'
import { login } from '../user/userSlice'

import "./LoginForm.css"

const LoginForm = () => {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const dispatch = useDispatch()


    const loginSchema = Yup.object().shape({
        email: Yup.string().required("Debe ingresar un email").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, {message: "El email es invalido"})
            // .test('checkEmail', 'Este email no esta registrado', async (value) =>{
            //     return postServices.checkEmail({email:value}).emailExist                     // codigo para vaildar si existe ese email
            // })
            ,
        password: Yup.string().required("Debe ingresar una contraseña").min(6, 'La contraseña es muy corta')
            // .test('checkPassword', 'La contraseña es incorrecta', async (password, {parent:{email}}) =>{
            //     return postServices.checkPassword({ email , password }).passwordCorrect      // codigo para vaildar si coinciden usuario y contraseña
            // })
            ,
    });

    const ErrorMessage = ({ message }) => {
        return (
            <small className="errorMessage">{message}</small>
        )
    }

    const onSubmit = (values) => {
        const token = '' // aca va a ir el valor del token cuando este arreglado la funcion de login y te devuelta uno
        setData(values)
        dispatch(login(token)) // esto pasa el token al action de login de redux y lo ejecuta
    }

    return (
        <>
            <Formik
                initialValues={data}
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
        </>
    )
}

export default LoginForm