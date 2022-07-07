import { FC, useEffect, useState } from "react";
import { PersonModel } from "../models/person.model";
import { fetchPeople } from "../utils/api.util";
import Person from "./Person";


const People: FC = () => {

    const [ data, setData ] = useState([]);
    const [isLoading, setIsLoading ] = useState(true);

    // TODO 4 : Utilizza la libreria react-query per effettuare il fetching dei dati
    
    // Utilizzare l'hook useEffect per il fetching dei dati è sconsigliato
    // se provi ad aprire il terminale vedrai che il console log viene effettuato due volte
    
    // TIP: scommenta il QueryClientProvider in _app.tsx per poter usare la libreria

    useEffect(() => {

        fetchPeople().then(res => {
            console.log(res.results);
            setData(res.results);
            setIsLoading(false);
        });

    }, [])

    return (
        <> 
        <h2>People</h2>

        { isLoading && <>Loading...</> }

        {
            data &&
            data.map((person: PersonModel) => 
            <Person key={person.name} person={person} />)
        }
        
        </>
    )
}

export default People;