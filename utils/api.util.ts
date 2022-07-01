const BASE = 'https://swapi.dev/api';
const API_PEOPLE = 'people';

const fetchPeople = async () => {
  const res = await fetch(`${BASE}/${API_PEOPLE}`)
  return res.json();
}

export { fetchPeople }