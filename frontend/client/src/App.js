import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';

import HomePage from 'container/HomePage';
import DashboardPage from 'container/DashboardPage';
import LoginPage from 'container/LoginPage';
import RegisterPage from 'container/RegisterPage';

import {store} from 'store';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
