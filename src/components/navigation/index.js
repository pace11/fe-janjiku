import React from 'react'

export default function Navigation({ handleChangeLanguange }) {
  return (
    <header id="header">
      <div className="header-inner">
        <div className="container">
          <div id="logo">
            <a href="/">
              <span className="logo-default">
                <img
                  src={require('../../images/janjiku-id.png').default}
                  width="80"
                  alt=""
                />
              </span>
              <span className="logo-dark">POLO</span>
            </a>
          </div>
          <div className="header-extras">
            <ul>
              <li>
                <a id="btn-search" href="/#">
                  {' '}
                  <i className="icon-search1"></i>
                </a>
              </li>
              {/* <li className="d-none d-sm-block">
                <div id="shopping-cart" className="p-dropdown">
                  <a href="shop-cart.html">
                    <span className="shopping-cart-items">8</span>
                    <i className="icon-shopping-cart1"></i>
                  </a>
                  <div className="p-dropdown-content ">
                    <div className="widget-mycart">
                      <h4>My Cart</h4>
                      <div className="cart-item">
                        <div className="cart-image">
                          {' '}
                          <a href="/#">
                            <img src="images/shop/products/10.jpg" alt="" />
                          </a>
                        </div>
                        <div className="cart-product-meta">
                          <a href="/#">Bolt Sweatshirt</a>
                          <span>3 x 28$</span>
                        </div>
                        <div className="cart-item-remove">
                          <a href="/#">
                            <i className="icon-x"></i>
                          </a>
                        </div>
                      </div>
                      <hr />
                      <div className="cart-total">
                        <div className="cart-total-labels">
                          <span>Subtotal</span>
                          <span>Taxes</span>
                          <span>
                            <strong>Total</strong>
                          </span>
                        </div>
                        <div className="cart-total-prices">
                          <span>320$</span>
                          <span>8%</span>
                          <span>
                            <strong>385$</strong>
                          </span>
                        </div>
                      </div>
                      <div className="cart-buttons text-right">
                        <button className="btn btn-xs">Checkout</button>
                      </div>
                    </div>
                  </div>
                </div>
              </li> */}
              {/* <li>
                <div className="p-dropdown">
                  <a href="/#">
                    <i className="fa fa-globe"></i>
                    <span>ID</span>
                  </a>
                  <ul className="p-dropdown-content">
                    <li>
                      <a href="/#">English 🇺🇲</a>
                    </li>
                    <li>
                      <a href="/#">Indonesia 🇮🇩</a>
                    </li>
                  </ul>
                </div>
              </li> */}
            </ul>
          </div>
          <div id="mainMenu-trigger">
            <button className="lines-button x">
              {' '}
              <span className="lines"></span>{' '}
            </button>
          </div>
          <div id="mainMenu" className="menu-one-page menu-center">
            <div className="container">
              <nav>
                <ul>
                  <li>
                    <a href="#contact-us">Kontak Kami</a>
                  </li>
                  <li>
                    <a href="#pricing">Harga & Paket</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
