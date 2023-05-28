import React, { useContext } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import todocontext from '../Context/todoContext';


const Signup = () => {
  const context = useContext(todocontext);
  const {setLogged} = context;
  const navigate = useNavigate();
  const clickSubmit = () =>{
    localStorage.setItem('entered','yes')
    setLogged('yes')
    navigate('/login');
  }
  return (
    <div className="container-of-login">
      <div className="login-box">
        <div className="image-box">
          <img src='https://img.freepik.com/free-vector/my-password-concept-illustration_114360-4294.jpg?w=826&t=st=1685218586~exp=1685219186~hmac=82cb80aff98376a7d505c936a54381def52479a588122e497ca901120eb98b16' alt="" />
        </div>
        <div className="login-form">
          <h2>Sign-Up to TaskHub</h2>
          <form onSubmit={clickSubmit}>
            <div className="row g-3 mb-3">
              <div class="col-md-6">
                <label for="text" class="form-label">Name</label>
                <input type="text" class="form-control" id="inputEmail4" required />
              </div>
              <div class="col-md-6">
                <label for="text" class="form-label">Caste</label>
                <input type="text" class="form-control" id="inputPassword4" placeholder='for discrimination' required />
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1 " aria-describedby="emailHelp" required />
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" required minLength={8} placeholder='atleast 8 characters'/>
            </div>
            <p>Already a member ? <Link to="/login" class="link-primary">Login</Link></p>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="invalidCheck2" required />
              <label class="form-check-label" for="invalidCheck2">I agree to Platform's   <Link to="#" class="link-secondary" style={{ textDecoration: 'none', color: 'orange' }}>Terms of Service</Link>and <Link to="#" class="link-secondary" style={{ textDecoration: 'none', color: 'orange' }}>Privacy Policy</Link></label>
            </div>
            <button type="submit" class="btn btn-primary lg-submit" >Create a new account</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup