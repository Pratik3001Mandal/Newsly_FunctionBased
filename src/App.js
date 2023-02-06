import './App.css';
import Navbar from './components/Navbar';

import React, { Component } from 'react'
import News from './components/News';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Footer from './components/Footer';


export default class App extends Component {
  pageSize = 5;
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={this.pageSize} country="in" category="general" color="primary"/>} />
            <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country="in" category="business" color="warning"/>} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" color="info"/>} />
            <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country="in" category="health" color="danger"/>} />
            <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country="in" category="science" color="secondary"/>} />
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="sports" color="success"/>} />
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="technology" color="dark"/>} />
          </Routes>  
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}

