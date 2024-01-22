import React, { useEffect, useState } from 'react';
import './ObjectsPage.css';
import { Head } from '../../components/Head/Head';
import { Content } from '../../components/Content/Content';
import { Footer } from '../../components/Footer/Footer';
import { ObjectsBlock } from '../../components/ObjectsBlock/ObjectsBlock';
import { EditPopup } from '../../components/EditPopup/EditPopup';
import { ButtonColor } from '../../components/Button/Button';
import ActiveLastBreadcrumb from '../../components/ActiveLastBreadcrumb/ActiveLastBreadcrumb';
import { create, getAll } from '../../api/allApi';

export function ObjectsPage() {
  const [data, setData] = useState();
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

    const data = await create(targetElement);
    console.log(data);
   // setTargetElement(data);

   // await loadData()
   // setShowPopup(true);
  }

  return (
    <>
      <Head />
      <Content>
        <ActiveLastBreadcrumb targetPage="Объекты" />
        <div className='objectsPage__title'>Объекты</div>

        {data && data.map(element =>
          <ObjectsBlock key={element._id} objects={element.title} services={element.title} onClick={() => openPopup(element)} />
        )}

        <ButtonColor value="Добавить" handleClick={() => addNewElement()} />
      </Content>

      <EditPopup open={showPopup} element={targetElement} closePopup={() => closePopup()} />
      <Footer />
    </>
  );
}