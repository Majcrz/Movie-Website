import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Home/Homepage';
import Detail from './Component/Detailpage/Detail';
import DetailHomepage from './Component/Detailpage/DetailHomepage';
function App() {
  return (
<>
<BrowserRouter>

<Routes>
  <Route path='/' element={<Homepage/>}></Route>
  <Route path='/detailpage/:id' element={<DetailHomepage/>}></Route>
</Routes>



</BrowserRouter>





</>
  );
}

export default App;
