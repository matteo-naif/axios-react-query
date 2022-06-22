import { FC } from "react";
import { useQuery } from "react-query";
import { fetchPeople } from "../utils/api.util";
import Person from "./Person";


const People: FC = () => {

    const { data, status } = useQuery('people', fetchPeople)

    return (
        <> 
        <h2>People</h2>
        { status === 'error' && (<div>Error fetching data</div>) }

        { status === 'loading' && (<div>Loading data...</div>) }
        
        { status === 'success' && (
        data.results.map((person) => 
            <Person key={person.name} person={person} />)
        ) 
        }
        
        </>
    )
}

export default People;