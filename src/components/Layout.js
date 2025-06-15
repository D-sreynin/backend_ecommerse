import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import the CartContext
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Layout = ({ children }) => {
  const { cart } = useCart(); // Access the cart state
  const navigate = useNavigate();
  const handleAuth = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        navigate('/');
    }
};

const handleLogout = () => {
  localStorage.removeItem('token'); // remove the token
  navigate('/login'); // redirect to login
};

useEffect(() => {
    handleAuth();
}, []);


  return (
    <div>
      {/* <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li>
              <Link to="/cart">Cart 
                {cart.length > 0 && (
                  <span style={{marginLeft:"5px"}} className="badge bg-primary ms-1 ">{cart.length}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </header> */}
      <div style={{position:"fixed", width:"100%", zIndex:100}}>
       <div id="preloder" >
    <div className="loader" />
  </div>
  {/* Humberger End */}
  {/* Header Section Begin */}
  <header className="header" style={{backgroundColor:"white"}}>
    <div className="header__top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="header__top__left">
              <ul>
                <li><i className="fa fa-envelope" /> chicher@gmail.com</li>
                <li>Free Shipping for all Order of $99</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="header__top__right">
              <div className="header__top__right__social">
                <a href="https://github.com/ronrothana"><i className="fab fa-facebook" /></a>
                <a href="https://github.com/ronrothana"><i className="fab fa-twitter" /></a>
                <a href="https://github.com/ronrothana"><i className="fab fa-linkedin" /></a>
                <a href="https://github.com/ronrothana"><i className="fab fa-pinterest-p" /></a>
              </div>
              <div className="header__top__right__language">
                <img src="img/language.png" alt />
                <div>English</div>
                <span className="arrow_carrot-down" />
                <ul>
                  <li><a href="#">Khmer</a></li>
                  <li><a href="#">English</a></li>
                </ul>
              </div>
              <div className="header__top__right__auth">
              <button onClick={handleLogout}>
            Login
        </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
<div style={{ width: '100px', height: 'auto' }}>
  <a href="./index.html">
    <img src="img/2.png" alt="logo" style={{ width: '100%', height: 'auto' }} />
  </a>
</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="col-lg-6">
          <nav className="header__menu">
            <ul>
              <li><Link to="/">Home</Link></li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-3">
          <div className="header__cart">
            <ul>
              <li><a href="#"><i className="fa fa-heart" /> <span>1</span></a></li>
              <li>
              <Link to="/cart"><i className="fa fa-shopping-bag" />
                {cart.length > 0 && (
                  <span style={{marginLeft:"5px"}} >{cart.length}</span>
                )}
              </Link>
            </li>
              {/* <li><a href="#"><i className="fa fa-shopping-bag" /> <span>3</span></a></li> */}
            </ul>
            <div className="header__cart__price">item: <span>$150.00</span></div>
          </div>
        </div>
      </div>
      <div className="humberger__open">
        <i className="fa fa-bars" />
      </div>
    </div>
  </header>
  </div>
      <main> <Outlet /></main>
      <footer>
        <p>© 2025 My ChicHer Store</p>
      </footer>
    </div>
  );
};

export default Layout;