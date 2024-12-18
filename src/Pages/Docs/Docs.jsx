import React from 'react';
import { Typography, Container, Paper, Box, Button, List, ListItem, ListItemText, Card, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Docs() {

  return (
    <Paper style={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh' }}>
      <Container maxWidth="md" style={{ paddingTop: '50px', textAlign: 'center' }}>
        {/* Title */}
        <Typography variant="h2" style={{ fontWeight: 'bold' }}>
          Documentation
        </Typography>

        {/* Introduction */}
        <Typography variant="body1" style={{ marginTop: '20px', textAlign: 'left' }}>
          This guide explains how to set up a server using the <code>mbfi</code> package. Follow the steps below to get started quickly:
        </Typography>

        {/* Step-by-Step Instructions */}
        <Box style={{ marginTop: '30px', textAlign: 'left' }}>
          <Typography variant="h4" style={{ marginBottom: '10px' }}>
            Step 1: Install the Package
          </Typography>
          <Typography variant="body1">
            Run the following command in your terminal to install the <code>mbfi</code> package:
          </Typography>
          <Typography
            variant="body1"
            style={{
              backgroundColor: '#333',
              padding: '10px',
              marginTop: '10px',
              fontFamily: 'monospace',
              borderRadius: '4px',
            }}
          >
            npm i mbfi
          </Typography>

          <Typography variant="h4" style={{ marginTop: '20px', marginBottom: '10px' }}>
            Step 2: Add Code to Start the Server
          </Typography>
          <Typography variant="body1">
            Import the <code>run</code> function from the package and initialize your server by providing the desired port:
          </Typography>
          <Typography
            variant="body1"
            style={{
              backgroundColor: '#333',
              padding: '10px',
              marginTop: '10px',
              fontFamily: 'monospace',
              borderRadius: '4px',
            }}
          >
            {`const { run } = require('mbfi');\n\nrun(3000); // Add required port`}
          </Typography>

          <Typography variant="h4" style={{ marginTop: '20px', marginBottom: '10px' }}>
            Step 3: Verify the Server
          </Typography>
          <Typography variant="body1">
            Run the application, and you should see output in the terminal confirming the server is running:
          </Typography>
        </Box>

        {/* Code and Terminal Image Examples */}
        <Box style={{ marginTop: '30px', textAlign: 'center' }}>
          <Card style={{ backgroundColor: '#222', color: 'white', marginBottom: '20px' }}>
            <CardContent>
              <Typography variant="body1">Example Code Snippet:</Typography>
            </CardContent>
            <CardMedia
              component="img"
              image="/image.png" // Replace with your code snippet image path
              alt="Code snippet example"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </Card>

          <Card style={{ backgroundColor: '#222', color: 'white' }}>
            <CardContent>
              <Typography variant="body1">Example Terminal Output:</Typography>
            </CardContent>
            <CardMedia
              component="img"
              image="/image2.png" // Replace with your terminal output image path
              alt="Terminal output example"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </Card>
        </Box>

        {/* Navigation Buttons */}
        <Box style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between' }}>
          <Box style={{ marginTop: '40px', textAlign: 'center' }}>
             <Link
                 to="/"
                 style={{ textDecoration: 'none' }}
               >
                 <Button variant="contained" style={{ backgroundColor: '#555', color: 'white' }}>
                   Home
                 </Button>
               </Link>
             </Box>
            <Box style={{ marginTop: '40px', textAlign: 'center' }}>
               <Link
                   to="/docs2"
                   style={{ textDecoration: 'none' }}
                 >
                   <Button variant="contained" style={{ backgroundColor: '#555', color: 'white' }}>
                     Next
                   </Button>
                 </Link>
               </Box>
        </Box>
      </Container>
      <br/>
    </Paper>
  );
}
