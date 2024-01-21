import React from 'react';
import './ServicesBlock.css';

export function ServicesBlock(props) {
  function handleClick() {
    if (props.onClick) {
      props.onClick();
    }
  }

  return (
    <div className='servicesBlock' onClick={handleClick}>
      <div className='servicesBlock__services'>{props.services}</div>
    </div>
  );
}