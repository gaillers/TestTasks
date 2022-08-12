import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';

import MainLogo from '../../assets/icons/Logo.svg';

const Logo = () => {
    return (
        <Router>
            <Link to="/">
                <img src={MainLogo} alt="logo" />
            </Link>
        </Router>
    )
}

export default Logo;