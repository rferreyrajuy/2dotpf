import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Header/>
      <Main/>
      <Footer/>
  </React.StrictMode>,
)
