import React from 'react';

const Toit1 = () => {
  let hauteur:string = "h-16"
  return (
    <div className="flex flex-col w-full items-center mt-4">
      <div className="flex w-full justify-around items-end select-none">
        <img className={`${hauteur} select-none`} alt="Cheminée Gauche" src="/assets/cheminee-mousse.png"/>
        <img className={`${hauteur} select-none`} alt="Cheminée Milieu" src="/assets/cheminee-chat-kiki.png"/>
        <img className={`${hauteur} select-none`} alt="Cheminée Droite" src="/assets/cheminee-fumee.png"/>
      </div>
      <div className="flex w-[80%] h-2 bg-gray-700 border-2 border-black"></div>
      <div className="flex w-[90%] h-2 bg-gray-700 border-2 border-black"></div>
      <div className="flex w-[95%] h-2 bg-gray-700 border-2 border-black"></div>
      <div className="flex w-full h-2 bg-gray-700 border-2 border-black"></div>
    </div>
  );
};

export default Toit1;