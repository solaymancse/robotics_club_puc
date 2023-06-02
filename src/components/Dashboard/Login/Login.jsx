import  '../Dashboard.css';
import logo from '../../../images/logo.jpg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../store';
import Swal from 'sweetalert2'

export const Login = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({
      email:"",
      password:"",
    });
    const {email,password} = user;
    const handleChange = (e)=> {
      setUser({...user, [e.target.name]:e.target.value});
    }
    const adminLogin = async ()=> {
      const res = await axios.post('/login',{
        email,
        password,
      }).catch((err)=> console.log(err));
      const data = await res.data;
      console.log(data.msg);
      return data;
      
    }
    const handleSubmit = (e)=> {
      e.preventDefault();

    

      adminLogin().then(()=> dispatch(authActions.login())).then(()=> {
        navigate('/dashboard');
        Swal.fire(
          'Welcome to Dashboard',
          '',
          'success'
        )
      }).catch((err)=>{
        Swal.fire(
         "Invaild Email or Password",
         '',
          'error'
        )
      });
  
    }
    
  return (
    <div className="container-scroller">
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-center auth">
        <div className="row flex-grow">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left p-5">
              <div className="brand-logo">
                <img src={logo} alt=""/>
              <h4>Hello! let's get started</h4>
              <h6 className="font-weight-light">Log in to continue.</h6>
              </div>
              <form className="pt-3" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username" value={email} name='email' onChange={handleChange}/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" value={password} name='password' onChange={handleChange}/>
                </div>
                <div className="mt-3">
                  <button className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" type='submit'>SIGN IN</button>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input"/> Keep me signed in </label>
                  </div>
                  <a href="#" className="auth-link text-black">Forgot password?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
   
    </div>
 
  </div>
  )
}
