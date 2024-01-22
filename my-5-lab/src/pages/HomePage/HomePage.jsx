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
import 'blob-polyfill';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf'

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

  function createDocumentExcel() {
    const transformedData = data.map(element => ({
      services: element.title,
      home: element.home.title,
      objects: element.objects.title,
    }));

    const ws = XLSX.utils.json_to_sheet(transformedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'data.xlsx');
  }

  function createDocumentWord() {
    const transformedData = data.map(element => ({
      services: element.title,
      home: element.home.title,
      objects: element.objects.title,
    }));

    const tableRows = transformedData.map(row => [
      row.services,
      row.home,
      row.objects,
    ]);

    const table = [
      ['Services', 'Home', 'Objects'],
      ...tableRows,
    ];

    const blob = new Blob([table.map(row => row.join('\t')).join('\n')], {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'document.docx';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success('Документ успешно создан');
  }

  function createDocumentPDF() {
    const doc = new jsPDF();
    doc.text('Services  |  Home  |  Objects', 20, 10);

    if (data && data.length > 0) {
      data.forEach((element, index) => {
        const row = `${element.title}  |  ${element.home.title}  |  ${element.objects.title}`;
        doc.text(row, 20, 10 + (index + 1) * 10);
      });
    }

    doc.save('document.pdf');
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
         <div className='areaPage__save__button'>
           <ButtonColor value="Скачать Excel" handleClick={() => createDocumentExcel()} />
         </div>
         <div className='areaPage__save__button'>
           <ButtonColor value="Скачать Word" handleClick={() => createDocumentWord()} />
         </div>
         <div className='areaPage__save__button'>
           <ButtonColor value="Скачать PDF" handleClick={() => createDocumentPDF()} />
         </div>
      </Content>

      <EditPopup open={showPopup} element={targetElement} closePopup={() => closePopup()} />
      <SimpleSnackbar open={openSnackbar} setOpen={() => setOpenSnackbar(false)} text="Элемент добавлен" />
      <Footer />
    </>
  );
}