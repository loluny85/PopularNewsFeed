import React from 'react';
import './AvatarComponent.css';

const AvatarComponent = (props) => {
    return (
      <img className='thumbnail-avatar' src={props.imageUrl} alt='thumbnail'/>
    );
}

export default AvatarComponent;
