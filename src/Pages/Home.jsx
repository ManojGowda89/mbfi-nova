import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Container, Paper, Box, Divider, Button } from '@mui/material';

export default function Home() {
  return (
    <Paper style={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh' }}>
      <Container maxWidth="md" style={{ paddingTop: '50px', textAlign: 'center' }}>
        {/* Title Section */}
        <Typography variant="h1" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
          mbfi
        </Typography>

        <Typography variant="h4" style={{ marginTop: '20px' }}>
          The Smart Package For Smart Developers
        </Typography>

        {/* Introduction Section */}
        <Box style={{ marginTop: '30px', textAlign: 'left' }}>
          <Typography variant="h6" style={{ fontWeight: 'bold', textAlign: 'center' }}>
            Introduction
          </Typography>
          <Divider style={{ margin: '10px auto', width: '50%' }} />
          <Typography variant="body1" style={{ marginTop: '20px' }}>
            <b>mbfi</b> is a utility package that streamlines the process of setting up an <b>Express server</b> ,
            <b> MySQL</b> and <b>Mongoose</b>. The package can handle both NoSQL and SQL databases with simple
            functionality and can also handle store operations within the Express server. Along with essential features
            like routing, schema validation for Mongoose, and logging, it simplifies common tasks, allowing you to focus
            more on building your application and less on boilerplate code.
          </Typography>
          <Typography variant="body1" style={{ marginTop: '10px' }}>
            This package includes support for MongoDB connection, schema validation, logging , basic CORS handling,
            and basic routing. Users can create an Express server in one line with the desired port: Just install package and just try out the below code
          </Typography>
          <Typography
  variant="body1"
  style={{
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    display: 'inline-block',
    marginTop: '10px',
    borderRadius: '5px',
    fontFamily: 'monospace',
    textAlign: 'left',
  }}
>
  const &#123; run &#125; = require('mbfi'); <br />
  const app = run(5000); <br />
  app.get("/", (req, res)   {"=>"} &#123; <br />
  &nbsp;&nbsp;&nbsp;res.send("mbfi"); <br />
  &#125;);
</Typography>

          <Typography variant="body1" style={{ marginTop: '20px' }}>
            Similarly, a one-line connection can establish both MongoDB and MySQL databases, making <b>mbfi</b> a
            streamlined wrapper package for your server setup. To Read More Click On Docs
          </Typography>
        </Box>

        {/* Package Installation */}
        <Box style={{ marginTop: '40px' }}>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            Installation
          </Typography>
          <Typography variant="body1" style={{ marginTop: '10px' }}>
            Install the package via npm:
          </Typography>
          <Typography
            variant="body1"
            style={{
              backgroundColor: '#333',
              color: '#fff',
              padding: '10px',
              display: 'inline-block',
              marginTop: '10px',
              borderRadius: '5px',
              fontFamily: 'monospace',
            }}
          >
            npm install mbfi
          </Typography>
        </Box>

        {/* Links */}
        <Box style={{ marginTop: '30px' }}>
         
          <Box style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link
            to="/docs"
            style={{ textDecoration: 'none' }}
          >
            <Button variant="contained" style={{ backgroundColor: '#555', color: 'white' }}>
              Docs
            </Button>
          </Link>
        </Box>
      
        </Box>

      
     
      </Container>
      <br/>
    </Paper>
  );
}
