import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Client from './Component/Client/Client';
import Product from './Component/Product/Product';
import Team from './Component/Team/Team';

function App() {
    

  return (
   <div>
     
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Login/>}/>
       <Route path='/Home/*' element={<Home/>}/>
       <Route path='/Home/Team' element={<Team/>}/>
       <Route path='/Home/Client' element={<Client/>}/>
       <Route path='/Home/Product' element={<Product/>}/>
     </Routes>
     
     </BrowserRouter>
   </div>
);
}

export default App;
