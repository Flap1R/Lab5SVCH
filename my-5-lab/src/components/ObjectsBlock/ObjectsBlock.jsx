import React from 'react';
import './ObjectsBlock.css';

export function ObjectsBlock(props) {
  function handleClick() {
    if (props.onClick) {
      props.onClick();
    }
  }

  return (
    <div className='objectsBlock' onClick={handleClick}>
      <div className='objectsBlock__services'>{props.services}</div>
      <div className='objectsBlock__objects'>{props.objects}</div>
    </div>
  );
}