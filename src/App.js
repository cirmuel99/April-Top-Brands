import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Services from './pages/Services';
import Team from './pages/Team'

const App = () => {
  return (
    <ChakraProvider>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} /> 
              <Route path='services' element={<Services />} />
              <Route path='contact' element={<Contact />} />
              <Route path='team' element={<Team />} />
              <Route path='*' element={<NoPage />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </ChakraProvider>
   
  )
}

export default App;
