import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import { ToastContainer, toast } from "react-toastify"
import authService from '../apiServices/authService'


//styles
import styles from "./RegisterForm.module.css"

const RegisterForm = () => {

  const [redirect, setRedirect] = useState(false)

    //Formik validation schema using Yup
    const SignupSchema = Yup.object().shape({
        firstName: Yup.string().required('Requerido'),
        lastName: Yup.string().required('Requerido'),
        email: Yup.string().required('Requerido').email('Email inválido')
            .test('checkEmail', 'Este email ya esta registrado', async (value) =>{
                let email = value ? value : ''
                let response = await authService.checkEmail({email})
                if(response.status === 200){
                    return !response.data.emailExist                // codigo para vaildar si existe ese email
                }
                return true
            }),
        password: Yup.string().required('Requerido').min(6, 'Contraseña muy corta')
    })

    const ErrorMessage = ({ message }) => {
        return (
            <small className={styles.error}>{message}</small>
        )
    }

    const onSubmit = async (values) => {
        try {
            let res = await authService.register(values)
            if(res.status === 200){
                setRedirect(true)
            }
        } catch (err) {
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
    }


    return (
        <>
            <Formik
                initialValues={{firstName: '', lastName: '', email: '', password: ''}}
                onSubmit={onSubmit}
                validationSchema={SignupSchema}
            >                
                {({ errors, touched }) => (
                    <Form className={styles.registerForm}>

                        <Field name="firstName" placeholder="nombre"/>
                        {errors.firstName && touched.firstName && <ErrorMessage message={errors.firstName} />}

                        <Field name="lastName" placeholder="apellido"/>
                        {errors.lastName && touched.lastName && <ErrorMessage message={errors.lastName} />}

                        <Field type="email" name="email" placeholder="email"/>
                        {errors.email && touched.email && <ErrorMessage message={errors.email} />}

                        <Field name="password" type="password" placeholder="contraseña"/>
                        {errors.password && touched.password && <ErrorMessage message={errors.password} />}

                        <Field type="submit" name="submit" value="Crear cuenta" className={styles.button} />
                        
                    </Form>
                )}
            </Formik>
            <ToastContainer/>
            {redirect && ( <Navigate to="/login" replace={true} />)}
        </>
    )
}

export default RegisterForm
