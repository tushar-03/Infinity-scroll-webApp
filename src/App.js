
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home'
import Signup from './Components/Signup';
import { AuthProvider } from './Context/authcontext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/signup' element={<div><Signup /></div>} />
            <Route path='/' element={<div><Header /><Home /></div>} />
          </Routes>
        </div></BrowserRouter>
    </AuthProvider>



  );
}

export default App;
