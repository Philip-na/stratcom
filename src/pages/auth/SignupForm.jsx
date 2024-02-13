import { useState } from "react";
import axiosInstance from "../../assets/axioxApi";

const SignupForm = () => {

  const [username, setUsername] = useState("");
  const [fulName, setFulName] = useState("");
  const [description, setDes] = useState('');
  const [password, setPass] = useState('');
  const [cpassword, setCPass] = useState('');

  const handelUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeName = (e) => {
    setFulName(e.target.value);
  };
  const handleChangeDesc = (e) => {
    setDes(e.target.value);
  };
  const handleChangePass = (e) => {
    setPass(e.target.value);
  };
  const handleChangeCPass = (e) => {
    setCPass(e.target.value);
  };


  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {name: fulName,description:description,username: username,password:password,profile_img:'./images/hero.png',blog_img:'./images/hero.png'};
    const res = axiosInstance.post('users',data);

  }




  return (
    <form onSubmit={handleSubmit}>
      <div className="input">
        <label htmlFor="username">Usernme</label>
        <input
          value={username}
          type="text"
          id="username"
          onChange={handelUsernameChange}
        />
      </div>

      <div className="input">
        <label htmlFor="fulName">FullName</label>
        <input value={fulName} onChange={handleChangeName}  type="text" id="Fullname" />
      </div>

      <div className="input">
        <label htmlFor="description">Describition</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="4"
          onChange={handleChangeDesc}
        ></textarea>
      </div>
      <div className="input">
        <label htmlFor="password">Password</label>
        <input 
        type="password" 
        id="password" 
        value={password}
        onChange={handleChangePass}
        />
      </div>
      <div className="input">
        <label htmlFor="cpassword">Confem Password</label>
        <input 
        type="cpassword" 
        id="cpassword" 
        value={cpassword}
        onChange={handleChangeCPass}
        
        />
      </div>
      <button>Create Account</button>
      <h1>{username}</h1>
      <h2>{fulName}</h2>
      <h2>{description}</h2>
      <h2>{password}</h2>
      <h2>{cpassword}</h2>

    </form>
  );
};

export default SignupForm;
