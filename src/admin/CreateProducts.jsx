import React, { useEffect, useState } from 'react';
import http from '../http';
import '@fortawesome/fontawesome-free/css/all.min.css';
const CreateProduct = () => {

    const userName = localStorage.getItem('name');
    const userEmail = localStorage.getItem('email');
    const [formData, setFormData] = useState({
      name: '',
      description: '',
      price: '',
      size_id: '',
      type_id: ''
    });
  const [sizes, setSizes] = useState([]);
  const [types, setTypes] = useState([]);
  useEffect(() => {
    http.get('/sizes').then(res => {
    console.log("Sizes response:", res.data.data);
    setSizes(res.data.data);
  });
    http.get('/types').then(res => setTypes(res.data.data));
  }, []);


    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      http.post('/products', formData)
        .then(response => {
          console.log('Product Created:', response.data);
          alert("Product Created");
        })
        .catch(error => {
          console.error('Error creating product:', error);
        });
    };


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
          <li className="nav-item ">
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
          <li className="nav-item active">
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
        <div className="logo-header" data-background-color="dark">
          <a href="index.html" className="logo">
            <img src="https://a-static.besthdwallpaper.com/beautiful-anime-girl-with-blue-long-hair-and-blue-eyes-posing-among-wallpaper-2880x1620-105821_52.jpg" alt="navbar brand" className="navbar-brand" height={20} />
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
            <h3 className="fw-bold mb-3">Products Management</h3>
            <h6 className="op-7 mb-2"> By Rothana</h6>
          </div>
          <div className="ms-md-auto py-2 py-md-0">
            <a href="#" className="btn btn-label-info btn-round me-2">Manage</a>
            <a href="/product" className="btn btn-danger btn-round">Back To Product</a>
          </div>
        </div>
        <div>
        <div style={{padding:"30px", marginTop:"25px", width:"50%"}} className="mt-8 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 "> Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div style={{display:"flex", justifyContent:"space-between", width:"60%"}}>
          <label style={{padding:"10px", marginTop:"10px"}}>Product URL image: </label>
          <input style={{height:"30px", marginTop:"15px"}} type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div style={{display:"flex", justifyContent:"space-between", width:"60%"}}>
          <label style={{padding:"10px", marginTop:"10px"}}>Product Name: </label>
          <input style={{height:"30px", marginTop:"15px"}} type="text" name="description" value={formData.description} onChange={handleInputChange} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", width: "60%" }}>
        <label style={{ padding: "10px", marginTop: "10px" }}>Size:</label>
        <select
          name="size_id"
          value={formData.size_id}
          onChange={handleInputChange}
          style={{ height: "35px", marginTop: "15px" }}
        >
          <option value="">Select Size</option>
          {Array.isArray(sizes) && sizes.map(size => (
  <option key={size.id} value={size.id}>{size.name}</option>
))}
        </select>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", width: "60%" }}>
        <label style={{ padding: "10px", marginTop: "10px" }}>Style:</label>
        <select
          name="type_id"
          value={formData.type_id}
          onChange={handleInputChange}
          style={{ height: "35px", marginTop: "15px" }}
        >
          <option value="">Select Style</option>
          {Array.isArray(types) && types.map(type => (
  <option key={type.id} value={type.id}>{type.description}</option>
))}

        </select>
      </div>

        <div style={{display:"flex", justifyContent:"space-between", width:"60%"}}>
          <label style={{padding:"10px", marginTop:"10px"}}>Product Price: </label>
          <input style={{height:"30px", marginTop:"15px"}} type="number" name="price" value={formData.price} onChange={handleInputChange} />
        </div >
        <button type="submit"  className="px-4 py-2 bg-green-600  font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500" style={{backgroundColor:"green", color:"white", borderRadius:"7px", border:"none", marginTop:"30px"}}>Add Product</button>
      </form>
    </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default CreateProduct