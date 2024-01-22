import { Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function MenuBlockWithButton(props) {
  const navigate = useNavigate();
  
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      <Button
        onClick={() => navigate(`/services`)}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        Услуги
      </Button>

      <Button
        onClick={() => navigate(`/objects`)}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        Объекты
      </Button>

      <Button
        onClick={() => navigate(`/home`)}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        Главная
      </Button>

      <Button
         onClick={() => navigate(`/profile`)}
         sx={{ my: 2, color: 'white', display: 'block' }}
       >
         Профиль
       </Button>
    </Box>
  );
}