import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Router>
  ) 
}

export default App;