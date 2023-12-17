import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



import { Home } from './pages/Home'
import { Meta } from './models/meta'
import { RequestResponse } from './models/requestResponse'
import { getDatas } from './api/entity'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup'
import Account from './components/Account/Account'

const App: React.FC = () => {



  const [metas, setMetas] = useState<Meta[]>([])
  
  
  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      const data: RequestResponse = await getDatas("meta")

      if (data.isSuccess) {
        const results: Meta[] = (data.results as Meta[])
        setMetas(results)
      }

    }
    runLocalData()
  }, [])



  return (
    <BrowserRouter>
      
      <Header  metas = {metas} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer metas = {metas} />
    </BrowserRouter>
  )
}

export default App
