import { useEffect, useState } from 'react'
import Person from './Person'
import SkeletonElement from '../../skeletons/SkeletonElement';
import SkelotonPeople from '../../skeletons/SkelotonPeople';

const List = () => {
    
    const [people, setPeople] = useState([]);
    const [isPending, setIsPanding] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{

      setTimeout(() => {
        
        fetch('http://localhost:3000/users')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            setPeople(data);
            setIsPanding(false);
            setError(null)
        })
      }, '8000');

        
    },[]);

   

    return (

        <div className="list-container">
            <div className="list">      
             {
              !isPending && !error && people.map((pl)=>{ return <Person key={pl.id} person={pl} />})
             }
             {
                isPending && [1,2,3].map((n)=>  <SkelotonPeople key={n}  />)
             }
             {
                error && <h2> Error: {error.massege} </h2>
             }
              
            </div>
        </div>
    )
}

export default List