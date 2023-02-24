import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/Dashboard';
import "./styles.less";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Dashboard />
    </StrictMode>
);
