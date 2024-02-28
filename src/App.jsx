import { ColorModeProvider} from './Theme'
import { CssBaseline } from '@mui/material'
import Topbar from './scenes/global/Topbar'
import { useState,useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import {Dashboard,Team,Contacts,Donations,Form,Pie,FAQ,Calendar} from './scenes/index'
import Sidebar from './scenes/global/Sidebar'

function App() {
  const [themeMode, setThemeMode] = useState("dark")
  const [setter, setSetter] = useState(false)

  const lightTheme =()=> {
    setThemeMode("light")
  }
  const darkTheme =()=> {
    setThemeMode("dark")
  }
  const setSett = () => {
    setSetter(!setter)
  }
  useEffect(() => {
    document.querySelector('html').setAttribute("class" ,themeMode)
  }, [themeMode]);

  return (
    <ColorModeProvider value={{themeMode,lightTheme,darkTheme,setter,setSett}}>
      <CssBaseline/>
      <div className='flex relative'>
      <Sidebar/>
        <main>
        <Topbar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/donations' element={<Donations/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/pie' element={<Pie/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/calendar' element={<Calendar/>}/>

        </Routes>
        </main>
      </div>
    
    </ColorModeProvider>
  )
}

export default App
