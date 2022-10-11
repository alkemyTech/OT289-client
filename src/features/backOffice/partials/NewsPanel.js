import React, { useState, useEffect } from "react"
import { CaretDown, Image } from 'react-bootstrap-icons';
import Collapse from 'react-bootstrap/Collapse';
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import publicService from "../../../services/publicService"
import { InputGroup } from "react-bootstrap";

let categories = [
    { id: 1, name: "category 1" },
    { id: 2, name: "category 2" },
    { id: 3, name: "category 3" },
    { id: 4, name: "category 4" },
    { id: 5, name: "category 5" },

]

const NewsPanel = () => {

    const [news, setNews] = useState([])

    const getNews = async () => {
        let response = await publicService.newsList()
        setNews(response.data)
    }

    useEffect(() => {
        getNews()
    }, [])

    const newItem = {
        name: '',
        content: '',
        category: 1,
    }

    return (
        <div className="w-100">
            <h1 className="panelTitle">Noticias</h1>
            <div>
                <h2>Crear noticia</h2>
                <NewsItem item={newItem} />
                <br></br>
                <h2>Modificar noticias</h2>
                {news.map((item, index) => {
                    return <NewsItem key={index} item={item} />
                })}

            </div>
        </div>
    );
}

const NewsItem = ({ item }) => {

    const id = item.id
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);

    const newsSchema = Yup.object().shape({

    });

    const ErrorMessage = ({ message }) => {
        return (
            <small className="errorMessage">{message}</small>
        )
    }

    const onSubmit = (values) => {
        console.log('aca iria el cambio')
    }

    const handleDelete = (values) => {
        console.log(`click en delete ${id}`)
        fetch(`http://localhost:3001/news/${id}`, {
            method: "DELETE"
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Hubo un problema en el borrado")
                } else {
                    console.log(`Se borró el item ${id} satisfactoriamente`)
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="p-3 m-2 bg-light rounded">
            <Formik
                initialValues={item}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={onSubmit}
                validationSchema={newsSchema}
            >

                {({ errors, touched }) => (
                    <Form className="loginForm">

                        <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content-between w-100">
                                <div className="flex-fill">
                                    <Field type="text" name="name" placeholder="Nombre" className="formEdit w-100 text-start" disabled={!edit} />
                                    {errors.name && touched.name && <ErrorMessage message={errors.name} />}
                                </div>
                                <div>
                                    <Field as="select" name="category" disabled={!edit} className="formEdit">
                                        {categories.map((category, index) => {
                                            return <option key={index}
                                                value={category.id}
                                                selected={category.id ? category.id === item.categoryId ? true : false : false}>
                                                {category.name}
                                            </option>
                                        })}
                                    </Field>
                                    {errors.category && touched.category && <ErrorMessage message={errors.category} />}

                                </div>
                            </div>
                            <div className="d-flex">
                                <button onClick={() => { setEdit(true); setOpen(true) }} >edit</button>
                                <button onClick={() => { setOpen(!open) }} aria-controls="example-collapse-text" aria-expanded={open}><CaretDown className={`${open ? 'turnArrow' : 'unturnArrow'} `} /></button>
                            </div>
                        </div>

                        <Collapse in={open}>
                            <div id="example-collapse-text">
                                <div className="pt-3">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <div cursor="pointer" className="">
                                                <label for="image">
                                                    <Image className="h1 m-0" />
                                                </label>
                                                <input type="file" name="image" id="image" placeholder="Imagen" className="formEdit d-none" accept="image/png, image/jpg, image/gif, image/jpeg" disabled={!edit} ></input>
                                            </div>
                                        </div>
                                        <div className="col-md-10">
                                            <Field as="textarea" rows="3" name="content" placeholder="contenido" className="formEdit w-100" disabled={!edit} />
                                        </div>
                                    </div>

                                    <Field type="submit" name="submit" value="Guardar" className="float-right" onClick={() => { setEdit(false) }} />
                                    {item.name == '' ? null : <Field type="button" name="delete" value="Eliminar" className="float-right" onClick={handleDelete} />}

                                </div>
                            </div>
                        </Collapse>

                    </Form>
                )}

            </Formik>

        </div>
    );
}

NewsItem.defaultProps = { defaultNews: [] }

export default NewsPanel