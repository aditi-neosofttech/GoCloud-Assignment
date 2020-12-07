
import logo from './logo.svg';
import './App.css';
import React, { useState,useRef } from 'react';
const AssignmentContext = ()=>{

    const allAmount = [{type:"father", quantity :1000}];
    export const AppStateContext = createContext(allAmount);
}
const [state, setState] = useState(allAmount);
return (
   
    <AppStateContext.Provider value={state}>
      
        {children}
     
    </AppStateContext.Provider>
  );
export default AssignmentContext;