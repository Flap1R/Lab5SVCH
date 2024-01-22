import React, { useState } from 'react';
 import './ChangePassword.css';
 import { Head } from '../../components/Head/Head';
 import { useNavigate } from 'react-router-dom';
 import { Input } from '../../components/Input/Input';
 import { ButtonColor } from '../../components/Button/Button';
 import { restorePassword } from '../../api/authApi';
 import toast from 'react-hot-toast';

 export function ChangePassword() {
   const [login, setLogin] = useState("");
   const [newPassword, setNewPassword] = useState("");
   const navigate = useNavigate();

   async function updatePasswordClick() {
     if (login === "" || login === " ") {
       toast.error("Имя пользователя не должно быть пустым")
     }
     else if (newPassword === "" || newPassword === " ") {
       toast.error("Пароль не должен быть пустым")
     }
     else {
       try {
         const data = {
           userName: login,
           password: newPassword
         }

         await restorePassword(data);
         navigate("/login")
       } catch (error) {
         toast.error("Ошибка сервера")
       }
     }
   }

   return (
     <div className='changePassword'>
       <Head></Head>

       <div className='changePassword__content'>
         <div className='changePassword__content__block'>
           <div className='changePassword__content__block__title'>Восстановить пароль</div>

           <div className='changePassword__content__block__userName'>
             <Input title="Логин" value={login} onChange={(value) => setLogin(value)} />
           </div>
           <div className='changePassword__content__block__newPassword'>
             <Input title="Новый пароль" value={newPassword} onChange={(value) => setNewPassword(value)} />
           </div>

           <div className='changePassword__content__block__button'>
             <ButtonColor value="Вход" handleClick={() => updatePasswordClick()} />
           </div>
         </div>
       </div>
     </div>
   );
 }