import React, { useState } from "react"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"

//styles
import styles from "./RegisterForm.module.css"

const RegisterForm = () => {
    //State
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    //Formik validation schema using Yup
    const SignupSchema = Yup.object().shape({
        firstName: Yup.string().required('Requerido'),
        lastName: Yup.string().required('Requerido'),
        email: Yup.string().email('Email inválido').required('Requerido'),
        password: Yup.string().min(6, 'Contraseña muy corta').required('Requerido')
    })

    const ErrorMessage = ({ message }) => {
        return (
            <small className={styles.error}>{message}</small>
        )
    }

    const onSubmit = (values) => {
        //Saving in state for later use
        console.log(values)
        setData(values)
    }

    return (
        <>
            <Formik
                initialValues={data}
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
        </>
    )
}

export default RegisterForm
