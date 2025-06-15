import React, { useEffect, useState } from 'react';
import http from '../http';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Users = () => {

    const userName = localStorage.getItem('name');
    const userEmail = localStorage.getItem('email');
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [userForm, setUserForm] = useState({
      name: '',
      email: '',
      password: '',
    });
  const fetchAllUsers = () => {
    http
      .get('/users')
      .then((res) => {
        setUsers(res.data);
        console.log(res.data, 'data');
      })
      .catch((err) => console.log(err));
  };

  // Fetch user data for editing
  const handleEdit = (user) => {
    setSelectedUser(user);
    setUserForm({
      name: user.name,
      email: user.email,
      password: '', 
    });
  };

  // Handle update user
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUser = {
      name: userForm.name,
      email: userForm.email,
      password: userForm.password || undefined, 
    };

    http
      .put(`/users/${selectedUser.id}`, updatedUser)
      .then((res) => {
        console.log('User updated:', res.data);
        fetchAllUsers(); // Re-fetch the updated list of users
        setSelectedUser(null); // Close the edit form
      })
      .catch((err) => console.log('Error updating user:', err));
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  useEffect(() => {
    fetchAllUsers();
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
          <li className="nav-item ">
            <a  href="/administator"  >
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
          <li className="nav-item active">
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
        </ul>
      </div>
    </div>
  </div>
  {/* End Sidebar */}
  <div className="main-panel">
    <div className="main-header">
      <div className="main-header-logo">
        {/* Logo Header */}

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
                    <a className="dropdown-item" href="#">Logout</a>
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
            <h3 className="fw-bold mb-3">User Management</h3>
            <h6 className="op-7 mb-2">By Rothana</h6>
          </div>
          <div className="ms-md-auto py-2 py-md-0">
            <a href="#" className="btn btn-label-info btn-round me-2">Manage</a>
            <a href="/createuser" className="btn btn-primary btn-round">Add User</a>
          </div>
        </div>
        <div>
        <div>
      <h1 className="text-2xl font-semibold mb-4">All Users</h1>
      <div>
        <table className="min-w-full table-auto bg-white border border-dark-200 rounded-lg shadow-md" style={{width:"100%"}}>
          <thead>
            <tr className="bg-gray-100 text-center text-sm font-medium text-gray-700">
              <th className="px-4 py-3 border-b" style={{fontSize:"20px"}}>Action</th>
              <th className="px-4 py-3 border-b"style={{fontSize:"20px"}}>ID</th>
              <th className="px-4 py-3 border-b"style={{fontSize:"20px"}}>Name</th>
              <th className="px-4 py-3 border-b"style={{fontSize:"20px"}}>Email</th>
              <th className="px-4 py-3 border-b"style={{fontSize:"20px"}}>Created At</th>
              <th className="px-4 py-3 border-b"style={{fontSize:"20px"}}>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50" style={{textAlign:"center"}}>
                <td className="px-4 py-3 border-b">
                  <button
                    className="text-blue-500 hover:text-blue-700" style={{ color:"black", borderRadius:"7px", border:"none"}}
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                </td>
                <td className="px-4 py-3 border-b" >{user.id}</td>
                <td className="px-4 py-3 border-b">{user.name}</td>
                <td className="px-4 py-3 border-b">{user.email}</td>
                <td className="px-4 py-3 border-b">{user.created_at.slice(0, 10)}</td>
                <td className="px-4 py-3 border-b">{user.updated_at.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update User Form */}
      {selectedUser && (
        <div style={{marginTop:"30px"}}>
          <h2 className="text-xl font-semibold">Edit User</h2>
          <form onSubmit={handleUpdate} className="space-y-4">
          <div style={{marginTop:"10px"}}>
              <label className="block text-sm font-medium text-gray-700" style={{padding:"10px"}}>Name</label>
              <input
                type="text"
                name="name"
                value={userForm.name}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div style={{marginTop:"10px"}}>
              <label className="block text-sm font-medium text-gray-700"style={{padding:"10px"}}>Email</label>
              <input
                type="email"
                name="email"
                value={userForm.email}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div style={{marginTop:"10px"}}>
              <label className="block text-sm font-medium text-gray-700"style={{padding:"10px"}}>Password</label>
              <input
                type="password"
                name="password"
                value={userForm.password}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <button type="submit" className="px-4 py-2 bg-blue-500 rounded-md mt-3" style={{backgroundColor:"green", color:"white", borderRadius:"7px", border:"none"}}>
                Update User
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
        </div>
      </div>
    </div>
  </div>

</div>

  )
}

export default Users