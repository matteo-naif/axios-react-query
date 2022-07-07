// TODO 1 : Dichiara il validatore PersonValidator utilizzando la libreria io-ts

// TODO 2 : Deriva il type PersonModel dal validatore dichiarato

type PersonModel = {
    gender: string;
    name: string;
    height: string;
    hair_color: string;
    skin_color: string;
    mass: string;
    eye_color: string;
    birth_year: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: Date;
    edited: Date;
    url: string;
}

export type { PersonModel };

// TODO 5 : Converti PersonModel in un union type

// Devi soddisfare le seguenti condizioni:
// - la proprietà hair_color è disponibile solo se gender è uguale a male
// - la proprietà skin_color è disponibile solo se gender è uguale a female
// - le due proprietà precedenti non sono disponibili se gender è uguale a n/a

// TIP: evita di ripetere tutte le altre proprietà usando un intersection type
// https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html 
