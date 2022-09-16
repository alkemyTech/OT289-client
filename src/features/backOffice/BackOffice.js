import React from "react"
import SideBar from './partials/SideBar'
import Content from './partials/Content'
import './BackOffice.css'

const BackOffice = () => {

    return (
        <main className="d-flex">
            <SideBar/>
            <Content/>
        </main>
    )
}

export default BackOffice