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
import { create, getAll } from '../../api/allApi.js';
import toast from 'react-hot-toast';

export function HomePage() {  
  const [data, setData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [targetElement, setTargetElement] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [role, setRole] = useState("USER");

  useEffect(() => {
    loadData();
    setRole(localStorage.getItem("role") || "USER");
  }, [])

  async function loadData() {
    try {
      const data = await getAll();
      setData(data);
    } catch (error) {
      toast.error("Ошибка сервера")
    }
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
    try {
      const targetElement = {
        id: 4,
        home: "default",
        services: "default",
        objects: "default"
      }

      const data = await create(targetElement);
      setTargetElement(data.services);

      await loadData()
      setShowPopup(true);
      setOpenSnackbar(true);
    } catch (error) {
      toast.error("Ошибка сервера")
    }
  }

  function createDocument() {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'data.json';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      <Head />
      <Content>
        <ActiveLastBreadcrumb targetPage="Главная" />
        <div className='homePage__title'>Компании и услуги</div>
        {
          data && data.map(element =>
            <HomeBlock key={element._id} home={element.home.title} services=
            {element.title} onClick={() => openPopup(element)} />
          )
        }

          {role !== "USER" && <ButtonColor value="Добавить" handleClick={() => addNewElement()} />}
         <div className='homePage__save__button'>
           <ButtonColor value="Скачать" handleClick={() => createDocument()} />
         </div>
      </Content>

      <EditPopup open={showPopup} element={targetElement} closePopup={() => closePopup()} />
      <SimpleSnackbar open={openSnackbar} setOpen={() => setOpenSnackbar(false)} text="Элемент добавлен" />
      <Footer />
    </>
  );
}