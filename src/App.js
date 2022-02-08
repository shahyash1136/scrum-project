import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Layout/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='section__body'>
        <div className='container'>
          <Home />
          <Routes>
            <Route exact path='/' component={Home} />
            {/* <Route path='*' component={NotFound} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
