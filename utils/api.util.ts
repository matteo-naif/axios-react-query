const BASE = 'https://swapi.dev/api';

const API_PEOPLE = 'people';
const API_PLANETS = 'planets';

const fetchPeople = async () => {
    const res = await fetch(`${BASE}/${API_PEOPLE}`);
    return res.json();
}

const fetchPlanets = async (page: number) => {
    const res = await fetch(`${BASE}/${API_PLANETS}?page=${page}`);
    return res.json();
}

export { fetchPeople, fetchPlanets }