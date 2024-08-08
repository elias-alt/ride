import React from 'react'
import './background.css'
import video from '../../assets/video.mp4'
import car1 from '../../assets/car1.png'
import car2 from '../../assets/car2.jpg'
import car3 from '../../assets/car3.jfif'

function Background({playStatus,heroCount}){
  if (playStatus){
    return(
        <video className='background fade-in' autoPlay loop muted>
          <source src={video} type='video/mp4'/>
        </video>
    )
  }else if(heroCount===0)
  {
    return <img src={car1} className='background fade-in' alt='' />
  }
  else if(heroCount===1)
  {
    return <img src={car2} className='background fade-in' alt='' />
  }
  else if(heroCount===2)
  {
    return <img src={car3} className='background fade-in' alt='' />
  }
}

export default Background;
