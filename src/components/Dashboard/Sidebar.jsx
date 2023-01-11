import './Dashboard.css';
import logo from '../../images/logo.jpg'
import { AiFillHome } from 'react-icons/ai';
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
        <AiFillHome/>
      </Link>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
        <span className="menu-title">Basic UI Elements</span>
        <i className="menu-arrow"></i>
        <i className="mdi mdi-crosshairs-gps menu-icon"></i>
      </a>
      <div className="collapse" id="ui-basic">
        <ul className="nav flex-column sub-menu">
          <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
          <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
        </ul>
      </div>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/dashboard/event">
        <span className="menu-title">Events</span>
        <i className="mdi mdi-contacts menu-icon"></i>
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/dashboard/committee">
        <span className="menu-title">Execute Committee</span>
        <i className="mdi mdi-format-list-bulleted menu-icon"></i>
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/dashboard/gallary">
        <span className="menu-title">Gallary</span>
        <i className="mdi mdi-format-list-bulleted menu-icon"></i>
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/dashboard/members">
        <span className="menu-title">Members</span>
        <i className="mdi mdi-format-list-bulleted menu-icon"></i>
      </Link>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="pages/charts/chartjs.html">
        <span className="menu-title">Charts</span>
        <i className="mdi mdi-chart-bar menu-icon"></i>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="pages/tables/basic-table.html">
        <span className="menu-title">Tables</span>
        <i className="mdi mdi-table-large menu-icon"></i>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
        <span className="menu-title">Sample Pages</span>
        <i className="menu-arrow"></i>
        <i className="mdi mdi-medical-bag menu-icon"></i>
      </a>
      <div className="collapse" id="general-pages">
        <ul className="nav flex-column sub-menu">
          <li className="nav-item"> <a className="nav-link" href="pages/samples/blank-page.html"> Blank Page </a></li>
          <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
          <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
          <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
          <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
        </ul>
      </div>
    </li>
    <li className="nav-item sidebar-actions">
      <span className="nav-link">
        <div className="border-bottom">
          <h6 className="font-weight-normal mb-3">Projects</h6>
        </div>
        <button className="btn btn-block btn-lg btn-gradient-primary mt-4">+ Add a project</button>
      </span>
    </li>
  </ul>
</nav>
  )
}
