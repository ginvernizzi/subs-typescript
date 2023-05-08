import React, { useState } from 'react'
import { Sub } from '../types'

interface FormState {
  sub: Sub
}

interface FormProps {
  saveSub: (sub: Sub) => void
}

const SubForm = ({saveSub}:FormProps) => {
  const [inputValues, setInputValues] = useState<FormState["sub"]>({
    nick: "",
    submonths: 0,
    description: "",
    avatar: ""
  })

  const manageChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValues({...inputValues,
      [e.target.name]: e.target.value
    })
  }

  const addSub = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    saveSub({...inputValues, avatar: `https://i.pravatar.cc/150?u=${inputValues.avatar}`})
  }

  return (
    <div>
      <form action="" className='sub_form' onSubmit={(e) => addSub(e)}>
        <input type="text"  placeholder='nick' name="nick" onChange={(e) => manageChangeInput(e)} value={inputValues.nick} />
        <input type="text" placeholder='avatar' name="avatar" onChange={(e) => manageChangeInput(e)} value={inputValues.avatar} />
        <input type="number"  placeholder='submonths'name="submonths" onChange={(e) => manageChangeInput(e)} value={inputValues.submonths} />
        <input type="text"  placeholder='description'name="description" onChange={(e) => manageChangeInput(e)} value={inputValues.description} />
        <button style={{border: "1px solid red"}}>Agregar Sub</button>
      </form>
    </div>
  )
}

export default SubForm