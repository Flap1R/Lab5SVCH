import React from 'react';
import './Content.css';

export function Content(props) {
  return (
    <div className='content'>
      {
        props.children
      }
    </div>
  );
}   