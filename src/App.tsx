import './App.css';
import { Suspense } from 'react'
import { Routes,Route } from 'react-router-dom';
import Testt from './component/Testt'
function App() {
  return (
    <div className="App">
        <Suspense>
              <Routes>
<Route path='/' element={<Testt/>} />
              </Routes>
        </Suspense>
    </div>
  );
}

export default App;
