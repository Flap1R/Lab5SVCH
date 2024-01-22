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
      setHome(props.element.home);
      setServices(props.element.services);
      setObjects(props.element.objects)
    }
  }, [props.element])

  async function saveElement() {
    const newElement = {
      id: props.element.id,
      services: services,
      objects: objects,
      home: home
    };

    await update(newElement);

    closeElement();
  }

  function closeElement() {
    props.closePopup();
  }

   async function deleteOneElement() {
     console.log(props.element.id)
     
     await deleteElement(props.element.id);
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