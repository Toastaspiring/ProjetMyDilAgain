import React from 'react';

const Toit2 = ({ genre }: { genre: number}) => {
  return (
    <div className="flex flex-col items-center mt-4">
      <div className="flex w-full justify-around items-end">
        <img alt="Cheminée Gauche" src="/assets/cheminee-bob-eponge.jpg"/>
        <img alt="Cheminée Droite" src="/assets/cheminee-acnh.jpg"/>
      </div>
      {genre}
      <div className="flex w-full h-8 bg-gray-400 border-2 border-black"></div>
      <div className="flex w-[95%] h-6 bg-gray-400 border-x-2 border-b-2 border-black"></div>
    </div>
  );
};

export default Toit2;