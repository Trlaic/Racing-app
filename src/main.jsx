import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './main.scss'
import NotFoundPage from './pages/NotFound/NotFoundPage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import AnimationPage from './pages/AnimationPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/animation' element={<AnimationPage />} />
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
