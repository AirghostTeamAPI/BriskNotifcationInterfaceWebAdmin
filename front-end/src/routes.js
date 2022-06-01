import React from 'react';
import {
    BrowserRouter,
    Routes as ReactRouter,
    Route,
  } from "react-router-dom";

import Homepage from './pages/Homepage';
import Location from './pages/Location';

export default function Routes() {
    return (
        <BrowserRouter>
            <ReactRouter>
                <Route path="/" element={<Homepage />} />
                <Route path="/Location" element={<Location />} />
            </ReactRouter>
        </BrowserRouter>
    );
}