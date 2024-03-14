import './App.css';
import Main from './components/Main';
import SignIn from './components/SignIn';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
