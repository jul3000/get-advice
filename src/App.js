import './App.css';
import { useState, useEffect } from 'react';
import video from './video.mp4';

function App() {
  const [advice, setAdvice] = useState ("");

  useEffect (() => {
    getAdvice()
  }, [])

  const getAdvice = async () => {
    const response= await fetch (`http://www.boredapi.com/api/activity/`);
    const data = await response.json();
    setAdvice(data.activity);
  }

  return (
    <div className='App'>
        <div className="container">
          <video autoPlay muted loop playsInline>
            <source src={video} type="video/mp4" />
          </video>
          <h1>Here it is your advice what to do today</h1>
        </div>

      <div className='container'>
        <h2>"{advice}"</h2>
      </div>

      <div className='container'>
        <button onClick={getAdvice}>Get new advice</button>
      </div>
    </div>
    
  );
}

export default App;
