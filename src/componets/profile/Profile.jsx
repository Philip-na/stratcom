import { useEffect, useState } from "react";
import { MdBookmarkAdd, MdMessage, MdOutlineImportantDevices, MdPin, MdTag } from "react-icons/md";
import { Link, useParams } from "react-router-dom"
import './profile.css';

const Profile = () => {
  const { user_id } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users/${user_id}`);
      const data = await response.json();
      setProfileData(data);
      setIsPending(false);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsPending(false);
      setError("Error fetching data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="profile">
      <div className="left">
        {profileData && <img src={profileData.profile_img} alt={profileData.name} />}
      </div>

      <div className="right">
        <h2>{profileData && profileData.name}</h2>
        <p>{profileData && profileData.description && profileData.description}</p>
        

        <div className="action">
          <Link to={`/message/${user_id}/${profileData?.name}`}><span><MdMessage size={30} /></span></Link>
          <span><MdBookmarkAdd size={30} /></span>
        </div>
      </div>
    </div>
  );
};

export default Profile;