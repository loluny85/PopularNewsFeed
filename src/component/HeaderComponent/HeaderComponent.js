import React from 'react';
import './HeaderComponent.css';

const HeaderComponent = (props) => {
    return (
        <header className='header-component'>
            {props.children}
        </header>
    );
}

export default HeaderComponent;
