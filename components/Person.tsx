import { FC } from "react";
import { PersonModel } from "../models/person.model";

type Props = {
    person: PersonModel
}

const Person: FC<Props> = ({person}) => {
    return (
    <div className="card">
        <h3>{ person.name }</h3>
        <p>Gender - {person.gender}</p>
        <p>Height - {person.height}</p>
        <p>Hair color - {person.hair_color}</p>
        <p>Skin color - {person.skin_color}</p>
    </div>
    )
}

export default Person;

// TODO 6 : Utilizza la libreria ts-pattern per validare tutte le casistiche che può assumere la proprietà gender