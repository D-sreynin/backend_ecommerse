import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import QRCode from 'qrcode.react'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  // Calculate the total price
  // const totalPrice = cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  const totalPrice = cart.reduce((total, product) => total + Number(product.price) || 0, 0).toFixed(2);


  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container mt-4">
        <h1 className="text-center mb-4">Your Cart</h1>
        {cart.length === 0 ? (
          <h2 className="text-center">Your cart is empty.</h2>
        ) : (
          <div>
            <ul className="list-group mb-4">
              {cart.map((product) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  key={product.id}
                >
                  <div style={{ display: 'flex' }}>
                    <img
                      src={product.name}
                      className="card-img-top"
                      alt={product.name}
                      style={{ objectFit: 'contain', width: "200px", height: "100px" }}
                    />
                    <div className="ml-3">
                      <h5 className="mb-1">{product.description}</h5>
                      <p className="mb-1">Price: ${product.price}</p>
                    </div>
                  </div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            {/* Display total price */}
            <h4 className="text-right">Total: ${totalPrice}</h4>

            {/* QR Code for total price */}
            <div className="text-center my-4">
              {/* <QRCode 
                value={`Total: $${totalPrice}`} 
                size={128} 
                level="H" 
              /> */}
            <QRCodeSVG value={`Total Price: $${totalPrice}`} size={128} level="H" />
            <QRCodeSVG style={{display:"none"}} value={`https://paymentgateway.com/checkout?amount=${totalPrice}`} />


              <p className="mt-2">Scan the QR code to view the total price</p>
            </div>

            {/* Button to process payment */}
            <div className="text-center">
              <Link to={`/test-payment?amount=${totalPrice}`} className="btn btn-success mt-3">
                Proceed to Payment
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
