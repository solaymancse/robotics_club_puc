import  '../Dashboard.css';
import logo from '../../../images/logo.jpg'
import { Link, useNavigate } from 'react-router-dom';


export const Login = () => {
    const {navigate} = useNavigate();
  return (
    <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth">
        <div class="row flex-grow">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left p-5">
              <div class="brand-logo">
                <img src={logo} alt=""/>
              <h4>Hello! let's get started</h4>
              <h6 class="font-weight-light">Log in to continue.</h6>
              </div>
              <form class="pt-3">
                <div class="form-group">
                  <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username"/>
                </div>
                <div class="form-group">
                  <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div class="mt-3">
                  <Link class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" to='/dashboard'>SIGN IN</Link>
                </div>
                <div class="my-2 d-flex justify-content-between align-items-center">
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input"/> Keep me signed in </label>
                  </div>
                  <a href="#" class="auth-link text-black">Forgot password?</a>
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
