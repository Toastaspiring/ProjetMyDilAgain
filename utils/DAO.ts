//Import relation BDD
import { createClient } from '@/utils/supabase/server';

//DATATYPE pour Piece dans la BDD
interface Piece {
  id: number;
  nomPiece: string;
  urlPlanning: string;
  description: string;
}

//DATATYPE pour Etage dans la BDD
interface Etage {
  numero: string;
  idBatiment: string;
}

//DATATYPE pour Batiment dans la BDD
interface Batiment {
  Label: string;
  id: string;
}

//DATATYPE pour les Nouveaux Etages 
interface NewEtage {
  numero: string;
  pieces: Piece[];
}

//DATATYPE pour les Nouveaux Batiment 
interface NewBatiment {
  id: number;
  Label: string;
  etages: NewEtage[];
}

//Function pour former un Json
async function WorkingJson() {
  const supabase = createClient();
  const { data: pieceBDD } = await supabase.from("piece").select();
  const { data: batimentBDD } = await supabase.from("batiment").select();
  const { data: etageBDD } = await supabase.from("etage").select();

  const JsonArray: NewBatiment[] = []; //creation du Json

  if (batimentBDD && etageBDD && pieceBDD) {
    batimentBDD.forEach(b => {
      const NewBatiment: NewBatiment = {
        id: b.id,
        Label: b.Label,
        etages: [] // creation table des Etages pour chaque batiment
      };

      etageBDD.forEach(e => {
        if (b.id === e.idBatiment) { 
          const NewEtage: NewEtage = {
            numero: e.numero,
            pieces: [] //  creation table des Pieces pour chaque batiment
          };

          pieceBDD.forEach(p => {
            if (p.idEtage === e.id) {
              const newPiece: Piece = {
                id: p.id,
                nomPiece: p.nomPiece,
                urlPlanning: p.urlPlanning,
                description: p.description
              };

            NewEtage.pieces.push(newPiece); // Ajout Piece à l'Etage
            } 
          });

          NewBatiment.etages.push(NewEtage); // Ajout Etage aux batiment
        }
      });

      JsonArray.push(NewBatiment); // Ajout du Batiment au Json
    });
  }

  return JsonArray;
}

//recuperation liste batiments
export function GetBatiments(){
    return WorkingJson();
}

//recuperer la liste des etages d'un batiment
export async function GetEtages(idBatiment:number){
    const jsonData = await WorkingJson();

    const batiment = jsonData.find(bat => bat.id === idBatiment);

    if (batiment) {
        return batiment.etages;
    } else {
        return []; // Return Table vide si pas d'étages
    }
}
