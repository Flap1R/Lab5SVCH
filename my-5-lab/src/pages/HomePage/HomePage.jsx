import React, { useEffect, useState } from 'react';
import { Head } from '../../components/Head/Head';
import { Footer } from '../../components/Footer/Footer';
import { Content } from '../../components/Content/Content';
import { HomeBlock } from '../../components/HomeBlock/HomeBlock';
import './HomePage.css';
import { EditPopup } from '../../components/EditPopup/EditPopup';
import { ButtonColor } from '../../components/Button/Button';
import SimpleSnackbar from '../../components/SimpleSnackbar/SimpleSnackbar';
import ActiveLastBreadcrumb from '../../components/ActiveLastBreadcrumb/ActiveLastBreadcrumb';
import { setJsonData } from '../../data/actions';
import jsonData from '../../data/data.json';
import { useDispatch, useSelector } from 'react-redux';

export function HomePage() {  
  const [targetElement, setTargetElement] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const dispatch = useDispatch();
  const localData = useSelector((state) => state.jsonData);

  useEffect(() => {
    dispatch(setJsonData(jsonData));
  }, []);

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
    };

    setTargetElement(targetElement);
    setOpenSnackbar(true);
  }

  return (
    <>
      <Head />
      <Content>
        <ActiveLastBreadcrumb targetPage="Главная"/>
        <div className='homePage__title'>Компании и услуги</div>
        {
           localData.jsonData && localData.jsonData.map(element =>
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