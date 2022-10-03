import React from "react"
import { Routes, Route } from 'react-router-dom';

import SideBar from './partials/SideBar'
import NewsPanel from './partials/NewsPanel'

import './BackOffice.css'

const BackOffice = () => {

    return (
        <main className="d-flex">
            <SideBar/>
            <Routes>
                <Route path="/news" element={<NewsPanel />} />
            </Routes>
        </main>
    )

}

export default BackOffice