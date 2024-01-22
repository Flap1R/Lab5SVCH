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
import toast from 'react-hot-toast';

export function ServicesPage() {
  const [data, setData] = useState()
  const [showPopup, setShowPopup] = useState(false);
  const [targetElement, setTargetElement] = useState([]);
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
        area: "default",
        brigade: "default",
        schedule: "default"
      }

      setTargetElement(targetElement);

      await create(targetElement);

      await loadData()
      setShowPopup(true);
    } catch (error) {
      toast.error("Ошибка сервера")
    }
  }

  return (
    <>
      <Head />
      <Content>
        <ActiveLastBreadcrumb targetPage="Услуги" />
        <div className='servicesPage__title'>Услуги</div>

        {data && data.map(element =>
          <ServicesBlock key={element._id} services={element.title} onClick={() => openPopup(element)} />
        )}

        {role !== "USER" && <ButtonColor value="Добавить" handleClick={() => addNewElement()} />}
      </Content>

      <EditPopup open={showPopup} element={targetElement} closePopup={() => closePopup()} />
      <Footer />
    </>
  );
}