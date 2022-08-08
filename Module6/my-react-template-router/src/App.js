import React from "react";

import "./scss/main.scss";

import {FaBeer} from 'react-icons/fa';

import {Header, Footer} from "./components";
import {Container} from "./layouts";
import {Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <div className="ui-wrapper">
      <Header isLogo/>
      <div className="ui-content-wrapper">
        <Container>
          <Routes>
            <Route path='/' element={<h1>Home page</h1>} />
            <Route path='/about' element={<h1>About page</h1>} />
          </Routes>
        </Container>
      </div>
      <Footer/>
    </div>)
};

export default App;
