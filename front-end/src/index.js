import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Alumni } from './Alumni';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Routes>
    <Route path='/alumni/insert' element={<Alumni/>}/>
   </Routes>
  </BrowserRouter>
   

);


