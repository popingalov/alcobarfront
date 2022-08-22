import './App.css';
import { Suspense } from 'react'
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Suspense>
              <Routes>
<Route path='/' element='<div> Hi world <div/>' />
              </Routes>
        </Suspense>
    </div>
  );
}

export default App;
