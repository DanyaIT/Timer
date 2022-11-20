
import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App(){
  
  const [days, setDays] = useState('00')
  const [hours, setHours] = useState('00')
  const [minutes, setMinutes] = useState('00')
  const [seconds, setSeconds] = useState('00')

  const interval = useRef();


  const setTimer = ()=>{
    let futureDate = new Date('May 20, 2023 00:00:00').getTime()
      setInterval(()=>{
      const now = new Date().getTime()
      let distance = futureDate - now
      
      const day = Math.floor(distance / (1000*60*60*24 ))
      const hour = Math.floor((distance % (1000*60*60*24)/(1000*60*60)))
      const minute = Math.floor((distance % (1000*60*60))/(1000*60))
      const seconds = Math.floor((distance % (1000 * 60))/1000)
      if(distance <0){
        clearInterval(interval.current)
      }else{
        setDays(day)
        setHours(hour)
        setMinutes(minute)
        setSeconds(seconds)
      }

    },1000)
  }
  
  useEffect(()=>{
    setTimer()
    return ()=>{
      clearInterval(interval.current)
    }
  })
    
  return (
    <div className="App">
        <div className='timer__container'>
          <div className='timer__top'>            
          <h1 className='timer__title'>
              Timer
           </h1>
          </div>
          <div className='timer__inner'>
                <section className='timer__item'>
                  <p className='timer__value'>{days}</p>
                  <h3 className='timer__text'>Days</h3>
                </section>
                <span className='timer__span'>:</span>
                <section className='timer__item'>
                  <p className='timer__value'>{hours}</p>
                  <h3 className='timer__text'>Hours</h3>
                </section>
                <span className='timer__span'>:</span>
                <section className='timer__item'>
                  <p className='timer__value'>{minutes}</p>
                  <h3 className='timer__text'>Minutes</h3>
                </section>
                <span className='timer__span'>:</span>
                <section className='timer__item'>
                  <p className='timer__value'>{seconds}</p>
                  <h3 className='timer__text'>Seconds</h3>
                </section>
              </div>
          </div>
        </div>
  );
}

export default App;
