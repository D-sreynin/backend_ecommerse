import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
const AdminDah = () => {

    const userName = localStorage.getItem('name');
    const userEmail = localStorage.getItem('email');
  const navigate = useNavigate();
  const handleAuth = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        navigate('/login');
    }
};
    const handleLogout = () => {
      localStorage.removeItem('token'); // remove the token
      navigate('/'); // redirect to login
    };

useEffect(() => {
    handleAuth();
}, []);
  return (
    <div className="wrapper">
  {/* Sidebar */}
  <div className="sidebar" data-background-color="dark">
    <div className="sidebar-logo">
      {/* Logo Header */}
      <div className="logo-header" data-background-color="dark">
        <a href="index.html" className="logo">
          <img style={{width:"100px", height:"Auto", marginTop:"40px", marginLeft:"37px", borderRadius:"50px"}} src="img/2.png" alt="navbar brand" className="navbar-brand" height={20} />
        </a>
        <div className="nav-toggle">
          <button className="btn btn-toggle toggle-sidebar">
            <i className="gg-menu-right" />
          </button>
          <button className="btn btn-toggle sidenav-toggler">
            <i className="gg-menu-left" />
          </button>
        </div>
        <button className="topbar-toggler more">
          <i className="gg-more-vertical-alt" />
        </button>
      </div>
      {/* End Logo Header */}
    </div>
    <div style={{marginTop:"20px"}} className="sidebar-wrapper scrollbar scrollbar-inner">
      <div className="sidebar-content">
        <ul className="nav nav-secondary">
          <li className="nav-item active">
            <a data-bs-toggle="collapse" href="/administrator" className="collapsed" aria-expanded="false">
              <i className="fas fa-home" />
              <p>Dashboard</p>
            </a>
          </li>
          <li className="nav-section">
            <span className="sidebar-mini-icon">
              <i className="fa fa-ellipsis-h" />
            </span>
            <h4 className="text-section">Components</h4>
          </li>
          <li className="nav-item">
            <a  href="/users">
              <i className="fas fa-user" />
              <p>User</p>
            </a>
          </li>
          <li className="nav-item ">
            <a  href="/size">
              <i className="fas fa-ruler" />
              <p>Size</p>
            </a>
          </li>
          <li className="nav-item ">
            <a  href="/type">
              <i className="fas fa-shirt" />
              <p>Style</p>
            </a>
          </li>
          <li className="nav-item">
            <a  href="/product">
              <i className="fas fa-th-list" />
              <p>Product</p>
            </a>
          </li>
          <li className="nav-item">
            <a  onClick={handleLogout}>
              <i className="fas fa-store" />
              <p>E-Commerce</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/* End Sidebar */}
  <div className="main-panel">
    <div className="main-header">
      <div className="main-header-logo">
        {/* Logo Header */}
        <div className="logo-header" data-background-color="dark">
          <a href="index.html" className="logo">
            <img src="https://mr-organic.com/wp-content/uploads/2021/08/Mr-Organic-logo.png" alt="navbar brand" className="navbar-brand" height={20} />
          </a>
          <div className="nav-toggle">
            <button className="btn btn-toggle toggle-sidebar">
              <i className="gg-menu-right" />
            </button>
            <button className="btn btn-toggle sidenav-toggler">
              <i className="gg-menu-left" />
            </button>
          </div>
          <button className="topbar-toggler more">
            <i className="gg-more-vertical-alt" />
          </button>
        </div>
        {/* End Logo Header */}
      </div>
      {/* Navbar Header */}
      <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
            <div className="input-group">
              <div className="input-group-prepend">
                <button type="submit" className="btn btn-search pe-1">
                  <i className="fa fa-search search-icon" />
                </button>
              </div>
              <input type="text" placeholder="Search ..." className="form-control" />
            </div>
          </nav>
          <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
            <li className="nav-item topbar-icon dropdown hidden-caret d-flex d-lg-none">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" aria-haspopup="true">
                <i className="fa fa-search" />
              </a>
              <ul className="dropdown-menu dropdown-search animated fadeIn">
                <form className="navbar-left navbar-form nav-search">
                  <div className="input-group">
                    <input type="text" placeholder="Search ..." className="form-control" />
                  </div>
                </form>
              </ul>
            </li>
            <li className="nav-item topbar-icon dropdown hidden-caret">
              <a className="nav-link dropdown-toggle" href="#" id="messageDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-envelope" />
              </a>
              <ul className="dropdown-menu messages-notif-box animated fadeIn" aria-labelledby="messageDropdown">
                <li>
                  <div className="dropdown-title d-flex justify-content-between align-items-center">
                    Messages
                    <a href="#" className="small">Mark all as read</a>
                  </div>
                </li>
                <li>
                  <div className="message-notif-scroll scrollbar-outer">
                    <div className="notif-center">
                      <a href="#">
                        <div className="notif-img">
                          <img src="assets/img/tina.jpg" alt="Img Profile" />
                        </div>
                        <div className="notif-content">
                          <span className="subject">Jimmy Denis</span>
                          <span className="block"> How are you ? </span>
                          <span className="time">5 minutes ago</span>
                        </div>
                      </a>
                      <a href="#">
                        <div className="notif-img">
                          <img src="assets/img/tina.jpg" alt="Img Profile" />
                        </div>
                        <div className="notif-content">
                          <span className="subject">Chad</span>
                          <span className="block"> Ok, Thanks ! </span>
                          <span className="time">12 minutes ago</span>
                        </div>
                      </a>
                      <a href="#">
                        <div className="notif-img">
                          <img src="assets/img/tina.jpg" alt="Img Profile" />
                        </div>
                        <div className="notif-content">
                          <span className="subject">Jhon Doe</span>
                          <span className="block">
                            Ready for the meeting today...
                          </span>
                          <span className="time">12 minutes ago</span>
                        </div>
                      </a>
                      <a href="#">
                        <div className="notif-img">
                          <img src="assets/img/tina.jpg" alt="Img Profile" />
                        </div>
                        <div className="notif-content">
                          <span className="subject">Talha</span>
                          <span className="block"> Hi, Apa Kabar ? </span>
                          <span className="time">17 minutes ago</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <a className="see-all" href="javascript:void(0);">See all messages<i className="fa fa-angle-right" />
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item topbar-icon dropdown hidden-caret">
              <a className="nav-link dropdown-toggle" href="#" id="notifDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-bell" />
                <span className="notification">4</span>
              </a>
              <ul className="dropdown-menu notif-box animated fadeIn" aria-labelledby="notifDropdown">
                <li>
                  <div className="dropdown-title">
                    You have 4 new notification
                  </div>
                </li>
                <li>
                  <div className="notif-scroll scrollbar-outer">
                    <div className="notif-center">
                      <a href="#">
                        <div className="notif-icon notif-primary">
                          <i className="fa fa-user-plus" />
                        </div>
                        <div className="notif-content">
                          <span className="block"> New user registered </span>
                          <span className="time">5 minutes ago</span>
                        </div>
                      </a>
                      <a href="#">
                        <div className="notif-icon notif-success">
                          <i className="fa fa-comment" />
                        </div>
                        <div className="notif-content">
                          <span className="block">
                            Rahmad commented on Admin
                          </span>
                          <span className="time">12 minutes ago</span>
                        </div>
                      </a>
                      <a href="#">
                        <div className="notif-img">
                          <img src="assets/img/profile2.jpg" alt="Img Profile" />
                        </div>
                        <div className="notif-content">
                          <span className="block">
                            Reza send messages to you
                          </span>
                          <span className="time">12 minutes ago</span>
                        </div>
                      </a>
                      <a href="#">
                        <div className="notif-icon notif-danger">
                          <i className="fa fa-heart" />
                        </div>
                        <div className="notif-content">
                          <span className="block"> Farrah liked Admin </span>
                          <span className="time">17 minutes ago</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <a className="see-all" href="javascript:void(0);">See all notifications<i className="fa fa-angle-right" />
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item topbar-icon dropdown hidden-caret">
              <a className="nav-link" data-bs-toggle="dropdown" href="#" aria-expanded="false">
                <i className="fas fa-layer-group" />
              </a>
              <div className="dropdown-menu quick-actions animated fadeIn">
                <div className="quick-actions-header">
                  <span className="title mb-1">Quick Actions</span>
                  <span className="subtitle op-7">Shortcuts</span>
                </div>
                <div className="quick-actions-scroll scrollbar-outer">
                  <div className="quick-actions-items">
                    <div className="row m-0">
                      <a className="col-6 col-md-4 p-0" href="#">
                        <div className="quick-actions-item">
                          <div className="avatar-item bg-danger rounded-circle">
                            <i className="far fa-calendar-alt" />
                          </div>
                          <span className="text">Calendar</span>
                        </div>
                      </a>
                      <a className="col-6 col-md-4 p-0" href="#">
                        <div className="quick-actions-item">
                          <div className="avatar-item bg-warning rounded-circle">
                            <i className="fas fa-map" />
                          </div>
                          <span className="text">Maps</span>
                        </div>
                      </a>
                      <a className="col-6 col-md-4 p-0" href="#">
                        <div className="quick-actions-item">
                          <div className="avatar-item bg-info rounded-circle">
                            <i className="fas fa-file-excel" />
                          </div>
                          <span className="text">Reports</span>
                        </div>
                      </a>
                      <a className="col-6 col-md-4 p-0" href="#">
                        <div className="quick-actions-item">
                          <div className="avatar-item bg-success rounded-circle">
                            <i className="fas fa-envelope" />
                          </div>
                          <span className="text">Emails</span>
                        </div>
                      </a>
                      <a className="col-6 col-md-4 p-0" href="#">
                        <div className="quick-actions-item">
                          <div className="avatar-item bg-primary rounded-circle">
                            <i className="fas fa-file-invoice-dollar" />
                          </div>
                          <span className="text">Invoice</span>
                        </div>
                      </a>
                      <a className="col-6 col-md-4 p-0" href="#">
                        <div className="quick-actions-item">
                          <div className="avatar-item bg-secondary rounded-circle">
                            <i className="fas fa-credit-card" />
                          </div>
                          <span className="text">Payments</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item topbar-user dropdown hidden-caret">
              <a className="dropdown-toggle profile-pic" data-bs-toggle="dropdown" href="#" aria-expanded="false">
                <div className="avatar-sm">
                  <img src="img/tina.jpg" alt="..." className="avatar-img rounded-circle" />
                </div>
                <span className="profile-username">
                  <span className="op-7">Hi, </span>
                  <span className="fw-bold">{userName}</span>
                </span>
              </a>
              <ul className="dropdown-menu dropdown-user animated fadeIn">
                <div className="dropdown-user-scroll scrollbar-outer">
                  <li>
                    <div className="user-box">
                      <div className="avatar-lg">
                        <img src="img/tina.jpg" alt="image profile" className="avatar-img rounded" />
                      </div>
                      <div className="u-text">
                        <h4>{userName}</h4>
                        <p className="text-muted">{userEmail}</p>
                        <a href="profile.html" className="btn btn-xs btn-secondary btn-sm">View Profile</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">My Profile</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Account Setting</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href=".">Log out</a>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </div>
    <div className="container">
      <div className="page-inner">
        <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4">
          <div>
            <h3 className="fw-bold mb-3">Dashboard</h3>
            <h6 className="op-7 mb-2">Rothana Admin Dashboard</h6>
          </div>
          <div className="ms-md-auto py-2 py-md-0">
            <a href="#" className="btn btn-label-info btn-round me-2">Manage</a>
            <a href="#" className="btn btn-primary btn-round">Add Customer</a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div className="card card-stats card-round">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-icon">
                    <div className="icon-big text-center icon-primary bubble-shadow-small">
                      <i className="fas fa-users" />
                    </div>
                  </div>
                  <div className="col col-stats ms-3 ms-sm-0">
                    <div className="numbers">
                      <p className="card-category">Visitors</p>
                      <h4 className="card-title">1,294</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="card card-stats card-round">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-icon">
                    <div className="icon-big text-center icon-info bubble-shadow-small">
                      <i className="fas fa-user-check" />
                    </div>
                  </div>
                  <div className="col col-stats ms-3 ms-sm-0">
                    <div className="numbers">
                      <p className="card-category">Subscribers</p>
                      <h4 className="card-title">1303</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="card card-stats card-round">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-icon">
                    <div className="icon-big text-center icon-success bubble-shadow-small">
                      <i className="fas fa-luggage-cart" />
                    </div>
                  </div>
                  <div className="col col-stats ms-3 ms-sm-0">
                    <div className="numbers">
                      <p className="card-category">Sales</p>
                      <h4 className="card-title">$ 1,345</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="card card-stats card-round">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-icon">
                    <div className="icon-big text-center icon-secondary bubble-shadow-small">
                      <i className="far fa-check-circle" />
                    </div>
                  </div>
                  <div className="col col-stats ms-3 ms-sm-0">
                    <div className="numbers">
                      <p className="card-category">Order</p>
                      <h4 className="card-title">576</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="card card-round">
              <div className="card-header">
                <div className="card-head-row">
                  <div className="card-title">User Statistics</div>
                  <div className="card-tools">
                    <a href="#" className="btn btn-label-success btn-round btn-sm me-2">
                      <span className="btn-label">
                        <i className="fa fa-pencil" />
                      </span>
                      Export
                    </a>
                    <a href="#" className="btn btn-label-info btn-round btn-sm">
                      <span className="btn-label">
                        <i className="fa fa-print" />
                      </span>
                      Print
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-primary card-round">
              <div className="card-header">
                <div className="card-head-row">
                  <div className="card-title">Daily Sales</div>
                  <div className="card-tools">
                    <div className="dropdown">
                      <button className="btn btn-sm btn-label-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Export
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-category">March 25 - April 02</div>
              </div>
              <div className="card-body pb-0">
                <div className="mb-4 mt-2">
                  <h1>$4,578.58</h1>
                </div>
                <div className="pull-in">
                  <canvas id="dailySalesChart" />
                </div>
              </div>
            </div>
            <div className="card card-round">
              <div className="card-body pb-0">
                <div className="h1 fw-bold float-end text-primary">+5%</div>
                <h2 className="mb-2">17</h2>
                <p className="text-muted">Users online</p>
                <div className="pull-in sparkline-fix">
                  <div id="lineChart" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

  )
}

export default AdminDah