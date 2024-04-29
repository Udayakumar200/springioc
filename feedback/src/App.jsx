import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'

import './App.css'
import Feedback from './Comp/Feedback'
import Content from './Comp/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Content />} />
    <Route path="/feedback" element={<Feedback />} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
