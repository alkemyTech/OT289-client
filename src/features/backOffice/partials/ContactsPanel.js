import React from "react"
import '../BackOffice.css'

const contacts = [
    {
       name: 'Marcos',
       phone: 1183274317,
       email: 'marcos@gmail.com',
       message: 'hola buenos dias venden pan aca?', 
    },{
        name: 'mauricio',
        phone: 1143827350,
        email: 'elmaurisepusounemailargo@gmail.com',
        message: 'que onda'
    },{
        name: 'harry potter',
        phone: 42853820,
        email: 'elsucioharry@gmail.com',
        message: 'expeliermus'
    },{
        name: 'queseyo',
        phone: 1123958427,
        email: 'nosemeocurrenada@gmail.com',
        message: 'nose que poner aca ya pero este lo hago medio largo para ver como queda'
    }
]

const ContactsPanel = () => {
  return (
    <>
    <h1>Contactos a la pagina</h1>
    {contacts.map(contact => {
        return (
            <Contact contact={contact}/>
        )
    })}
    </>
  )
}

const Contact = ({contact}) => {
    
    return(
        <>
        <div className="contact-container">       
            <h6 className='contact-name'>Nombre: <span>{contact.name}</span></h6>
            <h6 className='contact-phone'>Telefono: <span>{contact.phone}</span></h6>
            <h6 className='contact-email'>Email: <span>{contact.email}</span></h6>
            <h6 className='contact-message'>Mensaje: <span>{contact.message}</span></h6>
        </div>
        </>
    )
}

export default ContactsPanel