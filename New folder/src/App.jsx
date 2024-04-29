
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Option from './Comp/Optionproduct';
import Headerprod from './Comp/Headerprod';
import ViewProduct from './Comp/Viewproduct';
import Addproduct from './Comp/Addproduct';
function App() {
  return (
       <>
    <BrowserRouter>
   <Headerprod />
    <Routes>
    <Route path="/" element={<Option />} />
    <Route path='/view'element={< ViewProduct />}/>
    <Route path='/add'element={< Addproduct />}/>

    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
