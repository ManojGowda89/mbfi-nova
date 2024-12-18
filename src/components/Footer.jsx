import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '15px 0',
        textAlign: 'center',
        marginTop: '3px',
      }}
    >
      <Typography variant="body2">© 2024 mbfi - Powered by mb64</Typography>
    </Box>
  );
}
