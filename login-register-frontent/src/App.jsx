
import './App.css'
import Home from './components/HomePage/Home'
import Login from './components/LoginPage/Login'
import Registration from './components/RegistrationPage/Registration'
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";


function App() {

  return(
   <>
  <Router>
    <Routes>
      <Route exact path='/' element={ <Home/>}>  </Route>
      <Route path='/register' element={<Registration/>} >  </Route>
      <Route path='/login'  element={ <Login />}>
       </Route>
    </Routes>
  </Router>

   
   
  </>
  )
}

export default App