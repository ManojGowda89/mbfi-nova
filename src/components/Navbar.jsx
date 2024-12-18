import React from 'react';
import { AppBar, Toolbar, Typography, Link, Box } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#121212' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
          mbfi Docs
        </Typography>
        <Box>
          <Link
            href="/"
            color="inherit"
            underline="hover"
            style={{ marginRight: '20px', fontWeight: 'bold' }}
          >
            Home
          </Link>
          <Link
            href="https://github.com/ManojGowda89/mbfi.git"
            color="inherit"
            underline="hover"
            style={{ marginRight: '20px', fontWeight: 'bold' }}
          >
            GitHub
          </Link>
          <Link
            href="https://www.npmjs.com/package/mbfi"
            color="inherit"
            underline="hover"
            style={{ fontWeight: 'bold' }}
          >
            NPM
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
