
const Sigup = () => {




  return (
    <div className="auth-container">

      <div className="auth-left">
        Wellocom to Our site
      </div>

      <div className="auth-rigt">
        <form >
          <div className="input">
            <label htmlFor="username">Usernme</label>
            <input type="text" id="username"  />
          </div>

          <div className="input">
            <label htmlFor="fulName">FullName</label>
            <input type="text" id="Fullname"  />
          </div>

          <div className="input">
            <label htmlFor="description">Describition</label>
            <textarea name="description" id="description" cols="30" rows="10"></textarea>
          </div>
          <div className="input">
            <label htmlFor="password">Password</label>
            <input type="password" id="password"  />
          </div>
          <div className="input">
            <label htmlFor="cpassword">Confem Password</label>
            <input type="cpassword" id="cpassword"  />
          </div>
          <button>Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default Sigup