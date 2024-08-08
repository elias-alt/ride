import { useState } from 'react';
import './App.css';
import Background from './Components/background/background';
import Navbar from './Components/navbar/navbar';
import Hero from './Components/hero/hero';

function App() {
  let heroData = [
    {text1:"Ride",text2:"Ethiopia's Pride"},
    {text1:"We Are",text2:"Every Where"},
    {text1:"We Monitor",text2:"Your Satisfaction"},
  ]
  const [heroCount,setHeroCount]= useState(0);
  const [playStatus,setPlayStatus]=useState(false);
  return (
    <div className="App">
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar />
      <Hero 
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
}

export default App;
