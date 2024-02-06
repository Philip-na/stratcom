import { useState } from 'react'
import Person from './Person'
import data from '../../assets/data';
const List = () => {
    
    const [people, setPeople] = useState(data);
    const [isPending, setIsPanding] = useState(false);
    const [error, setError] = useState(null);

    


    return (

        <div className="list-container">
            <div className="list">      
             {
              !isPending && !error && people.map((pl)=>{ return <Person person={pl} />})
             }
             {
                isPending && <h2>Loading data....</h2>
             }
             {
                error && <h2> Error: {error.massege} </h2>
             }
              
            </div>
        </div>
    )
}

export default List