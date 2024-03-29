import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyle from './styles/global';

import Header from './components/Header';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
        </BrowserRouter>
    );
}

export default App;
