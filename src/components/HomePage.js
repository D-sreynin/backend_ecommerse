import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./ProductPage.css"
import http from '../http';
const HomePage = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllUsers = () => {
    http.get("/products").then(res=>{
      setProducts(res.data.data);
      console.log(res.data.data, 'data')
      // console.log(res.data[0], 'single user');
    })
}
useEffect(() => {
  fetchAllUsers();
}, []);

 

  return (
    <div style={{marginTop:"100px"}}>
 

  {/* Categories Section End */}
  {/* Featured Section Begin */}
  <section className="featured spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>Featured Product</h2>
          </div>
          <div className="featured__controls">
            <ul>
              <li className="active" data-filter="*">All</li>
              <li data-filter=".oranges">Y2K</li>
              <li data-filter=".fresh-meat">KoreanStyle</li>
              <li data-filter=".fastfood">Streetwear</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row featured__filter">
      <div className="container mt-4 w-100 " style={{backgroundColor:"white"}}>
      <h1 className="text-center mb-4 text-light">Our Products</h1>
      
      <div className="row">
        {products.map(product => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={product.id}>
            <div className="featured__item">
              <div className="featured__item__ ">
              <img style={{objectFit:"contain"}} src={product.name} className="card-img-top" alt={product.name} />
              <button 
                  className="btn  w-100" style={{backgroundColor:"pink", marginTop:"10px"}}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart ${product.price}
                </button>
                
              </div>
              <div className="featured__item__text">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        
      </div>
    </div>
  </section>
  

  {/* Latest Product Section End */}
  {/* Blog Section Begin */}
  <section className="from-blog spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title from-blog__title">
            <h2>From The Blog</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="blog__item">
            <div className="blog__item__pic">
              <img src="img/blog/blog-1.jpg" alt />
            </div>
            <div className="blog__item__text">
              <ul>
                <li><i className="fa fa-calendar-o" /> Jan 20,2025</li>
                <li><i className="fa fa-comment-o" /> 9</li>
              </ul>
              <h5><a href="https://classicallycrystal.com/top-10-fashion-blogs/">Top 10 Fashion Blogs - Classically Crystal</a></h5>
              <p>I wanted to put together a list of all of my favorite fashion blogs. I love these blogs, most of them I check once a week (or more). </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="blog__item">
            <div className="blog__item__pic">
              <img src="img/blog/blog-2.jpg" alt />
            </div>
            <div className="blog__item__text">
              <ul>
                <li><i className="fa fa-calendar-o" /> June 15,2025</li>
                <li><i className="fa fa-comment-o" /> 10</li>
              </ul>
              <h5><a href="https://whatisshewearing.com/styles-clothes/">The Ultimate Guide to 2025's Hottest Fashion Trend</a></h5>
              <p>Wondering what the best fashion styles are for 2025? Find out in this post, where I share the trends you need to know and how to wear them effortlessly...</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="blog__item">
            <div className="blog__item__pic">
              <img src="img/blog/blog-3.jpg" alt />
            </div>
            <div className="blog__item__text">
              <ul>
                <li><i className="fa fa-calendar-o" /> May 04,2025</li>
                <li><i className="fa fa-comment-o" /> 5</li>
              </ul>
              <h5><a href="https://christinabtv.com/2024/12/16/2025-fashion-trends-you-need-to-know-what-everyone-will-be-wearing/">Trending Women's Fashion Outfits for 2025</a></h5>
              <p>Stay ahead of the curve with our exclusive guide to women's style and 2025 fashion trends. Explore current fashion trends that redefine modern elegance and timeless classics. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  );
};

export default HomePage;