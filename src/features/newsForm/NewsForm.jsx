import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PropTypes from "prop-types";

//Alerts
import { alertConfirmation, alertError } from "../alert/Alert";

//styles 
import s from './NewsForm.module.css'

const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
const MAX_NAME = 50;
const MIN_CONTENT = 20;

//Formik validation schema using Yup
const activitySchema = Yup.object().shape({
  name: Yup
    .string()
    .max(MAX_NAME, "Nombre muy largo")
    .required("Requerido"),
  content: Yup
    .string()
    .min(MIN_CONTENT, "Contenido muy corto")
    .required("Requerido"),
  image: Yup
    .string()
    .url('El formato de URL no es valido')
    .required("Requerido"),
  categoryId: Yup
    .string()
    .required("Requerido"),
});

const ErrorMessage = ({ message }) => {
  return <small className={s.error}>{message}</small>;
};

const CustomCKEditorField = ({ field, form }) => {
  return (
    <div className={s.ckEditor}>
      <CKEditor
        config={{ placeholder: "Escribe el contenido aquí..." }}
        name={field.name}
        editor={ClassicEditor}
        data={field.value}
        onChange={(event, editor) => {
          const contentData = editor.getData();
          form.setFieldValue(field.name, contentData);
        }}
      />
    </div>
  );
};


const NewsForm = ({ data }) => {
  const currentData = ( data || { name: "", content: "", image: "", categoryId: "" } );
  const action = data?.id ? "put" : "post";
 
  const handleSubmit = async (values, { resetForm }) => {
    const endpointUrl = SERVER_BASE_URL + "/news" + (currentData?.id ? `/${currentData.id}` : "");

    try {
      const categoryIdAux = values.categoryId;
      values.categoryId = 1;
      await axios[action](endpointUrl, values);
      values.categoryId = categoryIdAux

      //if it's a new activity, reset form after saving it
      if (action === "post") {
        resetForm();
      }

      //Show confirmation message
      const alertTitle = `Novedad ${action === "post" ? "creada!" : "actualizada!"}`;
      const alertMessage = `La novedad fue ${action === "post" ? "creada" : "actualizada"} correctamente.`;
      alertConfirmation(alertTitle, alertMessage);
    } catch (error) {
      //Received error must be a string
      alertError("Ups, hubo un error", error);
    }
  };

  return (
    <Formik
      initialValues={currentData}
      onSubmit={handleSubmit}
      validationSchema={activitySchema}
    >
      {({ errors, touched }) => (
        <Form className={s.activityForm}>
          <Field name="name" placeholder="Nombre de la novedad" required />
          {errors.name && touched.name && (<ErrorMessage message={errors.name} />)}

          <Field name="image" placeholder="URL de la imagen de la novedad" required />
          {errors.image && touched.image && (<ErrorMessage message={errors.image} />)}

          <Field name="categoryId" placeholder="Categoria" required />
          {errors.type && touched.type && (<ErrorMessage message={errors.type} />)}

          <Field name="content" component={CustomCKEditorField} />
          {errors.content && touched.content && (<ErrorMessage message={errors.content} />)}

          <Field
            type="submit"
            name="submit"
            value={`${action === "post" ? "Crear" : "Actualizar"} Novedad`}
            className={s.button}
          />
        </Form>
      )}
    </Formik>
  );
};

NewsForm.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    categoryId: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};

export default NewsForm;
