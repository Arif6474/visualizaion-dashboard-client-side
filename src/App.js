
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Dashboard from './components/Home/Dashboard';
import Home from './components/Home/Home';
import Sector from './components/Home/Sector';
import Topic from './components/Home/Topic';

function App() {
  return (
    <div className='netclan-bg'>
     <Header/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard></Dashboard>}>
       <Route  index element={<Sector></Sector>}> </Route>
       <Route  path="topic" element={<Topic></Topic>}> </Route>
     
          </Route>
      
    
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
