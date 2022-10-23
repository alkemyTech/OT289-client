import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import PropTypes from 'prop-types'

//Components
import { alertConfirmation, alertError } from '../alert/Alert'
import ErrorMessage from '../partials/ErrorMessage'

//styles
import styles from './ActivityForm.module.css'

//Axios (REPLACE IT WITH 'HTTP PETITIONS SERVICES' (OT289-32) WHEN AVAILABLE?)
import axios from 'axios'

const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL
const MIN_NAME = 10
const MAX_NAME = 50
const MIN_CONTENT = 50

const ActivityForm = ({ data }) => {
    const action = data?.id ? 'patch' : 'post'
    const currentData = data || {name: '', content: ''}

    //Formik validation schema using Yup
    const activitySchema = Yup.object().shape({
        name: Yup.string().min(MIN_NAME, 'Nombre muy corto').max(MAX_NAME, 'Nombre muy largo').required('Requerido'),
        content: Yup.string().min(MIN_CONTENT, 'Contenido muy corto').required('Requerido')
    })

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
                        const contentData = editor.getData()
                        form.setFieldValue(field.name, contentData)
                    }}
                />
            </div>
        )
    }

    const handleSubmit = async (values, { resetForm }) => {
        const endpointUrl = SERVER_BASE_URL + '/Actividades' + (currentData?.id ? `/${currentData.id}` : '')

        try {
            await axios[action](endpointUrl, values)

            //if it's a new activity, reset form after saving it
            if (action === 'post') {
                resetForm()
            }

            //Show confirmation message
            const alertTitle = `Actividad ${action === 'post' ? 'creada!' : 'actualizada!'}`
            const alertMessage = `La actividad fue ${action === 'post' ? 'creada' : 'actualizada'} correctamente.`
            alertConfirmation(alertTitle, alertMessage)
        } catch (error) {
            //Received error must be a string
            alertError('Ups, hubo un error', error)
        }
    }

    return (
        <Formik
            initialValues={currentData}
            onSubmit={handleSubmit}
            validationSchema={activitySchema}
        >
            {({ errors, touched }) => (
                <Form className={styles.activityForm}>

                    <Field name='name' placeholder='Nombre de la actividad' required />
                    {errors.name && touched.name && <ErrorMessage message={errors.name} />}

                    <Field name='content' component={CustomCKEditorField} />
                    {errors.content && touched.content && <ErrorMessage message={errors.content} />}

                    <Field type='submit' name='submit' value={`${action === 'post' ? 'Crear' : 'Actualizar'} Actividad`} className={styles.button} />

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
