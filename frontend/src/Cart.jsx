import './style.css'
import { Link } from 'react-router-dom'

function Cart({
  cartItems,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart
}) {

  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0)

  return (
    <>

      <div className="menu-page-header">
        <div className="container">

          <div className='header-line'>

            <div className='header-logo'>
              <Link to="/">
                <img src="/logo.png" alt="" />
              </Link>
            </div>

            <div className='nav'>
              <Link className='nav-item' to="/">ГЛАВНАЯ</Link>
              <Link className='nav-item' to="/menu">МЕНЮ</Link>
              <Link className='nav-item' to="/about">О НАС</Link>
              <Link className='nav-item' to="/booking">БРОНЬ</Link>
              <Link className='nav-item active-nav' to="/cart">
                КОРЗИНА ({cartItems.length})
              </Link>
            </div>

          </div>

          <div className="menu-page-hero">
            <div className="menu-page-title">
              Ваша <span>Корзина</span>
            </div>

            <div className="menu-page-subtitle">
              Проверьте ваш заказ
            </div>
          </div>

        </div>
      </div>

      <div className="cart-section">
        <div className="container">

          {cartItems.length === 0 ? (

            <div className="empty-cart">
              <h2>Корзина пуста</h2>

              <Link to="/menu" className="menu-btn">
                ПЕРЕЙТИ В МЕНЮ
              </Link>
            </div>

          ) : (

            <>

              <div className="cart-items">

                {cartItems.map((item) => (

                  <div className="cart-item" key={item.id}>

                    <img
                      src={item.image}
                      alt=""
                      className="cart-item-image"
                    />

                    <div className="cart-item-info">

                      <div className="cart-item-title">
                        {item.name}
                      </div>

                      <div className="cart-item-desc">
                        {item.description}
                      </div>

                    </div>

                    <div className="quantity-controls">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="qty-btn"
                      >
                        -
                      </button>

                      <span className="qty-number">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="qty-btn"
                      >
                        +
                      </button>

                    </div>

                    <div className="cart-item-price">
                      {item.price * item.quantity} ₽
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ✕
                    </button>

                  </div>
                ))}

              </div>

              <div className="cart-summary">

                <div className="cart-total">
                  Итого: <span>{totalPrice} ₽</span>
                </div>

                <div className="cart-buttons">

                  <button
                    className="clear-cart-btn"
                    onClick={clearCart}
                  >
                    ОЧИСТИТЬ
                  </button>

                  <Link to="/booking" className="checkout-btn">
                    ОФОРМИТЬ ЗАКАЗ
                  </Link>

                </div>

              </div>

            </>
          )}

        </div>
      </div>

      <div className="footer">
        Project MTUCI 2026
      </div>

    </>
  )
}

export default Cart