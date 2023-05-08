import React from 'react'
import { Sub } from '../types'

interface Props {
    subs: Array<Sub>
}

const SubsList = ({subs}:Props) => {
  return (
    <div className='sub_container'>
        <ul className='sub_list'>
        {
            subs.map((sub) => {
                return <li key={sub.nick} className='sub_card' >                                    
                <img className='sub_img' src={`${sub.avatar}`} alt={`avatar de ${sub.nick}`} />
                <strong><p>{`${sub.nick} (${sub.submonths})`}</p></strong>
                <p>{sub.description}</p>
                </li>
            })
        }
        </ul>
    </div>
  )
}

export default SubsList