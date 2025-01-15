import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form';
import Answer from './pages/Answer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/questionnaire' element={<Form />} />
        <Route path='/compare-answers' element={<Answer />} />
      </Routes>
    </Router>
  );
}

export default App;
