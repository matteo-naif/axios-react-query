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
    </div>
    )
}

export default Person;