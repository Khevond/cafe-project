import './style.css'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      {/* шапка */}
      <div className="menu-page-header">
        <div className="container">

          <div className='header-line'>
            <div className='header-logo'>
              <Link to="/">
                <img src="/logo.png" alt="Logo" />
              </Link>
            </div>

            <div className='nav'>
              <Link className='nav-item' to="/">ГЛАВНАЯ</Link>
              <Link className='nav-item' to="/menu">МЕНЮ</Link>
              <Link className='nav-item' to="/about">О НАС</Link>
              <Link className='nav-item' to="/booking">БРОНЬ</Link>
            </div>

            <div className='phone'>
              <div className='phone-holder'>
                <img src="/phone.png" alt="" />

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
          </div>

          <div className="menu-page-hero">
            <div className="menu-page-title">
              О <span>Нас</span>
            </div>

            <div className="menu-page-subtitle">
              Узнайте больше о нашем кафе
            </div>
          </div>

        </div>
      </div>

      {/* о нас */}
      <div className="about-section">
        <div className="container">

          <div className="about-grid">

            <div className="about-text">
              <div className="section-title">
                Наша <span>История</span>
              </div>

              <p>
                Наше кафе началось с небольшой идеи — создать уютное место,
                где люди могут наслаждаться вкусной едой и атмосферой.
              </p>

              <p>
                Со временем мы выросли, но сохранили главное —
                качество, внимание к деталям и любовь к гостям.
              </p>

              <p>
                Сегодня мы предлагаем лучшие блюда, приготовленные
                с душой и только из свежих продуктов.
              </p>

              <div className="about-stats">

                <div className="stat">
                  <div className="stat-number">10+</div>
                  <div className="stat-text">Лет опыта</div>
                </div>

                <div className="stat">
                  <div className="stat-number">5000+</div>
                  <div className="stat-text">Гостей</div>
                </div>

                <div className="stat">
                  <div className="stat-number">120+</div>
                  <div className="stat-text">Блюд</div>
                </div>

              </div>
            </div>

            <div className="about-image">
              <img src="/1.jpg" alt="" />
            </div>

          </div>

        </div>
      </div>

      <div className="advantages">
        <div className="container">

          <div className="section-title">
            Почему <span>мы?</span>
          </div>

          <div className="advantages-grid">

            <div className="adv-card">
              <img src="/card.png" alt="" />
              <div className="adv-title">Уютная атмосфера</div>
              <div className="adv-text">Идеальное место для отдыха и встреч</div>
            </div>

            <div className="adv-card">
              <img src="/card.png" alt="" />
              <div className="adv-title">Свежие продукты</div>
              <div className="adv-text">Мы используем только качественные ингредиенты</div>
            </div>

            <div className="adv-card">
              <img src="/card.png" alt="" />
              <div className="adv-title">Быстрое обслуживание</div>
              <div className="adv-text">Мы ценим ваше время</div>
            </div>

          </div>

        </div>
      </div>

      {/* команда */}
      <div className="team">
        <div className="container">

          <div className="section-title">
            Наша <span>Команда</span>
          </div>

          <div className="team-grid">

            <div className="team-card">
              <img src="/1c.jpg" alt="" />
              <div className="team-name">Хеня</div>
              <div className="team-role">Дегустатор</div>
            </div>

            <div className="team-card">
              <img src="/2c.jpg" alt="" />
              <div className="team-name">Евстигней</div>
              <div className="team-role">Шеф Повар</div>
            </div>

            <div className="team-card">
              <img src="/3c.jpg" alt="" />
              <div className="team-name">Иван</div>
              <div className="team-role">Су Шеф</div>
            </div>

          </div>

        </div>
      </div>

      {/* блок заказа */}
      <div className="menu-order-block">
        <div className="container">

          <div className="menu-order-content">
            <div>
              <div className="menu-order-title">Приходите к нам!</div>
              <div className="menu-order-text">
                Мы будем рады видеть вас в нашем кафе
              </div>
            </div>

            <a href="#" className="menu-order-btn">
              ЗАБРОНИРОВАТЬ
            </a>
          </div>

        </div>
      </div>

      {/* низ */}
      <div className="footer">
        Project MTUCI 2026
      </div>
    </>
  )
}

export default About