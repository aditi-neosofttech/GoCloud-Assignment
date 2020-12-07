import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function startCounterValur() {
    setIsActive(!isActive);
 
  }

  function handlereset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
        //start counting
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div>
      <div >
        {seconds}s
      </div>
      <div >
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={startCounterValur}>
          Start
        </button>
        <button className="button" onClick={handlereset}>
          Hide counter
        </button>
      </div>
    </div>
  );
};

export default Timer;