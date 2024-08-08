import React from 'react'
import './hero.css'
import btnpause from '../../assets/btnpause.png'
import btnplay from '../../assets/btnplay.png'
import arrow  from '../../assets/arrow.png'

function Hero({heroData,heroCount,setHeroCount,setPlayStatus,playStatus}){
  return (
    <div className='hero'>
      <div className='hero-text'>
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className='hero-explore'>
        <p>Explore The Future</p>
        <img className='image-arrow' src={arrow} alt="" />
      </div>
      <div className='hero-dot-play'>
        <ul className='hero-dots'>
          <li onClick={() => setHeroCount(0)} className={heroCount===0? "hero-dot orange":"hero-dot"}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount===1? "hero-dot orange":"hero-dot"}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount===2? "hero-dot orange":"hero-dot"}></li>
        </ul>
        <div className='hero-play'>
          <img className='image-arrow' onClick={()=>setPlayStatus(!playStatus)} src={playStatus?btnpause:btnplay}/>
          <p>See the video</p>
        </div>
      </div>
    </div>
  )
}

export default Hero