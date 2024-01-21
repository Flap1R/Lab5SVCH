import React from 'react';
import './Footer.css';

export function Footer() {
  return (
    <div className='footer'>
      <div className='footer__information'>
        Данный веб-сайт разработан для управления учёта деятельности нотариальной конторы.
      </div>
      
      <div className='footer__contacts'>
        <div>Email: notarycompany@gmail.com</div>
        <div>Телефон: +375 33 444 55 66</div>
      </div>
    </div>
  );
}