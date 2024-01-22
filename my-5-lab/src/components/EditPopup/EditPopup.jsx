import React, { useEffect, useState } from 'react';
import { PopupWindow } from '../PopupWindow/PopupWindow';
import './EditPopup.css';
import { Input } from '../Input/Input';
import { ButtonsGroup } from '../ButtonsGroup/ButtonsGroup';
import { deleteElement, getAll, update } from '../../api/allApi';
import { element } from 'prop-types'

export function EditPopup(props) {
  const [home, setHome] = useState();
  const [services, setServices] = useState();
  const [objects, setObjects] = useState();

  useEffect(() => {
    if (props.element) {
       setHome(props.element.home ? props.element.home.title : " ");
       setServices(props.element.title || " ");
       setObjects(props.element.objects ? props.element.objects.title : " ");
     }
   }, [props.element]);  

  async function saveElement() {
    if (!props.element || !props.element._id) {
      console.error("Неверный элемент или отсутствует свойство _id");
      return;
    }

    const newElement = {
      _id: props.element._id,
      title: services,
      objects: {
        _id: props.element.objects._id,
        title: objects
      },
      home: {
        _id: props.element.home._id,
        title: home
      }
    };

    await update(newElement);
    closeElement();
  }

  function closeElement() {
    props.closePopup();
  }

   async function deleteOneElement() {
    await deleteElement(props.element._id);
  }

  return (
    <div className='editPopup'>
      <PopupWindow open={props.open}>
        <div className='editPopup__content'>
          <div className='editPopup__content__title'>
            Редактирование:
          </div>

          <div className='editPopup__content__home'>
            {home && <Input title="Главная" value={home} onChange={(value) => setHome(value)} />}
          </div>
        
          <div className='editPopup__content__services'>
            {services && <Input title="Услуги" value={services} onChange={(value) => setServices(value)} />}
          </div>

          <div className='editPopup__content__objects'>
            {objects && <Input title="Объекты" value={objects} onChange={(value) => setObjects(value)} />}
          </div>

          <div className='editPopup__content__buttons'>
          <ButtonsGroup save={saveElement} close={closeElement} delete={deleteOneElement}/>
          </div>
        </div>
      </PopupWindow>
    </div>
  );
}