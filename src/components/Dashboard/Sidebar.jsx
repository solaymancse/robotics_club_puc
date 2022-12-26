import './Dashboard.css';
import logo from '../../images/logo.jpg'
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
export const Sidebar = () => {
  return (
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
  <ul class="nav">
    <li class="nav-item nav-profile">
      <a href="#" class="nav-link">
        <div class="nav-profile-image">
          <img src={logo} alt="profile"/>
          <span class="login-status online"></span>
          {/* <!--change to offline or busy as needed--> */}
        </div>
        <div class="nav-profile-text d-flex flex-column">
          <span class="font-weight-bold mb-2">David Grey. H</span>
          <span class="text-secondary text-small">Project Manager</span>
        </div>
        <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
      </a>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="/dashboard">
        <span class="menu-title">Dashboard</span>
        <AiFillHome/>
      </Link>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
        <span class="menu-title">Basic UI Elements</span>
        <i class="menu-arrow"></i>
        <i class="mdi mdi-crosshairs-gps menu-icon"></i>
      </a>
      <div class="collapse" id="ui-basic">
        <ul class="nav flex-column sub-menu">
          <li class="nav-item"> <a class="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
          <li class="nav-item"> <a class="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
        </ul>
      </div>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="/dashboard/event">
        <span class="menu-title">Events</span>
        <i class="mdi mdi-contacts menu-icon"></i>
      </Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="/dashboard/committee">
        <span class="menu-title">Execute Committee</span>
        <i class="mdi mdi-format-list-bulleted menu-icon"></i>
      </Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="/dashboard/gallary">
        <span class="menu-title">Gallary</span>
        <i class="mdi mdi-format-list-bulleted menu-icon"></i>
      </Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="/dashboard/members">
        <span class="menu-title">Members</span>
        <i class="mdi mdi-format-list-bulleted menu-icon"></i>
      </Link>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="pages/charts/chartjs.html">
        <span class="menu-title">Charts</span>
        <i class="mdi mdi-chart-bar menu-icon"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="pages/tables/basic-table.html">
        <span class="menu-title">Tables</span>
        <i class="mdi mdi-table-large menu-icon"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
        <span class="menu-title">Sample Pages</span>
        <i class="menu-arrow"></i>
        <i class="mdi mdi-medical-bag menu-icon"></i>
      </a>
      <div class="collapse" id="general-pages">
        <ul class="nav flex-column sub-menu">
          <li class="nav-item"> <a class="nav-link" href="pages/samples/blank-page.html"> Blank Page </a></li>
          <li class="nav-item"> <a class="nav-link" href="pages/samples/login.html"> Login </a></li>
          <li class="nav-item"> <a class="nav-link" href="pages/samples/register.html"> Register </a></li>
          <li class="nav-item"> <a class="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
          <li class="nav-item"> <a class="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
        </ul>
      </div>
    </li>
    <li class="nav-item sidebar-actions">
      <span class="nav-link">
        <div class="border-bottom">
          <h6 class="font-weight-normal mb-3">Projects</h6>
        </div>
        <button class="btn btn-block btn-lg btn-gradient-primary mt-4">+ Add a project</button>
      </span>
    </li>
  </ul>
</nav>
  )
}
