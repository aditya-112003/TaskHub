import About from './Components/About';
import CardSetup from './Components/CardSetup';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import AllContext from './Context/allContext';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <AllContext>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<CardSetup />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
          </Routes>
        </BrowserRouter>
      </AllContext>
    </>
  );
}

export default App;
