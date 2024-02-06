import { useEffect, useState } from 'react'
import Person from './Person'

const List = () => {
    
    const [people, setPeople] = useState([]);
    const [isPending, setIsPanding] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{

        fetch('http://localhost:3000/users')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            setPeople(data);
            setIsPanding(false);
            setError(null)
        })

        
    },[]);

   

    return (

        <div className="list-container">
            <div className="list">      
             {
              !isPending && !error && people.map((pl)=>{ return <Person key={pl.id} person={pl} />})
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