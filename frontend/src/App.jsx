import './style.css'
import { Link } from 'react-router-dom'

function App() {
  
  return (
    <>
      {/* шапка */}
      <div className='header'>
        <div className='container'>
          <div className='header-line'>

            <div className='header-logo'>
              <img src="/logo.png" alt="" />
            </div>

            <div className='nav'>
              <Link className='nav-item' to="/">ГЛАВНАЯ</Link>
              <Link className='nav-item' to="/menu">МЕНЮ</Link>
              <Link className='nav-item' to="/about">О НАС</Link>
              <Link className='nav-item' to="/booking">БРОНЬ</Link>
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
              <button id="burger">
                <img src="/burger-img.png" alt="" />
              </button>
            </div>

          </div>

          <div className='header-down'>
            <div className='header-title'>
              Добро пожаловать в

              <div className='header-subtitle'>
                Наше кафе
              </div>

              <div className='header-suptitle'>
                ДОМ ЛУЧШЕЙ ЕДЫ
              </div>

              <div className='header-bth'>
                <Link to="/menu" className='header-button'>VIEW MENU</Link>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* карточки */}
      <div className='cards'>
        <div className='container'>
          <div className='cards-holder'>

            <div className='card'>
              <div className='card-image'>
                <img className='card-img' src="/card.png" alt="" />
              </div>

              <div className='card-title'>
                Магическая <span>Атмосфера</span>
              </div>

              <div className='card-desc'>
                В нашем заведении царит магическая атмосфера наполненная вкусными ароматами
              </div>
            </div>

            <div className='card'>
              <img className='cart-img' src="/cart.png" alt="" />

              <div className='card-image'>
                <img className='card-img' src="/card.png" alt="" />
              </div>

              <div className='card-title'>
                Лучшее качество <span>Еды</span>
              </div>

              <div className='card-desc'>
                Качество нашей еды — отменное!
              </div>
            </div>

            <div className='card'>
              <img className='cart-img' src="/cart.png" alt="" />

              <div className='card-image'>
                <img className='card-img' src="/card.png" alt="" />
              </div>

              <div className='card-title'>
                Недорогая <span>Еда</span>
              </div>

              <div className='card-desc'>
                Стоимость зависит только от количества. Качество всегда на высоте!
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* история */}
      <div className='history'>
        <div className='container'>
          <div className='history-holder'>

            <div className='history-info'>
              <div className='history-title'>
                Наша <span>История</span>
              </div>

              <div className='history-desc'>
                                    Как и у любого другого самобытного места, у нас есть своя, особая история. Идея кафе пришла основателям неожиданно. Во время прогулки по лесу создатель нашего кафе застрял в сотнях километров от ближайшего населенного пункта. Вдали от цивилизации и связи им пришлось навремя обустровать себе нехитрый быт, добывать и готовить себе еду.
              </div>

              <div className='history-number'>
                <div className='number-item'>93 <span>Напитки</span></div>
                <div className='number-item'>206 <span>Еда</span></div>
                <div className='number-item'>71 <span>Закуски</span></div>
              </div>
            </div>

            <div className='history-images'>
              <img src="/1.jpg" alt="" />
              <img src="/2.jpg" alt="" />
              <img src="/3.jpg" alt="" />
            </div>

          </div>
        </div>
      </div>

      <div className='black-block'>
        <div className='container'>
          <div className='block-holder'>

            <div className='left'>
              <div className='left-title'>
                Отпразднуйте в одном из <br /> самых лучших кафе.
              </div>

              <div className='left-text'>
                Только в этом месяце бизнес-ланч от 250 ₽
              </div>
            </div>

            <div className='right'>
              <div className='right-button'>
                <a href="#" className='right-btn'>ЗАКАЗ СТОЛИКА</a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* примеры блюд */}
      <div className='dishes'>
        <div className='container'>

          <div className='dishes-title'>
            Наши <span>Блюда</span>
          </div>

          <div className='burgers'>

            <div className='burgers-image'>
              <img src="/pizza.jpg" className='pizza' alt="" />
            </div>

            <div className='burgers-items'>
              <div className='burger-item'>
                <img src="/burger.jpg" alt="" />
                <div className='burger-text'>Гамбургер мини — 220 ₽</div>
              </div>

              <div className='burger-item'>
                <img src="/burger.jpg" alt="" />
                <div className='burger-text'>Гамбургер мини — 220 ₽</div>
              </div>

              <div className='burger-item'>
                <img src="/burger.jpg" alt="" />
                <div className='burger-text'>Гамбургер мини — 220 ₽</div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* меню */}
      <div className='menu'>
        <div className='container'>

          <div className='menu-title'>
            Наше меню
          </div>

          <div className='menu-items'>

            <div className='menu-item'>
              <div className='menu-image'>
                <img src="/burger-i.jpg" className='menu-img' alt="" />
              </div>

            <div className='menu-text'>
              Гамбургер макси
            </div>

  <         div className='menu-subtext'>
              Максимально толстый <br /> слой мяса
            </div>

            <div className='menu-button'>
              <a href="#" className='menu-btn'>ЗАКАЗАТЬ</a>
            </div>
          </div>

            <div className='menu-item'>
              <div className='menu-image'>
                <img src="/burger-i.jpg" className='menu-img' alt="" />
              </div>

            <div className='menu-text'>
              Гамбургер макси
            </div>

  <         div className='menu-subtext'>
              Максимально толстый <br /> слой мяса
            </div>

            <div className='menu-button'>
              <a href="#" className='menu-btn'>ЗАКАЗАТЬ</a>
            </div>
          </div>

            <div className='menu-item'>
              <div className='menu-image'>
                <img src="/burger-i.jpg" className='menu-img' alt="" />
              </div>

            <div className='menu-text'>
              Гамбургер макси
            </div>

  <         div className='menu-subtext'>
              Максимально толстый <br /> слой мяса
            </div>

            <div className='menu-button'>
              <a href="#" className='menu-btn'>ЗАКАЗАТЬ</a>
            </div>
          </div>

          </div>

        </div>
      </div>

      {/* отзыв */}
      <div className='coment'>
        <div className='container'>

          <div className='coment-text'>
                        Я надолго запомню мой День рождения, проведённый в этом кафе! Кусочек родной Армении!!! Отдельное спасибо за комплепент в виде фруктовой тарелки. Будем рекомендовать это кафе своим друзьям и родственникам также за рубежом, путешествующих в Чалтырь!!!
          </div>

           <div className='coment-image'>
            <img src="/face.jpg" className='coment-img' alt="" />
          </div>

          <div className='coment-type'>
            Посетитель
          </div>

          <div className='coment-name'>
            Даниил
          </div>

        </div>
      </div>

      {/* GALLERY */}
      <div className='galery'>
        <div className='container'>

          <div className='galery-title'>
            Галерея <span>Блюд</span>
          </div>

          <div className='galery-content'>
            <img src="/10.jpg" alt="" />
            <img src="/20.jpg" alt="" />
            <img src="/30.jpg" alt="" />
          </div>

        </div>
      </div>

      {/* повара */}
      <div className='cook'>
        <div className='container'>

          <div className='cook-title'>
            Наши <span>Повара</span>
          </div>

          <div className='cook-content'>
            <img src="/1c.jpg" alt="" />
            <img src="/2c.jpg" alt="" />
            <img src="/3c.jpg" alt="" />
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

export default App