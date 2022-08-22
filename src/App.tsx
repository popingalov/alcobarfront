import './App.css';
import { Suspense } from 'react'
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Suspense>
              <Routes>

              </Routes>
        </Suspense>
    </div>
  );
}

export default App;
