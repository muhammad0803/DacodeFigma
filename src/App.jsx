import React from 'react';
import { Futer } from './Futer/Futer'
import {BrowserRouter as Router,Link,Route,Routes, useNavigate, useParams} from 'react-router-dom';
import { Navbar } from './navbar/Navbar';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { Case } from './pages/Case';
import { Code } from './pages/Code';
import { Services } from './pages/Services';
import {Error} from './pages/Error';

// import {Map}
function App() {

  return (
    
    

    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/case' element={<Case/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/code' element={<Code/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    <Futer/>
     </>
  );
}

export default App;
