import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import BoxOne from './components/BoxOne';
import './App.css';
import BoxTwo from './components/BoxTwo/BoxTwo';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BoxOne />
      <BoxTwo></BoxTwo>
    </div>
  );
}

export default App;
