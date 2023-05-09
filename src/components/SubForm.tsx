import React, { useReducer, useState } from 'react'
import { Sub } from '../types'
import subReducer from '../subReducer'

interface FormState {
  sub: Sub
}

interface FormProps {
  saveSub: (sub: Sub) => void
}

const INITIAL_STATE = {
  nick: "",
  submonths: 0,
  description: "",
  avatar: ""
}

const SubForm = ({saveSub}:FormProps) => {
  const [subValues, subValuesDispatcher] = useReducer(subReducer, INITIAL_STATE)

  const manageChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    subValuesDispatcher({type: 'change', payload: {
      inputName: e.target.name,
      inputValue: e.target.value
    }})
  }

  const clearInputs = () => {
    subValuesDispatcher({type: 'clear'})
  }

  const addSub = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    saveSub({...subValues, avatar: `https://i.pravatar.cc/150?u=${subValues.avatar}`})
    clearInputs()
  }


  return (
    <div>
      <form action="" className='sub_form' onSubmit={(e) => addSub(e)}>
        <input type="text"  placeholder='nick' name="nick" onChange={(e) => manageChangeInput(e)} value={subValues.nick} />
        <input type="text" placeholder='avatar' name="avatar" onChange={(e) => manageChangeInput(e)} value={subValues.avatar} />
        <input type="number"  placeholder='submonths'name="submonths" onChange={(e) => manageChangeInput(e)} value={subValues.submonths} />
        <input type="text"  placeholder='description'name="description" onChange={(e) => manageChangeInput(e)} value={subValues.description} />
        <button style={{border: "1px solid red"}}>Agregar Sub</button>
      </form>
    </div>
  )
}

export default SubForm