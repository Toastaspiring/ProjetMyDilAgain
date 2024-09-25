import { createClient } from '@/utils/supabase/server';

interface Piece {
  id: number;
  nomPiece: string;
  urlPlanning: string;
  description: string;
}

interface Etage {
  numero: string;
  idBatiment: string;
}

interface Batiment {
  Label: string;
  id: string;
}

interface NewEtage {
  numero: string;
  pieces: Piece[];
}

interface NewBatiment {
  id: number;
  Label: string;
  etages: NewEtage[];
}

async function WorkingJson() {
  const supabase = createClient();
  const { data: pieceBDD } = await supabase.from("piece").select();
  const { data: batimentBDD } = await supabase.from("batiment").select();
  const { data: etageBDD } = await supabase.from("etage").select();

  const JsonArray: NewBatiment[] = []; // Specify the type of JsonArray

  if (batimentBDD && etageBDD && pieceBDD) {
    batimentBDD.forEach(b => {
      const NewBatiment: NewBatiment = {
        id: b.id,
        Label: b.Label,
        etages: [] // Initialize etages as an array
      };

      etageBDD.forEach(e => {
        if (b.id === e.idBatiment) { // Use strict equality
          const NewEtage: NewEtage = {
            numero: e.numero,
            pieces: [] // Initialize pieces as an array
          };

          pieceBDD.forEach(p => {
            if (p.idEtage === e.id) { // Make sure to check the correct id
              const newPiece: Piece = {
                id: p.id,
                nomPiece: p.nomPiece,
                urlPlanning: p.urlPlanning,
                description: p.description
              };

              NewEtage.pieces.push(newPiece); // Push the newPiece into pieces array
            } 
          });

          NewBatiment.etages.push(NewEtage); // Push NewEtage into etages array
        }
      });

      JsonArray.push(NewBatiment); // Push NewBatiment into JsonArray
    });
  }

  return JsonArray;
}

export function GetBatiments(){
    return WorkingJson();
}

export async function GetEtages(idBatiment:number){
    const jsonData = await WorkingJson();

    const batiment = jsonData.find(bat => bat.id === idBatiment);

    if (batiment) {
        return batiment.etages;
    } else {
        return []; // Return an empty array if the batiment is not found
    }
}
