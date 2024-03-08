import React, { createContext, useReducer } from 'react';

export const creatingContext=createContext();
export const creatingStateContext=createContext();



export default function FoodItemContext({children}) {
    const reduce=(state,action)=>{

        switch(action.type){
            case "ADD":
               return [...state,action.data]
            case "REMOVE":
                let newArr=[...state];
                newArr.splice(action.index,1);
                return newArr;
            case "DROP":
               const arr=[];
               return arr;
            default:
                return state;
        }
    }
    


    const[state,dispatch]=useReducer(reduce,[])
   
   
  return (
    <creatingStateContext.Provider value={state}>
    <creatingContext.Provider value={dispatch}>
       
             {children}
        
        
    </creatingContext.Provider>
    </creatingStateContext.Provider>
  )
}
