import React, { useState } from "react"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"

import styles from "./LoginForm.module.css"

const LoginForm = () => {

    const [data, setData] = useState({
        email: '',
        password: ''
    })


    const loginSchema = Yup.object().shape({
        email: Yup.string().required("Debe ingresar un email").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, {message: "El email es invalido"})
            .test('checkEmail', 'Este email no esta registrado', async (value) =>{
                // return postServices.checkEmail({email:value}).emailExist
                return true
            }),
        password: Yup.string().required("Debe ingresar una contraseña").min(6, 'La contraseña es muy corta')
            .test('checkPassword', 'La contraseña es incorrecta', async (value) =>{
                // return postServices.checkPassword({password:value}).passwordCorrect
                return true
            }),
    });

    const ErrorMessage = ({ message }) => {
        return (
            <small className={styles.error}>{message}</small>
        )
    }

    const onSubmit = (values) => {
        setData(values)
    }

    return (
        <>
            <Formik
                initialValues={data}
                onSubmit={onSubmit}
                validationSchema={loginSchema}
            >

                {({ errors, touched }) => (
                    <Form className={styles.loginForm}>

                        <Field type="email" name="email" placeholder="email" required />
                        {errors.email && touched.email && <ErrorMessage message={errors.email} />}

                        <Field name="password" placeholder="contraseña" required />
                        {errors.password && touched.password && <ErrorMessage message={errors.password} />}

                        <Field type="submit" name="submit" value="Entrar" className={styles.button} />

                    </Form>
                )}
                
            </Formik>
        </>
    )
}

export default LoginForm