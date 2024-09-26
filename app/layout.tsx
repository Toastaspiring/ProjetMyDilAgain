"use client"
import React, { useState, useEffect } from 'react';
import { TypeBatiment } from '@/app/types/TypeBatiment';
import Immeuble from '../components/batiments/Immeuble/immeuble';
import './globals.css'

const layout = () => { 

  // Données de test corrigées (label en minuscule)
  const testData: TypeBatiment = {
    Label: "Bâtiment A",
    etages: [
      {
        numero: 1,
        pieces: [
          {
            nomPiece: "Salle de Réunion",
            urlPlanning: "https://example.com/planning/salle-reunion-1"
          },
          {
            nomPiece: "Bureau Directeur",
            urlPlanning: "https://example.com/planning/bureau-directeur-1"
          }
        ]
      },
      {
        numero: 2,
        pieces: [
          {
            nomPiece: "Salle de Conférence",
            urlPlanning: "https://example.com/planning/salle-conference-2"
          },
          {
            nomPiece: "Bureau RH",
            urlPlanning: "https://example.com/planning/bureau-rh-2"
          }
        ]
      }
    ]
  };

  // Gestion de l'état genre avec un état initial de 1
  const [genre, setGenre] = useState<number>(1);

  // Fonction pour définir le genre en fonction du nombre d'étages
  function getGenre(batiment: TypeBatiment) {
    const nbEtages: number = batiment.etages.length;
    if (nbEtages > 2) {
      setGenre(2); // Utilisation de setGenre pour mettre à jour l'état
    } else {
      setGenre(1); // Assurez-vous que le genre redevient 1 si les conditions sont remplies
    }
  }

  // Utilisation de useEffect pour déterminer le genre au montage du composant
  useEffect(() => {
    getGenre(testData);
  }, []); // Le tableau vide signifie que cet effet s'exécute uniquement une fois, au montage

  return (
    <html lang="en">
      <body className="flex w-full h-screen justify-center overflow-scroll overflow-x-hidden items-end bg-cover bg-[url('/assets/pixel_wallpaper.jpg')]">
        <Immeuble batiment={testData}/>
      </body>
    </html>
  );
}

export default layout;