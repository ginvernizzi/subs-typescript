import { useEffect, useState } from 'react'
import './App.css'
import SubsList from './components/SubsList'
import { Sub } from './types'
import SubForm from './components/SubForm'
import subReducer from './subReducer'
import { getSubsFromApi, getSubsMemory, mapSubsFromApiToSubs } from './services/subs'

function App() {
  const [subs, setSubs] = useState<Array<Sub>>([])

  useEffect(() => {
    // setSubs(getSubsMemory())
    getSubsFromApi()
      .then(mapSubsFromApiToSubs)
      .then(setSubs)
  }, [])

  const saveSub = (sub: Sub):void => {
    setSubs((prevSubs) => [...prevSubs, sub])
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
