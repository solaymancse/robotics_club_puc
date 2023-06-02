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
    <a className="navbar-brand brand-logo" href="index.html"><img src={logo} alt="logo" /></a>
    <a className="navbar-brand brand-logo-mini" href="index.html"><img src={logo} alt="logo" /></a>
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
        <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
          <div className="nav-profile-img">
            <img src={logo} alt="image"/>
            <span className="availability-status online"></span>
          </div>
          <div className="nav-profile-text">
            <p className="mb-1 text-black">Admin Panel</p>
          </div>
        </a>
        <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
          <a className="dropdown-item" href="#">
            <i className="mdi mdi-cached me-2 text-success"></i> Activity Log </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">
            <i className="mdi mdi-logout me-2 text-primary"></i> Signout </a>
        </div>
      </li>
      <li className="nav-item d-none d-lg-block full-screen-link">
        <a className="nav-link">
          <i className="mdi mdi-fullscreen" id="fullscreen-button"></i>
        </a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
        <AiOutlineMail/>
          <span className="count-symbol bg-warning"></span>
        </a>
        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
          <h6 className="p-3 mb-0">Messages</h6>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <img src="assets/images/faces/face4.jpg" alt="image" className="profile-pic"/>
            </div>
            <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a message</h6>
              <p className="text-gray mb-0"> 1 Minutes ago </p>
            </div>
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <img src="assets/images/faces/face2.jpg" alt="image" className="profile-pic"/>
            </div>
            <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Cregh send you a message</h6>
              <p className="text-gray mb-0"> 15 Minutes ago </p>
            </div>
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <img src="assets/images/faces/face3.jpg" alt="image" className="profile-pic"/>
            </div>
            <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Profile picture updated</h6>
              <p className="text-gray mb-0"> 18 Minutes ago </p>
            </div>
          </a>
          <div className="dropdown-divider"></div>
          <h6 className="p-3 mb-0 text-center">4 new messages</h6>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
          <AiOutlineBell/>
          <span className="count-symbol bg-danger"></span>
        </a>
        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
          <h6 className="p-3 mb-0">Notifications</h6>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <div className="preview-icon bg-success">
                <i className="mdi mdi-calendar"></i>
              </div>
            </div>
            <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 className="preview-subject font-weight-normal mb-1">Event today</h6>
              <p className="text-gray ellipsis mb-0"> Just a reminder that you have an event today </p>
            </div>
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <div className="preview-icon bg-warning">
                <i className="mdi mdi-settings"></i>
              </div>
            </div>
            <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 className="preview-subject font-weight-normal mb-1">Settings</h6>
              <p className="text-gray ellipsis mb-0"> Update dashboard </p>
            </div>
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <div className="preview-icon bg-info">
                <i className="mdi mdi-link-variant"></i>
              </div>
            </div>
            <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 className="preview-subject font-weight-normal mb-1">Launch Admin</h6>
              <p className="text-gray ellipsis mb-0"> New admin wow! </p>
            </div>
          </a>
          <div className="dropdown-divider"></div>
          <h6 className="p-3 mb-0 text-center">See all notifications</h6>
        </div>
      </li>
      <li className="nav-item nav-logout d-none d-lg-block">
        <a className="nav-link" href="#">
        <Tooltip title="logout" onClick={handleout}>
        <Link to="/login">
      <IconButton>
        <AiOutlinePoweroff size="16px"/>
      </IconButton>
        </Link>
    </Tooltip>
        </a>
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
