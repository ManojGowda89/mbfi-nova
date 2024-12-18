import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Docs from "./Pages/Docs/Docs";
import { Paper } from '@mui/material';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Docs2 from "./Pages/Docs/Docs2";
import Docs3 from "./Pages/Docs/Docs3";
import Docs4 from "./Pages/Docs/Docs4";
export default function App() {

const router = createBrowserRouter([
{
  path:"*",
  element:<Home/>
},
{
  path:"/docs",
  element:<Docs/>
},
{
  path:"/docs2",
  element:<Docs2/>
},
{
path:"/docs3",
element:<Docs3/>
},
{
  path:"/docs4",
  element:<Docs4/>
  },





])


  
  return (
    <Paper style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
      <Navbar/>
   <RouterProvider router={router} />
   <Footer/>
   </Paper>
  );
}
