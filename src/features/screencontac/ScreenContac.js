import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import "./ScreenContac.css";

const FormCont = () => {

  //Formik and yup
  const vDataContac = yup.object().shape({
    name: yup.string().required("Requerido"),
    email: yup.string().email("Formato Email inválido").required("Requerido"),
    message: yup
      .string()
      .min(2)
      .max(250, "250 caracteres permitidos")
      .required("Requerido"),
  });

  return (
    <>
      <h1>¡Contáctate con Nosotros!</h1>
      <div className="formCont">
        <div className="divCenter">
          <div className="with50">
            <h2 className="text">
              Contáctate con nostros por este medio para mas información, para
              ser voluntario o para aportes de colaboración
            </h2>
          </div>

          <div className="with50">
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={vDataContac}
              onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div>
                    <Field
                      className="input"
                      name="name"
                      placeholder="Nombre y  Apellido"
                    />
                    {errors.name && touched.name ? (
                      <div className="requerido">{errors.name}</div>
                    ) : null}
                  </div>
                  <div>
                    <Field className="input" name="email" placeholder="Email" />
                    {errors.email && touched.email ? (
                      <div className="requerido">{errors.email}</div>
                    ) : null}
                  </div>
                  <div>
                    <Field
                      as="textarea"
                      className="textarea"
                      rows="10"
                      cols="50"
                      name="message"
                      placeholder="Escriba su consulta"
                    />
                    {errors.message && touched.message ? (
                      <div className="requerido">{errors.message}</div>
                    ) : null}
                  </div>

                  <Field
                    className="btnAzul"
                    type="submit"
                    name="submit"
                    value="Enviar Consulta"
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormCont;
