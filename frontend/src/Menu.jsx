import './style.css'
import { Link } from 'react-router-dom'

function Menu({ addToCart, cartItems }) {
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
                <button
                    className="food-btn"
                    onClick={() => addToCart({
                    id: 1,
                    name: 'Биг Тейсти',
                    description: 'Сочный бургер с фирменным соусом',
                    price: 420,
                    image: '/a0.png'
                })}
              >
                 В КОРЗИНУ
              </button>
              </div>
            </div>

            <div className="food-card">
              <img src="/a1.png" className="food-img" alt="" />
              <div className="food-name">Чикенбургер</div>
              <div className="food-desc">Классический бургер с куриной котлетой и салатом</div>

              <div className="food-bottom">
                <div className="food-price">350 ₽</div>
                <button
                    className="food-btn"
                    onClick={() => addToCart({
                    id: 2,
                    name: 'Чикенбургер',
                    description: 'Классический бургер с куриной котлетой и салатом',
                    price: 350,
                    image: '/a1.png'
                })}
              >
                 В КОРЗИНУ
              </button>
              </div>
            </div>

            <div className="food-card">
              <img src="/a2.png" className="food-img" alt="" />
              <div className="food-name">Гранд</div>
              <div className="food-desc">Для любителей острого вкуса и специй</div>

              <div className="food-bottom">
                <div className="food-price">390 ₽</div>
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
                 В КОРЗИНУ
              </button>
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
                 В КОРЗИНУ
              </button>
              </div>
            </div>

            <div className="food-card">
              <img src="/b1.png" className="food-img" alt="" />
              <div className="food-name">Маргарита</div>
              <div className="food-desc">Классика с томатами</div>

              <div className="food-bottom">
                <div className="food-price">480 ₽</div>
                <button
                    className="food-btn"
                    onClick={() => addToCart({
                    id: 5,
                    name: 'Маргарита',
                    description: 'Классика с томатами',
                    price: 480,
                    image: '/b1.png'
                })}
              >
                 В КОРЗИНУ
              </button>
              </div>
            </div>

            <div className="food-card">
              <img src="/b2.png" className="food-img" alt="" />
              <div className="food-name">4 Сыра</div>
              <div className="food-desc">Сырная пицца</div>

              <div className="food-bottom">
                <div className="food-price">620 ₽</div>
                <button
                    className="food-btn"
                    onClick={() => addToCart({
                    id: 6,
                    name: '4 Сыра',
                    description: 'Сырная пицца',
                    price: 620,
                    image: '/b2.png'
                })}
              >
                 В КОРЗИНУ
              </button>
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
                <button
                    className="food-btn"
                    onClick={() => addToCart({
                    id: 7,
                    name: 'Кока Кола',
                    description: 'Прохлаждающий напиток',
                    price: 150,
                    image: '/c0.png'
                })}
              >
                 В КОРЗИНУ
              </button>
              </div>
            </div>

            <div className="food-card">
              <img src="/c1.png" className="food-img" alt="" />
              <div className="food-name">Яблочный сок</div>

              <div className="food-bottom">
                <div className="food-price">100 ₽</div>
                <button
                    className="food-btn"
                    onClick={() => addToCart({
                    id: 8,
                    name: 'Яблочный сок',
                    description: 'Свежавыжетый сок',
                    price: 100,
                    image: '/c1.png'
                })}
              >
                 В КОРЗИНУ
              </button>
              </div>
            </div>

            <div className="food-card">
              <img src="/c2.png" className="food-img" alt="" />
              <div className="food-name">Adrenaline</div>

              <div className="food-bottom">
                <div className="food-price">260 ₽</div>
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
                 В КОРЗИНУ
              </button>
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
              <div className="food-name">Пончо</div>

              <div className="food-bottom">
                <div className="food-price">80 ₽</div>
                <button
                    className="food-btn"
                    onClick={() => addToCart({
                    id: 11,
                    name: 'Пончо',
                    description: 'Мягкий пончик с кремом',
                    price: 80,
                    image: '/d0.png'
                })}
              >
                 В КОРЗИНУ
              </button>
              </div>
            </div>

            <div className="food-card">
              <img src="/png-klev-club-w3tz-p-sinnabon-png-29.png" className="food-img" alt="" />
              <div className="food-name">Синабон</div>

              <div className="food-bottom">
                <div className="food-price">130 ₽</div>
                <button
                    className="food-btn"
                    onClick={() => addToCart({
                    id: 10,
                    name: 'Синабон',
                    description: 'Нежный десерт с творогом',
                    price: 130,
                    image: '/png-klev-club-w3tz-p-sinnabon-png-29.png'
                })}
              >
                 В КОРЗИНУ
              </button>
              </div>
            </div>

            <div className="food-card">
              <img src="/с2.png" className="food-img" alt="" />
              <div className="food-name">Брауни</div>

              <div className="food-bottom">
                <div className="food-price">270 ₽</div>
                <button
                    className="food-btn"
                    onClick={() => addToCart({
                    id: 12,
                    name: 'Брауни',
                    description: 'Шоколадный десерт',
                    price: 270,
                    image: '/с2.png'
                })}
              >
                 В КОРЗИНУ
              </button>
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