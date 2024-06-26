import { ColorModeProvider} from './Theme.jsx'
import { CssBaseline } from '@mui/material'
import Topbar from './scenes/global/Topbar.jsx'
import { useState,useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import {Dashboard,Team,Contacts,Donations,Form,Pie,AllPosts,FAQ,Calendar} from './scenes/index.js'
import Sidebar from './scenes/global/Sidebar.jsx'

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
          <Route path='/allposts' element={<AllPosts/>}/>
        </Routes>
        </main>
      </div>
    
    </ColorModeProvider>
  )
}

export default App
