import React from 'react';
import {Outlet} from 'react-router-dom';
import NavBar from "../components/NavBar";

export default function Root(props) {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet ></Outlet>
        </div>
    );
}

