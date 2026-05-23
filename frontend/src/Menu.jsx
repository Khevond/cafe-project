import './style.css'
import { Link } from 'react-router-dom'

function Menu({ addToCart, cartItems, decreaseQuantity }) {
  return (
    <>
      {/* шапка */}
      <div className="menu-page-header">
        <div className="container">

          <div className='header-line'>
            <div className='header-logo'>
              <a href="#">
                <img src="/logo.png" alt="" />
              </a>
            </div>

            <div className='nav'>
              <Link className='nav-item' to="/">ГЛАВНАЯ</Link>
              <Link className='nav-item' to="/menu">МЕНЮ</Link>
              <Link className='nav-item' to="/about">О НАС</Link>
              <Link className='nav-item' to="/booking">БРОНЬ</Link>
              <Link className='nav-item cart-link' to="/cart">
                КОРЗИНА ({cartItems.length})
              </Link>
            </div>

            <div className='phone'>
              <div className='phone-holder'>
                <div className='phone-img'>
                  <img src="/phone.png" alt="" />
                </div>

                <div className='number'>
                  <a className='num' href="#">+7 951-532-40-79</a>
                </div>
              </div>

              <div className='phone-text'>
                Свяжитесь с нами для <br /> бронирования
              </div>
            </div>

            <div className='btn'>
              <Link className='button' to="/booking">ЗАКАЗ СТОЛИКА</Link>
            </div>

            <div className='burger-menu'>
              <button>
                <img src="/burger-img.png" alt="" />
              </button>

              <div className='burger-slide disp'>
                <a className='nav-item block' href="#">ГЛАВНАЯ</a>
                <a className='nav-item block' href="#">МЕНЮ</a>
                <a className='nav-item block' href="#">О НАС</a>
                <a className='nav-item block' href="#">БРОНЬ</a>
              </div>
            </div>
          </div>

          <div className="menu-page-hero">
            <div className="menu-page-title">
              Наше <span>Меню</span>
            </div>

            <div className="menu-page-subtitle">
              Лучшие блюда для вашего настроения
            </div>
          </div>

        </div>
      </div>

      {/* категории */}
      <div className="menu-categories">
        <div className="container">

          <div className="section-title">
            Основные <span>Категории</span>
          </div>

          <div className="category-buttons">
            <a href="#burgers" className="category-btn">Бургеры</a>
            <a href="#pizza" className="category-btn">Пицца</a>
            <a href="#drinks" className="category-btn">Напитки</a>
            <a href="#desserts" className="category-btn">Десерты</a>
          </div>

        </div>
      </div>

      {/* бургеры */}
      <div className="menu-section" id="burgers">
        <div className="container">

          <div className="section-title">
            Наши <span>Бургеры</span>
          </div>

          <div className="food-grid">

            <div className="food-card">
              <img src="/a0.png" className="food-img" alt="" />
              <div className="food-name">Биг Тейсти</div>
              <div className="food-desc">Сочный бургер с фирменным соусом</div>

              <div className="food-bottom">
                <div className="food-price">420 ₽</div>
                {cartItems.find(item => item.id === 1) ? (

    <div className="cart-controls">

        <button
            className="count-btn"
            onClick={() => decreaseQuantity(1)}
        >
            −
        </button>

        <span className="count-number">
            {
                cartItems.find(item => item.id === 1).quantity
            }
        </span>

        <button
            className="count-btn"
            onClick={() => addToCart({
                id: 1,
                name: 'Биг Тейсти',
                description: 'Сочный бургер',
                price: 420,
                image: '/a0.png'
            })}
        >
            +
        </button>

    </div>

) : (

    <button
        className="food-btn"
        onClick={() => addToCart({
            id: 1,
            name: 'Биг Тейсти',
            description: 'Сочный бургер',
            price: 420,
            image: '/a0.png'
        })}
    >
        + В КОРЗИНУ
    </button>

)}
              </div>
            </div>

            <div className="food-card">
              <img src="/a1.png" className="food-img" alt="" />
              <div className="food-name">Чикенбургер</div>
              <div className="food-desc">Классический бургер с куриной котлетой и салатом</div>

              <div className="food-bottom">
                <div className="food-price">350 ₽</div>
                {cartItems.find(item => item.id === 2) ? (

    <div className="cart-controls">

        <button
            className="count-btn"
            onClick={() => decreaseQuantity(2)}
        >
            −
        </button>

        <span className="count-number">
            {
                cartItems.find(item => item.id === 2).quantity
            }
        </span>

        <button
            className="count-btn"
            onClick={() => addToCart({
                id: 2,
                name: 'Чикенбургер',
                description: 'Классический бургер с куриной котлетой и салатом<',
                price: 350,
                image: '/a1.png'
            })}
        >
            +
        </button>

    </div>

) : (

    <button
        className="food-btn"
        onClick={() => addToCart({
            id: 2,
            name: 'Чикенбургер',
            description: 'Классический бургер с куриной котлетой и салатом<',
            price: 350,
            image: '/a1.png'
        })}
    >
        + В КОРЗИНУ
    </button>

)}
              </div>
            </div>

            <div className="food-card">
              <img src="/a2.png" className="food-img" alt="" />
              <div className="food-name">Гранд</div>
              <div className="food-desc">Для любителей острого вкуса и специй</div>

              <div className="food-bottom">
                <div className="food-price">390 ₽</div>
                {cartItems.find(item => item.id === 3) ? (

    <div className="cart-controls">

        <button
            className="count-btn"
            onClick={() => decreaseQuantity(3)}
        >
            −
        </button>

        <span className="count-number">
            {
                cartItems.find(item => item.id === 3).quantity
            }
        </span>

        <button
            className="count-btn"
            onClick={() => addToCart({
                id: 3,
                name: 'Гранд',
                description: 'Для любителей острого вкуса и специй',
                price: 390,
                image: '/a2.png'
            })}
        >
            +
        </button>

    </div>

) : (

    <button
        className="food-btn"
        onClick={() => addToCart({
            id: 3,
            name: 'Гранд',
            description: 'Для любителей острого вкуса и специй',
            price: 390,
            image: '/a2.png'
        })}
    >
        + В КОРЗИНУ
    </button>

)}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* пицца */}
      <div className="menu-section gray-section" id="pizza">
        <div className="container">

          <div className="section-title">
            Вкусная <span>Пицца</span>
          </div>

          <div className="food-grid">

            <div className="food-card">
              <img src="/b0.png" className="food-img" alt="" />
              <div className="food-name">Пепперони</div>
              <div className="food-desc">Тонкое тесто и пепперони</div>

              <div className="food-bottom">
                <div className="food-price">550 ₽</div>
                {cartItems.find(item => item.id === 4) ? (

    <div className="cart-controls">

        <button
            className="count-btn"
            onClick={() => decreaseQuantity(4)}
        >
            −
        </button>

        <span className="count-number">
            {
                cartItems.find(item => item.id === 4).quantity
            }
        </span>

        <button
            className="count-btn"
            onClick={() => addToCart({
                id: 4,
                name: 'Пепперони',
                description: 'Тонкое тесто и пепперони',
                price: 550,
                image: '/b0.png'
            })}
        >
            +
        </button>

    </div>

) : (

    <button
        className="food-btn"
        onClick={() => addToCart({
            id: 4,
            name: 'Пепперони',
            description: 'Тонкое тесто и пепперони',
            price: 550,
            image: '/b0.png'
        })}
    >
        + В КОРЗИНУ
    </button>

)}
              </div>
            </div>

            <div className="food-card">
              <img src="/b1.png" className="food-img" alt="" />
              <div className="food-name">Маргарита</div>
              <div className="food-desc">Классика с томатами</div>

              <div className="food-bottom">
                <div className="food-price">480 ₽</div>
                {cartItems.find(item => item.id === 5) ? (

    <div className="cart-controls">

        <button
            className="count-btn"
            onClick={() => decreaseQuantity(5)}
        >
            −
        </button>

        <span className="count-number">
            {
                cartItems.find(item => item.id === 5).quantity
            }
        </span>

        <button
            className="count-btn"
            onClick={() => addToCart({
                id: 5,
                name: 'Маргарита',
                description: 'Классика с томатами',
                price: 480,
                image: '/b1.png'
            })}
        >
            +
        </button>

    </div>

) : (

    <button
        className="food-btn"
        onClick={() => addToCart({
            id: 5,
            name: 'Маргарита',
            description: 'Классика с томатами',
            price: 420,
            image: '/b1.png'
        })}
    >
        + В КОРЗИНУ
    </button>

)}
              </div>
            </div>

            <div className="food-card">
              <img src="/b2.png" className="food-img" alt="" />
              <div className="food-name">4 Сыра</div>
              <div className="food-desc">Сырная пицца</div>

              <div className="food-bottom">
                <div className="food-price">620 ₽</div>
                {cartItems.find(item => item.id === 6) ? (

    <div className="cart-controls">

        <button
            className="count-btn"
            onClick={() => decreaseQuantity(6)}
        >
            −
        </button>

        <span className="count-number">
            {
                cartItems.find(item => item.id === 6).quantity
            }
        </span>

        <button
            className="count-btn"
            onClick={() => addToCart({
                id: 6,
                name: '4 сыра',
                description: 'Сырная пицца',
                price: 620,
                image: '/b2.png'
            })}
        >
            +
        </button>

    </div>

) : (

    <button
        className="food-btn"
        onClick={() => addToCart({
            id: 6,
            name: '4 сыра',
            description: 'Сырная пицца',
            price: 620,
            image: '/b2.png'
        })}
    >
        + В КОРЗИНУ
    </button>

)}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* напитки */}
      <div className="menu-section" id="drinks">
        <div className="container">

          <div className="section-title">
            Освежающие <span>Напитки</span>
          </div>

          <div className="food-grid">

            <div className="food-card">
              <img src="/c0.png" className="food-img" alt="" />
              <div className="food-name">Кока Кола</div>

              <div className="food-bottom">
                <div className="food-price">150 ₽</div>
                {cartItems.find(item => item.id === 7) ? (

    <div className="cart-controls">

        <button
            className="count-btn"
            onClick={() => decreaseQuantity(7)}
        >
            −
        </button>

        <span className="count-number">
            {
                cartItems.find(item => item.id === 7).quantity
            }
        </span>

        <button
            className="count-btn"
            onClick={() => addToCart({
                id: 7,
                name: 'Кока Кола',
                description: 'Освежающий напиток',
                price: 150,
                image: '/c0.png'
            })}
        >
            +
        </button>

    </div>

) : (

    <button
        className="food-btn"
        onClick={() => addToCart({
            id: 7,
            name: 'Кока Кола',
            description: 'Освежающий напиток',
            price: 150,
            image: '/c0.png'
        })}
    >
        + В КОРЗИНУ
    </button>

)}
              </div>
            </div>

            <div className="food-card">
              <img src="/c1.png" className="food-img" alt="" />
              <div className="food-name">Яблочный сок</div>

              <div className="food-bottom">
                <div className="food-price">100 ₽</div>
                {cartItems.find(item => item.id === 8) ? (

    <div className="cart-controls">

        <button
            className="count-btn"
            onClick={() => decreaseQuantity(8)}
        >
            −
        </button>

        <span className="count-number">
            {
                cartItems.find(item => item.id === 8).quantity
            }
        </span>

        <button
            className="count-btn"
            onClick={() => addToCart({
                id: 8,
                name: 'Яблочный сок',
                description: 'Свежевыжатый сок',
                price: 100,
                image: '/c1.png'
            })}
        >
            +
        </button>

    </div>

) : (

    <button
        className="food-btn"
        onClick={() => addToCart({
            id: 8,
            name: 'Яблочный сок',
            description: 'Свежевыжатый сок',
            price: 100,
            image: '/c1.png'
        })}
    >
        + В КОРЗИНУ
    </button>

)}
              </div>
            </div>

            <div className="food-card">
              <img src="/c2.png" className="food-img" alt="" />
              <div className="food-name">Adrenaline</div>

              <div className="food-bottom">
                <div className="food-price">260 ₽</div>
                {cartItems.find(item => item.id === 9) ? (

    <div className="cart-controls">

        <button
            className="count-btn"
            onClick={() => decreaseQuantity(9)}
        >
            −
        </button>

        <span className="count-number">
            {
                cartItems.find(item => item.id === 9).quantity
            }
        </span>

        <button
            className="count-btn"
            onClick={() => addToCart({
                id: 9,
                name: 'Adrenaline',
                description: 'Бодрящий напиток',
                price: 260,
                image: '/c2.png'
            })}
        >
            +
        </button>

    </div>

) : (

    <button
        className="food-btn"
        onClick={() => addToCart({
            id: 9,
            name: 'Adrenaline',
            description: 'Бодрящий напиток',
            price: 260,
            image: '/c2.png'
        })}
    >
        + В КОРЗИНУ
    </button>

)}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* десерты */}
      <div className="menu-section gray-section" id="desserts">
        <div className="container">

          <div className="section-title">
            Сладкие <span>Десерты</span>
          </div>

          <div className="food-grid">

            <div className="food-card">
              <img src="/d0.png" className="food-img" alt="" />
              <div className="food-name">Пончик</div>

              <div className="food-bottom">
                <div className="food-price">80 ₽</div>
                {cartItems.find(item => item.id === 10) ? (

    <div className="cart-controls">

        <button
            className="count-btn"
            onClick={() => decreaseQuantity(10)}
        >
            −
        </button>

        <span className="count-number">
            {
                cartItems.find(item => item.id === 10).quantity
            }
        </span>

        <button
            className="count-btn"
            onClick={() => addToCart({
                id: 10,
                name: 'Пончик',
                description: 'Пончик с нежным кремом',
                price: 80,
                image: '/d0.png'
            })}
        >
            +
        </button>

    </div>

) : (

    <button
        className="food-btn"
        onClick={() => addToCart({
            id: 10,
            name: 'Пончик',
            description: 'Пончик с нежным кремом',
            price: 80,
            image: '/d0.png'
        })}
    >
        + В КОРЗИНУ
    </button>

)}
              </div>
            </div>

            <div className="food-card">
              <img src="/sin.png" className="food-img" alt="" />
              <div className="food-name">Синабон</div>

              <div className="food-bottom">
                <div className="food-price">130 ₽</div>
                {cartItems.find(item => item.id === 11) ? (

    <div className="cart-controls">

        <button
            className="count-btn"
            onClick={() => decreaseQuantity(11)}
        >
            −
        </button>

        <span className="count-number">
            {
                cartItems.find(item => item.id === 11).quantity
            }
        </span>

        <button
            className="count-btn"
            onClick={() => addToCart({
                id: 11,
                name: 'Синабон',
                description: 'Синабон с творогом',
                price: 130,
                image: '/sin.png'
            })}
        >
            +
        </button>

    </div>

) : (

    <button
        className="food-btn"
        onClick={() => addToCart({
            id: 11,
            name: 'Синабон',
            description: 'Синабон с творогом',
            price: 130,
            image: '/sin.png'
        })}
    >
        + В КОРЗИНУ
    </button>

)}
              </div>
            </div>

            <div className="food-card">
              <img src="/bra.png" className="food-img" alt="" />
              <div className="food-name">Брауни</div>

              <div className="food-bottom">
                <div className="food-price">270 ₽</div>
                {cartItems.find(item => item.id === 12) ? (

    <div className="cart-controls">

        <button
            className="count-btn"
            onClick={() => decreaseQuantity(12)}
        >
            −
        </button>

        <span className="count-number">
            {
                cartItems.find(item => item.id === 12).quantity
            }
        </span>

        <button
            className="count-btn"
            onClick={() => addToCart({
                id: 12,
                name: 'Брауни',
                description: 'Шоколадный брауни',
                price: 270,
                image: '/bra.png'
            })}
        >
            +
        </button>

    </div>

) : (

    <button
        className="food-btn"
        onClick={() => addToCart({
            id: 12,
            name: 'Брауни',
            description: 'Шоколадный брауни',
            price: 270,
            image: '/bra.png'
        })}
    >
        + В КОРЗИНУ
    </button>

)}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* блок заказов */}
      <div className="menu-order-block">
        <div className="container">

          <div className="menu-order-content">
            <div>
              <div className="menu-order-title">Не можете выбрать?</div>
              <div className="menu-order-text">
                Наши сотрудники помогут вам
              </div>
            </div>

            <a href="#" className="menu-order-btn">
              СДЕЛАТЬ ЗАКАЗ
            </a>
          </div>

        </div>
      </div>

      {/* низ */}
      <div className='footer'>
        Project MTUCI 2026
      </div>
    </>
  )
}

export default Menu