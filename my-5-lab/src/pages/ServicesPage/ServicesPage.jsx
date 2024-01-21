import React, { useEffect, useState } from 'react';
import { Head } from '../../components/Head/Head';
import { Content } from '../../components/Content/Content';
import { Footer } from '../../components/Footer/Footer';
import './ServicesPage.css';
import jsonData from '../../data/data.json';
import { ServicesBlock } from '../../components/ServicesBlock/ServicesBlock';
import { ButtonColor } from '../../components/Button/Button';
import { EditPopup } from '../../components/EditPopup/EditPopup';
import ActiveLastBreadcrumb from '../../components/ActiveLastBreadcrumb/ActiveLastBreadcrumb';
import { setJsonData } from '../../data/actions';
import { useSelector, useDispatch } from 'react-redux';

export function ServicesPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [targetElement, setTargetElement] = useState([]);

  const dispatch = useDispatch();
   const data = useSelector((state) => state.jsonData);

   useEffect(() => {
     dispatch(setJsonData(jsonData));
   }, [dispatch]);

  function openPopup(element) {
    setTargetElement(element);
    setShowPopup(true);
  }

  function closePopup() {
    setShowPopup(false);
  }

  function addNewElement() {
    const targetElement = {
      id: 4,
      home: "default",
      services: "default",
      objects: "default"
    }

    setTargetElement(targetElement);
    setShowPopup(true);
  }

  return (
    <>
      <Head />
      <Content>
        <ActiveLastBreadcrumb targetPage="Услуги" />
        <div className='servicesPage__title'>Услуги</div>

        {data.jsonData && data.jsonData.map(element =>
          <ServicesBlock key={element.id} services={element.services} onClick={() => openPopup(element)} />
        )}

        <ButtonColor value="Добавить" handleClick={() => addNewElement()} />
      </Content>

      <EditPopup open={showPopup} element={targetElement} closePopup={() => closePopup()} />
      <Footer />
    </>
  );
}