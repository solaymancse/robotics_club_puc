import { AiOutlineBell, AiOutlineMail, AiOutlineMenu, AiOutlinePoweroff, AiOutlineSearch } from 'react-icons/ai';
import { MdFormatLineSpacing } from 'react-icons/md';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

import './Dashboard.css';
import logo from '../../images/logo.jpg'

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
axios.defaults.withCredentials = true


export const Navbar = () => {
  const dispatch = useDispatch();

  const sendLogoutReq = async ()=> {
    const res = await axios.get('/logout',null,{
      withCredentials: true,
    });
    if( res.status == 200){
      return res;
    }
   
    return new Error("Unable to Logout.Please try again.")
  }

  const handleout = ()=>{
    sendLogoutReq().then(()=> dispatch(authActions.logout())).then(()=> {
        Swal.fire(
          "Successfully Logout",
          '',
          'success'
        )

      
    })
  }


  return (
    <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
  <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
    <a className="navbar-brand brand-logo" href="#"><img src={logo} alt="logo" /></a>
    <a className="navbar-brand brand-logo-mini" href="#"><img src={logo} alt="logo" /></a>
  </div>
  <div className="navbar-menu-wrapper d-flex align-items-stretch">
    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
      <span className="mdi mdi-menu">
        <AiOutlineMenu/>
      </span>
    </button>
    <div className="search-field d-none d-md-block">
      <form className="d-flex align-items-center h-100" action="#">
        <div className="input-group">
          <div className="input-group-prepend bg-transparent d-flex align-items-center">
           <AiOutlineSearch/>
          </div>
          <input type="text" className="form-control bg-transparent border-0" placeholder="Search projects"/>
        </div>
      </form>
    </div>
    <ul className="navbar-nav navbar-nav-right">
      <li className="nav-item nav-profile dropdown">
        <a className="nav-link " id="profileDropdown" href="#" >
          <div className="nav-profile-img">
            <img src={logo} alt="image"/>
          </div>
        </a>
      </li>
      <li className="nav-item d-none d-lg-block full-screen-link">
        <a className="nav-link"  href="#">
          <i className="mdi mdi-fullscreen" id="fullscreen-button"></i>
        </a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link count-indicator" id="messageDropdown" href="#" >
        <AiOutlineMail/>
          <span className="count-symbol bg-warning"></span>
        </a>

      </li>
      <li className="nav-item dropdown">
        <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
          <AiOutlineBell/>
          <span className="count-symbol bg-danger"></span>
        </a>
   
      </li>
      <li className="nav-item nav-logout d-none d-lg-block">
        <Link className="nav-link" to="/login">
        <Tooltip title="logout" onClick={handleout}>
        
      <IconButton>
        <AiOutlinePoweroff size="16px"/>
      </IconButton>
        
    </Tooltip>
        </Link>
      </li>
      <li className="nav-item nav-settings d-none d-lg-block">
        <a className="nav-link" href="#">
         <MdFormatLineSpacing/>
        </a>
      </li>
    </ul>
    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
      <span className="mdi mdi-menu"></span>
    </button>
  </div>
</nav>
  )
}
