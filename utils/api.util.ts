import { PersonResponseValidator, PlanetResponseValidator } from "../models/response-api.model";
import * as t from "io-ts";
import { PathReporter } from "io-ts/PathReporter";
import { either } from "fp-ts";
import { PlanetValidator } from "../models/planet.model";

const BASE = 'https://swapi.dev/api';

const API_PEOPLE = 'people';
const API_PLANETS = 'planets';

const get = (path: string) =>
  fetch(`${BASE}/${path}`)
    .then((res) => res.json())

const fetchPeople = async () => {
    const res = await get(API_PEOPLE);
    return decodeOrThrow(PersonResponseValidator, res);
  }
  
  const fetchPlanets = async (page: number) => {
    const res = await get(`${API_PLANETS}?page=${page}`);
    return decodeOrThrow(PlanetResponseValidator, res);
}

function decodeOrThrow<A, O>(type: t.Type<A, O>, value: unknown): A {
  const decoded = type.decode(value);
  if (either.isLeft(decoded)) {
    throw new Error(PathReporter.report(decoded).join("\n"));
  }
  return decoded.right;
}
  

export { fetchPeople, fetchPlanets }