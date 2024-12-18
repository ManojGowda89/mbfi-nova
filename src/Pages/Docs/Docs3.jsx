import React from 'react';
import { Typography, Container, Paper, Box, Button, Card, CardMedia, CardContent } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function Docs3() {
  const navigate = useNavigate();

  return (
    <Paper style={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh' }}>
      <Container maxWidth="md" style={{ paddingTop: '50px', textAlign: 'center' }}>
        {/* Title */}
        <Typography variant="h2" style={{ fontWeight: 'bold' }}>
          How to Handle CORS in <code>mbfi</code>
        </Typography>

        {/* Introduction */}
        <Typography variant="body1" style={{ marginTop: '20px', textAlign: 'left' }}>
          The <code>mbfi</code> framework simplifies handling CORS (Cross-Origin Resource Sharing). Follow the steps below to understand how CORS is automatically managed:
        </Typography>

        {/* Step-by-Step Instructions */}
        <Box style={{ marginTop: '30px', textAlign: 'left' }}>
          <Typography variant="h4" style={{ marginBottom: '10px' }}>
            Automatic CORS Handling
          </Typography>
          <Typography variant="body1">
            Once you create a server using <code>mbfi</code>, CORS is automatically handled. Even if you do not pass specific URLs, the server will handle CORS for all requests by default.
          </Typography>

          <Typography variant="h4" style={{ marginTop: '20px', marginBottom: '10px' }}>
            Specify Allowed URLs
          </Typography>
          <Typography variant="body1">
            To restrict CORS to specific URLs, pass an array of URLs as the second argument when running the server:
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
            {`const app = run(3000, ["http://localhost:5174", "https://yoursite.com"]);`}
          </Typography>

          <Typography variant="h4" style={{ marginTop: '20px', marginBottom: '10px' }}>
            Example Code Snippet
          </Typography>
          <Typography variant="body1">
            Here is a sample implementation for handling CORS:
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
              image="/image5.png" // Replace with your code snippet image path
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
              image="image6.png" // Replace with your terminal output image path
              alt="Terminal output example"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </Card>
          <br/>
          <Card style={{ backgroundColor: '#222', color: 'white' }}>
            <CardContent>
              <Typography variant="body1">Example Terminal Output:</Typography>
            </CardContent>
            <CardMedia
              component="img"
              image="image7.png" // Replace with your terminal output image path
              alt="Terminal output example"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </Card>
        </Box>

        {/* Navigation Buttons */}
        <Box style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between' }}>
          <Link
            variant="contained"
            style={{ backgroundColor: '#333', color: 'white' }}
            to='/docs2'
          >
            Back
          </Link>
          <Link
            variant="contained"
            style={{ backgroundColor: '#555', color: 'white' }}
            to='/docs4'
          >
            Next
          </Link>
        </Box>
      </Container>
    </Paper>
  );
}
