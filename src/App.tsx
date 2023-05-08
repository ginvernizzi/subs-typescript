import { useState } from 'react'
import './App.css'
import SubsList from './components/SubsList'
import { Sub } from './types'
import SubForm from './components/SubForm'

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

function App() {
  const [subs, setSubs] = useState<Array<Sub>>(INITIAL_STATE)

  const saveSub = (sub: Sub):void => {
    setSubs([...subs, sub])
    
  }

  return (
    <div className="App">
      <h1>Suscriptores de gonza</h1>
     <SubsList subs={subs} />
     <SubForm saveSub={saveSub} />
    </div>
  )
}

export default App
