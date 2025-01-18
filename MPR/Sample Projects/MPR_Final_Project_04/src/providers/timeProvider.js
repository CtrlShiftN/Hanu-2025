import React, { createContext, useContext, useEffect, useState } from 'react';

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <TimerContext.Provider value={timer}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => useContext(TimerContext);
