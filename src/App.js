import Home from './pages/Home'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Layout from './pages/Layout';
function App() {
  return (
    <BrowserRouter>    
      <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
      </Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
