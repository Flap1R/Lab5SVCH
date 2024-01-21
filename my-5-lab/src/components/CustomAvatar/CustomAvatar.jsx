import { Avatar, IconButton } from '@mui/material';
import React from 'react';

export function CustomAvatar(props) {
  return (
    <IconButton sx={{ p: 0 }}>
      <Avatar alt="flap" src="/images.jpg" />
    </IconButton>
  );
} 