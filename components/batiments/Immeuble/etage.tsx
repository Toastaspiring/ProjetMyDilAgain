import React from 'react'
import { TypeEtage } from '@/app/types/TypeEtage'
import { TypePiece } from '@/app/types/TypePiece'
import Piece from './piece'

const etage = ({ etage }:{etage: TypeEtage}) => {
  
  return (
    <div className="flex justify-around items-center bg-gradient-to-b">
      {etage.pieces.map((piece:TypePiece, index) => {
        if(etage.pieces.length < 3 && index == 1){
          return (
            <div className='flex'>
              <Piece piece={piece} key={index} type={-1}/>
              <Piece piece={piece} key={index} type={index}/>
            </div>
          );
        }
        return <Piece piece={piece} key={index} type={index}/>          
      })}
    </div>
  )
}

export default etage