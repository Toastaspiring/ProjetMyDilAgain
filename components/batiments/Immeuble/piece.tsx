import React from 'react'
import { TypePiece } from '@/app/types/TypePiece'
import 'dayschedule-widget/dist/dayschedule-popup.css';
import 'dayschedule-widget/dist/dayschedule-widget.js';

const piece = ({ piece, type }: { piece: TypePiece, type: number }) => {
  function handleClickEvent() {
    if(type != -1){
      daySchedule.initPopupWidget({
        "url": "https://epsi-booking.dayschedule.com",
        "type": "popup",
        "color": {
            "primary": "#0f0980",
            "secondary": "#afeefe"
        }
    })
    }
  }
  return (
    <div onClick={handleClickEvent} className={`${type != -1 ? "hover:cursor-pointer" : ""}`}>
      {type !== -1 ? (
        type % 2 === 0 ? (
          <img className="h-40" src="/assets/base-fenetre-cassee-sans-herbe.png" alt="Fenêtre cassée" />
        ) : (
          <img className="h-40" src="/assets/base-fenetre-sans-herbe.png" alt="Décor par défaut" />
        )
      ) : (
        <img className="h-40" src="/assets/base-decor-sans-herbe.png" alt="Sans fenêtre" />
      )}

      {type !== -1 && (
        <p className="flex w-full justify-center font-bold">{piece.nomPiece}</p>
      )}
    </div>
  )
}

export default piece