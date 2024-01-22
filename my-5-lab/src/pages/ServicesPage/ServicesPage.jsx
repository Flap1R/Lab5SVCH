import React, { useEffect, useState } from 'react';
import { Head } from '../../components/Head/Head';
import { Content } from '../../components/Content/Content';
import { Footer } from '../../components/Footer/Footer';
import './ServicesPage.css';
import { ServicesBlock } from '../../components/ServicesBlock/ServicesBlock';
import { ButtonColor } from '../../components/Button/Button';
import { EditPopup } from '../../components/EditPopup/EditPopup';
import ActiveLastBreadcrumb from '../../components/ActiveLastBreadcrumb/ActiveLastBreadcrumb';
import { create, getAll } from '../../api/allApi.js';

export function ServicesPage() {
  const [data, setData] = useState()
  const [showPopup, setShowPopup] = useState(false);
  const [targetElement, setTargetElement] = useState([]);

   useEffect(() => {
    loadData();
  }, [])

  async function loadData() {
    const data = await getAll();
    setData(data);
  }

  function openPopup(element) {
    setTargetElement(element);
    setShowPopup(true);
  }

  async function closePopup() {
    setShowPopup(false);
    await loadData();
  }

  async function addNewElement() {
    const targetElement = {
      id: 4,
      home: "default",
      services: "default",
      objects: "default"
    }

    setTargetElement(targetElement);

    await create(targetElement);

    await loadData()
    setShowPopup(true);
  }

  return (
    <>
      <Head />
      <Content>
        <ActiveLastBreadcrumb targetPage="Услуги" />
        <div className='servicesPage__title'>Услуги</div>

        {data && data.map(element =>
          <ServicesBlock key={element.id} services={element.services} onClick={() => openPopup(element)} />
        )}

        <ButtonColor value="Добавить" handleClick={() => addNewElement()} />
      </Content>

      <EditPopup open={showPopup} element={targetElement} closePopup={() => closePopup()} />
      <Footer />
    </>
  );
}