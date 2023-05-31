import React from 'react';
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <div>
            <nav>
                <Link to='/'>HOME</Link>
                <Link to='/videos'>VIDEO</Link>
            </nav>
        </div>
    );
}

export default NavBar;