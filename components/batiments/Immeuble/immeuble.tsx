import React from 'react'
import Toit1 from './toit1'
import Etages from './etages'
import RezDeChaussee from './rezDeChaussee'

const immeuble = () => {
    //getBatiment() 

  return (
    <div className='flex flex-col'>
        <Toit1/>
        <Etages etages={immeuble.etages}/>
        <RezDeChaussee/>
    </div>
  )
}

export default immeuble