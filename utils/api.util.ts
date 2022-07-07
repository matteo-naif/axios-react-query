const BASE = 'https://swapi.dev/api';
const API_PEOPLE = 'people';

// TODO 3 : Utilizza il validatore PersonValidator per validare il return type di fetchPeople

const fetchPeople = async () => {
  const res = await fetch(`${BASE}/${API_PEOPLE}`)
  return res.json();
}

export { fetchPeople }