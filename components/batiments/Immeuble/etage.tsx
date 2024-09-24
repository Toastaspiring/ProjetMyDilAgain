import React from 'react'
import { TypeEtage } from '@/app/types/TypeEtage'
import { TypePiece } from '@/app/types/TypePiece'
import Piece from './piece'

const etage = ({ etage }:{etage: TypeEtage}) => {

  return (
    <div className="flex justify-around items-center w-full">
        {etage.pieces.map((piece:TypePiece) => (
            <Piece piece={piece}/>
        ))}
    </div>
  )
}

export default etage