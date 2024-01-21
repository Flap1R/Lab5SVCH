import React, { useEffect, useState } from 'react';
import { Head } from '../../components/Head/Head';
import { Footer } from '../../components/Footer/Footer';
import { Content } from '../../components/Content/Content';
import jsonData from '../../data/data.json';
import { HomeBlock } from '../../components/HomeBlock/HomeBlock';
import './HomePage.css';
import { EditPopup } from '../../components/EditPopup/EditPopup';
import { ButtonColor } from '../../components/Button/Button';
import SimpleSnackbar from '../../components/SimpleSnackbar/SimpleSnackbar';
import ActiveLastBreadcrumb from '../../components/ActiveLastBreadcrumb/ActiveLastBreadcrumb';

export function HomePage() {
  const [data, setData] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [targetElement, setTargetElement] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    loadData();
  }, [])

  async function loadData() {
    setData(jsonData);
  }

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

    data.push(targetElement);
    console.log(data);
    setShowPopup(true);
    setOpenSnackbar(true);
  }

  return (
    <>
      <Head />
      <Content>
        <ActiveLastBreadcrumb targetPage="Главная"/>
        <div className='homePage__title'>Компании и услуги</div>
        {
          data && data.map(element =>
            <HomeBlock key={element.id} element={element} onClick={() => openPopup(element)} />
          )
        }

        <ButtonColor value="Добавить" handleClick={() => addNewElement()}/>
      </Content>

      <EditPopup open={showPopup} element={targetElement} closePopup={() => closePopup()}/>
      <SimpleSnackbar open={openSnackbar} setOpen={() => setOpenSnackbar(false)} text="Элемент добавлен"/>
      <Footer />
    </>
  );
}