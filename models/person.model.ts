import * as t from "io-ts";
import { DateFromISOString } from "io-ts-types/DateFromISOString";

export const PersonValidator = t.type({
    name: t.string,
    height: t.string,
    mass:  t.string,
    hair_color:  t.string,
    skin_color:  t.string,
    eye_color:  t.string,
    birth_year:  t.string,
    gender:  t.string,
    homeworld:  t.string,
    films: t.array(t.string),
    species: t.array(t.string),
    vehicles:  t.array(t.string),
    starships: t.array(t.string),
    created: DateFromISOString,
    edited: DateFromISOString,
    url: t.string,
});

/**
 * Export type from validation object
 */

export type PersonModel = t.TypeOf<typeof PersonValidator>;
