import React from 'react';
import './LoaderComponent.css';

const LoaderComponent = (props) => {
    return (
        <div className='loader-container'>
            <i className="fas fa-spinner fa-spin loader"></i>
        </div>
    );
}

export default LoaderComponent;
