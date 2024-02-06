import { Link } from "react-router-dom";

const Person = ({ person }) => {
  return (
    <div className="person">
      <div className="img">
        <img src={person.blog_img} alt="" />
      </div>

      <div className="detials">
        <div className="sm-img">
          <img src={person?.profile_img} alt="" />
        </div>

        <div>
          <Link to={`/profile/${person.id}`}>
            <h2>{person?.name}</h2>
          </Link>
          <p>{person?.description} </p>
        </div>
      </div>
    </div>
  );
};

export default Person;
