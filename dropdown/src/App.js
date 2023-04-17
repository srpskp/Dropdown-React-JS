import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Statedropdown from './Component/Statedropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='' element={<Statedropdown/>}>

      </Route>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
