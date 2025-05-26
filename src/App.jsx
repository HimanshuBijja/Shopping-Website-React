import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Notfound } from './pages/Notfound'

function App(){
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route index element={<Home/>}/>
          {/* <Route path='/sighup' element={<Home/>}/> */}
          <Route path='*' element={<Notfound/>}/>


        </Routes>
      </BrowserRouter>
    </>
  )
}




{/* <Routes>
  <Route path="dashboard" element={<Dashboard />}>
    <Route index element={<Home />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes> */}


export default App
