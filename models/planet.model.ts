import * as t from "io-ts";
import { DateFromISOString } from "io-ts-types/DateFromISOString";

export const PlanetValidator = t.type({
    name: t.string,
    rotation_period: t.string,
    orbital_period: t.string,
    diameter: t.string,
    climate: t.string,
    gravity: t.string,
    terrain: t.string,
    surface_water: t.string,
    population: t.string,
    residents: t.array(t.string),
    films: t.array(t.string),
    created: DateFromISOString,
    edited: DateFromISOString,
    url: t.string,
});

export type PlanetModel = t.TypeOf<typeof PlanetValidator>;
