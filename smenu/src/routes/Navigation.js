import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ClientLayout } from '../layouts';

export function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Saludo</h1>} />
            </Routes>
      </BrowserRouter>
    )
}
