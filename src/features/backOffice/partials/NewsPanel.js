import React, {useState} from "react"
import { CaretDown, Image } from 'react-bootstrap-icons';
import Collapse from 'react-bootstrap/Collapse';
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"



let items = [{
    name:"Nombre",
    content:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
    category:1,
    type:1
},{
    name:"Nombre",
    content:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
    category:3,
    type:3
},{
    name:"Nombre",
    content:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
    category:2,
    type:2
},{
    name:"Nombre",
    content:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
    category:3,
    type:3
},{
    name:"Nombre",
    content:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
    category:5,
    type:5
},{
    name:"Nombre",
    content:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
    category:2,
    type:2
},{
    name:"Nombre",
    content:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
    category:1,
    type:1
}]

let categories = [
    {id:1, name:"category 1"},
    {id:2, name:"category 2"},
    {id:3, name:"category 3"},
    {id:4, name:"category 4"},
    {id:5, name:"category 5"},

]

const NewsPanel = ()=> {
    return (
        <div className="w-100">
            <h1 className="panelTitle">Noticias</h1>
            <div>

                {items.map((item, index)=>{
                        return <NewsItem key={index} item={item}/>
                })}

            </div>
        </div>
    );
}

const NewsItem = ({item})=> {

    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false)

    const newsSchema = Yup.object().shape({
       
    });
    
    const ErrorMessage = ({ message }) => {
        return (
            <small className="errorMessage">{message}</small>
        )
    }

    const onSubmit = (values) => {

    }


    return (
        <div className="p-3 m-2 bg-light rounded">
            <Formik
                initialValues={item}
                onSubmit={onSubmit}
                validationSchema={newsSchema}
            >
    
                {({ errors, touched }) => (
                    <Form className="loginForm">

                        <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content-between w-100">
                                <div className="flex-fill">
                                    <Field type="text" name="name"  placeholder="nombre" className="formEdit w-100 text-start" disabled={!edit}/>
                                    {errors.name && touched.name && <ErrorMessage message={errors.name} />}
                                </div>
                                <div>
                                    <Field as="select" name="category" disabled={!edit} className="formEdit">
                                    {categories.map((category, index)=>{
                                        return <option key={index} 
                                            className= "" 
                                            value={category.id} 
                                            selected={category.id ? category.id === item.accountId ? true : false : false}>
                                                {category.name}
                                            </option>
                                    })}
                                    </Field>
                                    {errors.category && touched.category && <ErrorMessage message={errors.category} />}

                                </div>
                            </div>
                            <div className="d-flex">
                                <button  onClick={() => {setEdit(true); setOpen(true)}} >edit</button>
                                <button  onClick={() => {setOpen(!open)}} aria-controls="example-collapse-text" aria-expanded={open}><CaretDown className={`${open ? 'turnArrow' : 'unturnArrow'} `}/></button>
                            </div>
                        </div>

                        <Collapse in={open}>
                            <div id="example-collapse-text">
                                <div className="pt-3">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <div  cursor="pointer" className="">
                                                <label for="image">
                                                    <Image className="h1 m-0"/>
                                                </label>
                                                <Field type="file" name="image" id="image" placeholder="nombre" className="formEdit d-none"  accept="image/png, image/jpg, image/gif, image/jpeg" disabled={!edit} />
                                            </div>
                                        </div>
                                        <div className="col-md-10">            
                                            <Field as="textarea" rows="3" name="content"  placeholder="contraseña" className= "formEdit w-100" disabled={!edit}/>
                                        </div>
                                    </div>

                                    <Field type="submit" name="submit" value="Guardar" className="float-right" onClick={() => {setEdit(false)}} />
                            
                                </div>
                            </div>
                        </Collapse>

                    </Form>
                )}

            </Formik>

        </div>
    );
}


export default NewsPanel