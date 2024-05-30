import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Resume from './Pages/Resume'
import Projects from './Pages/Projects'
import Header from './Components/Header'
import LandingPage from './Pages/LandingPage'
import Footer from './Components/Footer'
function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/home'element={<Home/>}></Route>
        <Route path='/resume'element={<Resume/>}></Route>
        <Route path='/projects'element={<Projects/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
