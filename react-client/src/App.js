import React from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';

import './scss/App.scss'

import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Header from './fragments/Header';
import Footer from './fragments/Footer';
import Routes from "./Routes";

export default function App() {
  return (
    <React.Fragment>
      <Header />

      <div className="container">
        <Routes />
      </div>

      <Footer />
    </React.Fragment>
  );
}
