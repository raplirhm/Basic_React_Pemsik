import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mahasiswa from './Layouts/AdminLayout.jsx';

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Mahasiswa/>} />
          </Routes>
      </Router>
  );
};


export default App;


