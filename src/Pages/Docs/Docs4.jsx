import React from 'react';
import { Typography, Container, Paper, Box, Button, Card, CardMedia, CardContent } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function Docs4() {
  const navigate = useNavigate();

  return (
    <Paper style={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh' }}>
      <Container maxWidth="md" style={{ paddingTop: '50px', textAlign: 'center' }}>
        {/* Title */}
        <Typography variant="h2" style={{ fontWeight: 'bold' }}>
          Environments, Logging, JSON, and Router Handling in <code>mbfi</code>
        </Typography>

        {/* Introduction */}
        <Typography variant="body1" style={{ marginTop: '20px', textAlign: 'left' }}>
          The <code>mbfi</code> package comes with built-in support for environment variables, logging, JSON handling, and router management. Here's how you can leverage these features to build REST APIs efficiently:
        </Typography>

        {/* Environments Section */}
        <Box style={{ marginTop: '30px', textAlign: 'left' }}>
          <Typography variant="h4" style={{ marginBottom: '10px' }}>
            Environment Variables
          </Typography>
          <Typography variant="body1">
            You don't need to install the <code>dotenv</code> package. Simply create a <code>.env</code> file in your project directory, and the <code>mbfi</code> framework will automatically load it.
          </Typography>
          <Typography
            variant="body1"
            style={{ backgroundColor: '#333', padding: '10px', marginTop: '10px', fontFamily: 'monospace', borderRadius: '4px' }}
          >
            # Example .env File
            PORT=3000
            DATABASE_URL=mongodb://localhost:27017/mydb
          </Typography>
        </Box>

        {/* Logging Section */}
        <Box style={{ marginTop: '30px', textAlign: 'left' }}>
          <Typography variant="h4" style={{ marginBottom: '10px' }}>
            Logging
          </Typography>
          <Typography variant="body1">
            Every API endpoint logs its activity to the terminal, making it easy to debug and monitor your application.
          </Typography>
        </Box>

        {/* JSON Handling Section */}
        <Box style={{ marginTop: '30px', textAlign: 'left' }}>
          <Typography variant="h4" style={{ marginBottom: '10px' }}>
            JSON Handling
          </Typography>
          <Typography variant="body1">
            The <code>express.json()</code> middleware is built into <code>mbfi</code>. There's no need to manually parse JSON requests.
          </Typography>
        </Box>

        {/* Router Handling Section */}
        <Box style={{ marginTop: '30px', textAlign: 'left' }}>
          <Typography variant="h4" style={{ marginBottom: '10px' }}>
            Router Handling
          </Typography>
          <Typography variant="body1">
            Use the built-in router to handle individual pages with ease. Here's an example:
          </Typography>
          <Typography
            variant="body1"
            style={{ backgroundColor: '#333', padding: '10px', marginTop: '10px', fontFamily: 'monospace', borderRadius: '4px' }}
          >
            {`const { router } = require('mbfi');`} <br/>

{`router.get('/page', (req, res) => {`}<br/>
  {`res.send('This is an individual page');`}<br/>
{`});`}
<br/>
{`module.exports=router`}
          </Typography>
        </Box>

        {/* Images Section */}
        <Box style={{ marginTop: '30px', textAlign: 'center' }}>
          <Card style={{ backgroundColor: '#222', color: 'white', marginBottom: '20px' }}>
            <CardContent>
              <Typography variant="body1">Example Router Code:</Typography>
            </CardContent>
            <CardMedia
              component="img"
              image="/image8.png" // Replace with your router code image path
              alt="Router code example"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </Card>

          <Card style={{ backgroundColor: '#222', color: 'white' }}>
            <CardContent>
              <Typography variant="body1">Example Output:</Typography>
            </CardContent>
            <CardMedia
              component="img"
              image="/image9.png" // Replace with your router output image path
              alt="Router output example"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </Card><br/>
          <Card style={{ backgroundColor: '#222', color: 'white' }}>
            <CardMedia
              component="img"
              image="/image10.png" // Replace with your router output image path
              alt="Router output example"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </Card>
        </Box>

        {/* Navigation Buttons */}
        <Box style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between' }}>
          <Link
            variant="contained"
            style={{ backgroundColor: '#333', color: 'white' }}
            to='/docs3'
          >
            Back
          </Link>
          <Link
            variant="contained"
            style={{ backgroundColor: '#555', color: 'white' }}
          >
            Next
          </Link>
        </Box>
      </Container>
    </Paper>
  );
}
