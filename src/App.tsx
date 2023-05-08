import { useState } from 'react'
import './App.css'
import SubsList from './components/SubsList'
import { Sub } from './types'
import SubForm from './components/SubForm'

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
