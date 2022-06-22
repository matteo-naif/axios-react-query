import { FC, useState } from "react";
import { useQuery } from "react-query";
import { PlanetModel } from "../models/planet.model";
import { fetchPlanets } from "../utils/api.util";
import Planet from "./Planet";

const Planets: FC = () => {

    const [ page, setPage ]  = useState(1);
    const { data, status } = useQuery(['planets', page], () => fetchPlanets(page), { keepPreviousData: true})

    return (
        <> 
        <h2>Planets</h2>

        { status === 'error' && (<div>Error fetching data</div>) }

        { status === 'loading' && (<div>Loading data...</div>) }
        
        { status === 'success' && (
            <>
            {/* Pagination */}
            <button 
                onClick={() => setPage(old => Math.max(old - 1, 1))}
                disabled={ page === 1 }    
            > &larr; </button>
            Page { page }
            <button 
                onClick={() => setPage(old => (!data || !data.next ? old : old + 1))}
                disabled={ !data || !data.next }
            > &rarr; </button>

            {/* Data */}
            { data.results.map((planet: PlanetModel) => <Planet key={planet.name} planet={planet} />) }
            </>
            ) 
        }        
        </>
    )
}

export default Planets;