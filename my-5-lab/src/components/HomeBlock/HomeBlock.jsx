import React from 'react';
import './HomeBlock.css';

export function HomeBlock(props) {
  function handleClick() {
    if (props.onClick) {
      props.onClick();
    }
  }

  return (
    <div className='homeBlock' onClick={handleClick}>
      <div className='homeBlock__home'>{props.home}</div>
      <div className='homeBlock__services'>{props.services}</div>
    </div>
  );
}