import React from 'react'
import Etage from './etage'
import { TypeEtage } from '@/app/types/TypeEtage'

const etages = ({etages}: {etages: Array<TypeEtage>}) => {

    return(
        <div className="flex flex-col w-full">
            {etages.map((etage:TypeEtage) => (
                <Etage etage={etage}/>
            ))}
        </div>
    )
}

export default etages