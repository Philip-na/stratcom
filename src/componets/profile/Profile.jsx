import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Profile = () => {

    const {user_id} = useParams();
    const [profileData, setProfileData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{

        fetch(`http://localhost:3000/users/${user_id}`)
        .then((response)=>{
         return response.json();
        })
        .then((data)=>{
            setProfileData(data);
            setIsPending(false);
            setError(null)
        })



    }, []);


  return (
    <div>

        <h2>{ profileData && profileData.name}</h2>
    </div>
  )
}

export default Profile