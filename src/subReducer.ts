import React, { useReducer } from 'react'
import { Sub } from './types';

const INITIAL_STATE = [ {
    nick: "Juancito",
    avatar: "https://i.pravatar.cc/150?u=juancito",
    submonths: 5,
    description: ""
  },
  {
    nick: "caro",
    avatar: "https://i.pravatar.cc/150?u=caro",
    submonths: 7,
    description: "hermana mayor"
  },
  {
    nick: "almiron",
    avatar: "https://i.pravatar.cc/150?u=almiron",
    submonths: 2,
    description: "soy de la boca, y ya vamos a mostrar"
  }]

  
const subReducer = (state:Array<Sub>, action:any):Array<Sub> => {
    switch (action.type) {
        case 'create':
            return state
        case 'delete':
            return state
        default:
            return state;
    }
}

export default subReducer

const [subs subsDispatcher] = useReducer(subReducer, INITIAL_STATE)