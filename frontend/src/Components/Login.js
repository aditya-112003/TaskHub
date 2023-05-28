import React, { useContext } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import todocontext from '../Context/todoContext'


const Login = () => {
  const context = useContext(todocontext);
  const {setLogged} = context;
  const navigate = useNavigate();
  const clickSubmit = () =>{
    localStorage.setItem('entered','yes')
    setLogged('yes')
    console.log(localStorage.getItem('entered'))
    navigate('/');
  }

  return (
    <div className="container-of-login">
      <div className="login-box">
        <div className="image-box">
          <img src='https://img.freepik.com/free-vector/my-password-concept-illustration_114360-4294.jpg?w=826&t=st=1685218586~exp=1685219186~hmac=82cb80aff98376a7d505c936a54381def52479a588122e497ca901120eb98b16' alt="" />
        </div>
        <div className="login-form">
          <h2>Sign-In to TaskHub</h2>
          <form style={{width : '375px'}} onSubmit={clickSubmit}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1 " aria-describedby="emailHelp" required/>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder='atleast 8 characters' minLength={8} required/>
            </div>
            <p>Not a member yet ? <Link to="/signup" class="link-primary">Sign up</Link> now</p>
            <button type="submit" class="btn btn-primary lg-submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login