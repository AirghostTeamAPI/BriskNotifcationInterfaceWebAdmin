import React from 'react';
import {
    BrowserRouter,
    Routes as ReactRouter,
    Route,
  } from "react-router-dom";

import Homepage from './pages/Homepage';
import Location from './pages/Location';
import AccessedHours from './pages/AccessedHours';
import FolsReach from './pages/FolsReach/indes';
import FolsReadByUser from './pages/FolsReadByUser';

export default function Routes() {
    return (
        <BrowserRouter>
            <ReactRouter>
                <Route path="/" element={<Homepage />} />
                <Route path="/Location" element={<Location />} />
                <Route path="/AccessedHours" element={<AccessedHours />} />
                <Route path="/FolsReach" element={<FolsReach />} />
                <Route path="/FolsReadByUser" element={<FolsReadByUser />} />
            </ReactRouter>
        </BrowserRouter>
    );
}