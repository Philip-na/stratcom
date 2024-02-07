import { useEffect, useState } from 'react'
import Person from './Person'
import axiosInstance from '../../assets/axioxApi';

const List = () => {
    
    const [people, setPeople] = useState([]);
    const [isPending, setIsPanding] = useState(true);
    const [error, setError] = useState(null);


    const getData = async ()=>{

      try {

        const res = await axiosInstance.get('users');
        setPeople(res.data);
        setIsPanding(false);


      }catch(err){

        setIsPanding(false);
        setError(err.message);

      }

    }



    useEffect(()=>{

        getData()
     
        
    },[]);

   

    return (

        <div className="list-container">
            <div className="list">      
             {
              !isPending && !error && people.map((pl)=>{ return <Person key={pl.id} person={pl} />})
             }
             {
                isPending && <h2>Loading ..</h2>
             }
             {
                error && <h2> Error: {error} </h2>
             }


              
            </div>
        </div>
    )
}

export default List