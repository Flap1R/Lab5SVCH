import React, { useEffect, useState } from 'react';
import { PopupWindow } from '../PopupWindow/PopupWindow';
import './EditPopup.css';
import { Input } from '../Input/Input';

import jsonData from '../../data/data.json';
import { ButtonsGroup } from '../ButtonsGroup/ButtonsGroup';

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

    const data = await jsonData.filter(element => element.id !== props.element.id);
    data.push(newElement);
    console.log(data);
    closeElement();
  }

  function closeElement() {
    props.closePopup();
  }

  async function deleteElement() {
    const data = await jsonData.filter(element => element.id !== props.element.id);
    console.log(data);
    closeElement();
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
            <ButtonsGroup save={saveElement} close={closeElement} delete={deleteElement}/>
          </div>
        </div>
      </PopupWindow>
    </div>
  );
}