import React from 'react'
import Etage from './etage'
import RezDeChaussee from './rezDeChaussee'
import { TypeEtage } from '@/app/types/TypeEtage'

const etages = ({etages}: {etages: Array<TypeEtage>}) => {

    return(
        <div className="flex flex-col border-x-2 border-black bg-gray-400">
            {etages.map((etage:TypeEtage, index) => (
                <Etage etage={etage} key={index}/>
            ))}
            <RezDeChaussee/>
        </div>
    )
}

export default etages