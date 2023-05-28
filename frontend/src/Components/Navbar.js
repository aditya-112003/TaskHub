import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import todocontext from '../Context/todoContext';

const Navbar = () => {
  const context = useContext(todocontext);
  const {logged , setLogged} = context;
  const handleOnclick = () =>{
    localStorage.removeItem('entered')
    setLogged('');
    console.log(localStorage.getItem('entered'))
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#"><i className="fa-regular fa-calendar-check mx-2 mx-0 p-0"></i> <button type="button" className="btn btn-dark p-1 rounded-3"><button type="button" className="btn btn-dark m-0 p-0 "><strong>Task</strong></button><button type="button" className="btn  m-0 p-1" style={{ backgroundColor: '#ffa31a' }}><strong className='text-light'>Hub</strong></button></button></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link hidden={!logged} className="nav-link active" aria-current="page" to="/">Today's Task </Link>
              </li>
              <li className="nav-item">
                <Link hidden={!logged} className="nav-link active" aria-current="page" to="/about">Sup Motherfucker </Link>
              </li>
            </ul>
            <form className="d-flex flex-row-reverse" role="search">
              <Link className="btn btn-outline-success" to="/login" onClick={handleOnclick}>Log-Out</Link>
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link className="nav-link active  mx-2" aria-current="page" to="#">Aditya Upadhyay</Link>
                </li>
              </ul>
              <img src="https://picsum.photos/536/354" className="rounded-circle mx-1" style={{ width: '7%', height: '7%' }} alt="..." />
            </form>
          </div>
        </div>

      </nav>
    </div>
  )
}

export default Navbar