import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './component/Cabecera.jsx';
import Botones from './component/Botones.jsx';

function App() {
  return(
    <>
    <Cabecera/>
    <Botones/>
    </>
  )
}
export default App
