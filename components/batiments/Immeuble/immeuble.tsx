import React from 'react'
import Toit1 from './toit1'
import Etages from './etages'
import {TypeBatiment} from '../../../app/types/TypeBatiment'

const immeuble = ({
  batiment
}:{
   batiment:TypeBatiment,
  }
) => {
  return (
    <div className='flex flex-col items-center'>
      <Toit1/>
      <Etages etages={batiment.etages}/>
    </div>
  )
}

export default immeuble