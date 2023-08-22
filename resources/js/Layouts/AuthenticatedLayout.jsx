import { Fragment, useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import Sidebar from '@/Components/Sidebar';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Authenticated({ user, header, children }) {
    return (
        <Fragment>
            <div className="page">
                <Sidebar />
                <Header />
                <div className="page-wrapper">
                    {/* Page header */}
                    {header}
                    {/* Page body */}
                    <div className="page-body" style={{minHeight: '70vh'}}>
                        <div className="container-xl">{children}</div>
                    </div>
                    <Footer />
                </div>
            </div>
            <ToastContainer />
        </Fragment>
    );
}
