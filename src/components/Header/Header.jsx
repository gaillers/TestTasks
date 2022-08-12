import React from 'react';

import Logo from './Logo.jsx';
import Button from '../Buttons.jsx';

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='row'>
                    <div className='header__logo'>
                        <Logo />
                    </div>
                    <div className='header__wrap-btn'>
                        <Button class={'btn-users'} buttonTitle={'User'}/>
                        <Button class={'btn-signUp'} buttonTitle={'Sign up'}/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;