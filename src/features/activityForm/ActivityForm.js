import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import PropTypes from 'prop-types'

//styles
import styles from './ActivityForm.module.css'

const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL
const MIN_NAME = 10
const MAX_NAME = 50
const MIN_CONTENT = 50

const ActivityForm = ({ data }) => {
    const [action] = useState(data ? 'PATCH' : 'POST')

    //Formik validation schema using Yup
    const activitySchema = Yup.object().shape({
        name: Yup.string().min(MIN_NAME, 'Nombre muy corto').max(MAX_NAME, 'Nombre muy largo').required('Requerido'),
        content: Yup.string().min(MIN_CONTENT, 'Contenido muy corto').required('Requerido')
    })

    const ErrorMessage = ({ message }) => {
        return (
            <small className={styles.error}>{message}</small>
        )
    }

    //CKEditor5
    const CustomCKEditorField = ({ field, form }) => {
        return (
            <div className={styles.ckEditor}>
                <CKEditor
                    config={{placeholder: 'Escribe el contenido aquí...'}}
                    name={field.name}
                    editor={ ClassicEditor }
                    data={field.value}
                    onChange={( event, editor ) => {
                        const data = editor.getData()
                        form.setFieldValue(field.name, data)
                    }}
                />
            </div>
        )
    }

    const handleSubmit = async (values) => {
        const endpointUrl = SERVER_BASE_URL + '/Actividades' + (data?.id ? `/${data.id}` : '')
        //Update here with axios calls when endpoint for activities is implement
        //Send data based on 'action' state: POST or PATCH
        //If data is received, it MUST have the id
        console.log(values, action, endpointUrl)
    }

    return (
        <Formik
            initialValues={data || {name: '', content: ''}}
            onSubmit={handleSubmit}
            validationSchema={activitySchema}
        >
            {({ errors, touched }) => (
                <Form className={styles.activityForm}>

                    <Field name='name' placeholder='Nombre de la actividad' required />
                    {errors.name && touched.name && <ErrorMessage message={errors.name} />}

                    <Field name='content' component={CustomCKEditorField} />
                    {errors.content && touched.content && <ErrorMessage message={errors.content} />}

                    <Field type='submit' name='submit' value='Guardar Actividad' className={styles.button} />
                    
                </Form>
            )}
        </Formik>
    )
}

ActivityForm.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    })
}

export default ActivityForm
