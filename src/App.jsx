// import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';
import Home from './Home/home.jsx';
import ContactUs from './ContactUS/contactus.jsx';

function App() {
  return (
    <>
    <Header />
      <Routes>
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/" element={<Home/>} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
