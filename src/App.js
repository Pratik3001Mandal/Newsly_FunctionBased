import './App.css';
import Navbar from './components/Navbar';

import React from 'react'
import News from './components/News';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Footer from './components/Footer';


const App = (props) => {
  let pageSize = 5;
  let apiKey = process.env.REACT_APP_NEWSLY_APIKEY;
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={pageSize} country="in" category="general" color="primary" apiKey={apiKey} />} />
            <Route exact path="/business" element={<News key="business" pageSize={pageSize} country="in" category="business" color="warning" apiKey={apiKey} />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={pageSize} country="in" category="entertainment" color="info" apiKey={apiKey} />} />
            <Route exact path="/health" element={<News key="health" pageSize={pageSize} country="in" category="health" color="danger" apiKey={apiKey} />} />
            <Route exact path="/science" element={<News key="science" pageSize={pageSize} country="in" category="science" color="secondary" apiKey={apiKey}/>} />
            <Route exact path="/sports" element={<News key="sports" pageSize={pageSize} country="in" category="sports" color="success" apiKey={apiKey}/>} />
            <Route exact path="/technology" element={<News key="technology" pageSize={pageSize} country="in" category="technology" color="dark" apiKey={apiKey}/>} />
          </Routes>  
        </BrowserRouter>
        <Footer />
      </div>
    )
}

export default App