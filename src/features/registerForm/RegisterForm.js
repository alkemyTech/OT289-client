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
        email: Yup.string().email('Email inválido').required('Requerido')
            // .test('checkEmail', 'Este email no esta registrado', async (email) =>{
            //     return !authService.checkEmail({email}).emailExist                     // codigo para vaildar si existe ese email
            // })
            ,
        password: Yup.string().min(6, 'Contraseña muy corta').required('Requerido')
    })

    const ErrorMessage = ({ message }) => {
        return (
            <small className={styles.error}>{message}</small>
        )
    }

    const onSubmit = async (values) => {
        let response = await authService.register(values)
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
            setRedirect(true)
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

                        <Field name="firstName" placeholder="nombre" required />
                        {errors.firstName && touched.firstName && <ErrorMessage message={errors.firstName} />}

                        <Field name="lastName" placeholder="apellido" required />
                        {errors.lastName && touched.lastName && <ErrorMessage message={errors.lastName} />}

                        <Field type="email" name="email" placeholder="email" required />
                        {errors.email && touched.email && <ErrorMessage message={errors.email} />}

                        <Field name="password" type="password" placeholder="contraseña" required />
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
