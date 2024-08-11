import React from 'react'
import ReactDOM from 'react-dom/client'
import { SpeedInsights } from '@vercel/speed-insights/react';

import './index.css'
import { ApplicationViews } from './views/ApplicationViews.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApplicationViews />
    <SpeedInsights />
  </React.StrictMode>,
)
