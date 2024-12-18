import React from 'react';
import { Typography, Container, Paper, Box, Button, Card, CardMedia, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Docs2() {
  const navigate = useNavigate();

  return (
    <Paper style={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh' }}>
      <Container maxWidth="md" style={{ paddingTop: '50px', textAlign: 'center' }}>
        {/* Title */}
        <Typography variant="h2" style={{ fontWeight: 'bold' }}>
          How to Create a REST API using <code>mbfi</code>
        </Typography>

        {/* Introduction */}
        <Typography variant="body1" style={{ marginTop: '20px', textAlign: 'left' }}>
          The <code>mbfi</code> package simplifies building REST APIs. Follow these steps to create a basic REST API:
        </Typography>

        {/* Step-by-Step Instructions */}
        <Box style={{ marginTop: '30px', textAlign: 'left' }}>
          <Typography variant="h4" style={{ marginTop: '20px', marginBottom: '10px' }}>
            Step 1: Create a REST API using app
          </Typography>
          <Typography variant="body1">
            Use the following code to create a simple REST API with one GET endpoint:
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
            {`const { run } = require('mbfi');`}<br/>

{`const app = run(3000);`}
<br/>
{`app.get('/', (req, res) => {`}<br/>
  {`res.send({message:"mbfi"});`}
<br/>
{`})`}

          </Typography>

          <Typography variant="h4" style={{ marginTop: '20px', marginBottom: '10px' }}>
            Step 2: Test the API
          </Typography>
          <Typography variant="body1">
            Start your server and navigate to <code>http://localhost:3000</code> in your browser or use a tool like Postman to test the endpoint.
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
              image="/image3.png" // Replace with your code snippet image path
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
              image="/image4.png" // Replace with your terminal output image path
              alt="Terminal output example"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </Card>
        </Box>

        {/* Navigation Buttons */}
        <Box style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="contained"
            style={{ backgroundColor: '#333', color: 'white' }}
            onClick={() => navigate('/docs')}
          >
            Back
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: '#555', color: 'white' }}
            onClick={() => navigate('/docs3')}
          >
            Next
          </Button>
        </Box>
      </Container>
    </Paper>
  );
}
