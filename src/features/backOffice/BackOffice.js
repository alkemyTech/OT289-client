import React from "react"
import { Routes, Route } from 'react-router-dom';
import AdminRouteGuard from "./AdminRouteGuard"

import SideBar from './partials/SideBar'
import EditProfilePanel from './partials/EditProfilePanel'
import NewsPanel from './partials/NewsPanel'
import ActivitiesPanel from './partials/ActivitiesPanel'
import CategoriesPanel from './partials/CategoriesPanel'
import TestimonialsPanel from './partials/TestimonialsPanel'
import SlidesPanel from './partials/SlidesPanel'
import UsersPanel from './partials/UsersPanel'
import OrganizationPanel from './partials/OrganizationPanel'
import MembersPanel from './partials/MembersPanel'

import './BackOffice.css'

const BackOffice = () => {

    return (
        <main className="d-flex">
            <SideBar/>
            <Routes>
                <Route path="/editProfile" element={<EditProfilePanel />} />
                <Route element={<AdminRouteGuard />}>
                    <Route path="/news" element={<NewsPanel />} />
                    <Route path="/activities" element={<ActivitiesPanel />} />
                    <Route path="/categories" element={<CategoriesPanel />} />
                    <Route path="/testimonials" element={<TestimonialsPanel />} />
                    <Route path="/slides" element={<SlidesPanel />} />
                    <Route path="/users" element={<UsersPanel />} />
                    <Route path="/organization" element={<OrganizationPanel />} />
                    <Route path="/members" element={<MembersPanel />} />
                </Route>

            </Routes>
        </main>
    )

}

export default BackOffice