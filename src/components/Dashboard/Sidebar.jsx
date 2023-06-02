import './Dashboard.css';
import logo from '../../images/logo.jpg'
import { AiFillHome } from 'react-icons/ai';
import { MdEventAvailable } from 'react-icons/md';
import { FaUsers,FaUser } from 'react-icons/fa';
import { BiPhotoAlbum } from 'react-icons/bi';
import { CgWorkAlt } from 'react-icons/cg';
import { Link } from 'react-router-dom';
export const Sidebar = () => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
  <ul className="nav">
    <li className="nav-item nav-profile">
      <a href="#" className="nav-link">
        <div className="nav-profile-image">
          <img src={logo} alt="profile"/>
          <span className="login-status online"></span>
          {/* <!--change to offline or busy as needed--> */}
        </div>
        <div className="nav-profile-text d-flex flex-column">
          <span className="font-weight-bold mb-2">David Grey. H</span>
          <span className="text-secondary text-small">Project Manager</span>
        </div>
        <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
      </a>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/dashboard">
        <span className="menu-title">Dashboard</span>
        <i className="mdi mdi-contacts menu-icon"><AiFillHome/></i>
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/dashboard/notice">
        <span className="menu-title">Notice</span>
        <i className="mdi mdi-contacts menu-icon"><MdEventAvailable/></i>
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/dashboard/event">
        <span className="menu-title">Events</span>
        <i className="mdi mdi-contacts menu-icon"><MdEventAvailable/></i>
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/dashboard/committee">
        <span className="menu-title">Execute Committee</span>
        <i className="mdi mdi-format-list-bulleted menu-icon"><FaUsers/></i>
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/dashboard/gallary">
        <span className="menu-title">Gallary</span>
        <i className="mdi mdi-format-list-bulleted menu-icon"><BiPhotoAlbum/></i>
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/dashboard/members">
        <span className="menu-title">Members</span>
        <i className="mdi mdi-format-list-bulleted menu-icon"><FaUser/></i>
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/dashboard/achivement">
        <span className="menu-title">Achivement</span>
        <i className="mdi mdi-format-list-bulleted menu-icon"><CgWorkAlt/></i>
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/dashboard/prc">
        <span className="menu-title">Project & Research</span>
        <i className="mdi mdi-format-list-bulleted menu-icon"><CgWorkAlt/></i>
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/dashboard/seminer">
        <span className="menu-title">Seminer & Workshop</span>
        <i className="mdi mdi-format-list-bulleted menu-icon"><CgWorkAlt/></i>
      </Link>
    </li>


  </ul>
</nav>
  )
}
