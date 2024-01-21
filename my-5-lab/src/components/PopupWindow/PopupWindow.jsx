import React from 'react';
import './PopupWindow.css';

export function PopupWindow(props) {
  return (
    <>
      {
        props.open && <div className='popupWindow__overlay'>
          <div className='popupWindow'>
            {props.children}
          </div>
        </div>
      }
    </>
  );
}