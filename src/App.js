import { Route, Routes } from 'react-router-dom';
import './App.css';
import NewForm from './components/Form/NewForm';
import Home from './components/Header/Home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

      
  );
}

export default App;
