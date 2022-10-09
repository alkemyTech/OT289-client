import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import "./ScreenContac.css";

const members = [
  {
    id: 1,
    name: 'Maria Irola',
    job: 'Economista para desarrollo',
    description:'Presidenta María estudió economía y se especializó en economía para el desarrollo. Comenzó como voluntaria en la fundación y fue quien promovió el crecimiento y la organización de la institución acompañando la transformación de un simple comedor barrial al centro comunitario de atención integral que es hoy en día', 
  },
  {
    id: 2,
    name: 'Marita Gomez',
    job: 'Nutricionista infantil',
    description:'Fundadora Marita estudió la carrera de nutrición y se especializó en nutrición infantil. Toda la vida fue voluntaria en distintos espacios en el barrio hasta que decidió abrir un comedor propio. Comenzó trabajando con 5 familias y culminó su trabajo transformando Somos Más en la organización que es hoy.', 
  }, 
  { 
    id: 3,
    name: 'Miriam Rodriguez',
    job: 'Terapista ocupacional',
    description: null
  },
  { 
    id: 4,
    name: 'Cecilia Mendez',
    job: 'Psicopedagoga',
    description: null
  },
  { 
    id: 5,
    name: 'Mario Fuentes',
    job: 'Psicologo',
    description: null
  },
  { 
    id: 6,
    name: 'Rodrigo Fuente',
    job: 'Contador',
    description: null
  },
  { 
    id: 7,
    name: 'Maria Garcia',
    job: 'Profesora de Artes Dramaticas',
    description: null
  },
  { 
    id: 8,
    name: 'Marco Fernandez',
    job: 'Profesor de Educacion Fisica',
    description: null
  }
]

const FormCont = () => {
  const [data] = useState({
    name: "",
    email: "",
    message: "",
  });

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
      <h2>Miembros fundadores</h2>
      <Members />                
    </>
  );
};

const Members = () => {
  return (
    <>
      <div className='founders-div'>
        {members.map((member, index) => index < 2 ? <FounderMembers name={member.name} job={member.job} description={member.description} /> : null)}
      </div>
      <h3>Otros Miembros</h3>
      <div className='members-grid'>
        {members.map((member, index) => index > 2 ? <OtherMembers name={member.name} job={member.job} /> : null)}
      </div>
    </>
  )
}

const FounderMembers = ({ name, job, description }) => {
  return(
    <>
    <div className='founders-card'>
      <h4 className='member-name'>
        {name}
      </h4>
      <h6 className='member-job'>
        {job}
      </h6>
      <h6>
        {description}
        </h6>
    </div>
    </>
  )
}

const OtherMembers = ({name, job}) => {
  return(
    <>
      <div className='members-card'>
        <h5 className='member-name'>
          {name}
        </h5>
        <h6 className='member-job'>
          {job}
        </h6>
      </div>
    </>
  )
}

export default FormCont;
