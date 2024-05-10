import './App.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./component/Home.js"
import Navbar from './component/Navbar.js';
import SignUp from './component/Signup.js';
import Signin from './component/Signin.js';
import ListPropertyes from './component/ListPropertyes.js';
import Hostel from './component/Hostel.js';
function App() {

  return (
    <>
    <div className ="App" >
     
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/signup' element = {<SignUp/>}/>
        <Route path = '/signin' element = {<Signin/>}/>
        <Route path = '/list' element = {<ListPropertyes />}/>
        <Route path = '/hostel-list' element = {<Hostel />}/>
    
      </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;

