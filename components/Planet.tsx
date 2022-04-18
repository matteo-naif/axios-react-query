import { FC } from "react";
import { PlanetModel } from "../models/planet.model";

type Props = {
    planet: PlanetModel
}

const Planet: FC<Props> = ({planet}) => {
    return (
    <div className="card">
        <h3>{ planet.name }</h3>
        <p>Population - {planet.population}</p>
        <p>Terrain - {planet.terrain}</p>
    </div>
    )
}

export default Planet;