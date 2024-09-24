import React from 'react'
import { TypePiece } from '@/app/types/TypePiece'

const piece = ({ piece }: { piece: TypePiece }) => {
  return (
    <div>{piece.nomPiece}</div>
  )
}

export default piece