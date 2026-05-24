import './style.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Booking() {
  const [showMessage, setShowMessage] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = {
      name: e.target[0].value,
      phone: e.target[1].value,
      date: e.target[2].value,
      time: e.target[3].value,
      guests: e.target[4].value,
      zone: e.target[5].value,
      comment: e.target[6].value,
    }

    const response = await fetch('http://127.0.0.1:8000/api/reservation/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      setShowMessage(true)
    }
  }

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
              <Link className='button' to="/booking">
                ЗАКАЗ СТОЛИКА
              </Link>
            </div>
          </div>

          <div className="menu-page-hero">
            <div className="menu-page-title">
              Бронь <span>Столика</span>
            </div>

            <div className="menu-page-subtitle">
              Забронируйте стол заранее
            </div>
          </div>

        </div>
      </div>

      <div className="booking-section">
        <div className="container">

          <div className="booking-form-wrapper">

            <div className="section-title">
              Оставьте <span>заявку</span>
            </div>

            <form className="booking-form" onSubmit={handleSubmit}>

              <div className="form-row">
                <input type="text" placeholder="Ваше имя" required />
                <input type="tel" placeholder="Телефон" required />
              </div>

              <div className="form-row">
                <input type="date" required />
                <input type="time" required />
              </div>

              <div className="form-row">
                <select required>
                  <option value="">Количество гостей</option>
                  <option>1 человек</option>
                  <option>2 человека</option>
                  <option>3-4 человека</option>
                  <option>5-6 человек</option>
                  <option>7+</option>
                </select>

                <select required>
                  <option value="">Зона</option>
                  <option>В зале</option>
                  <option>У окна</option>
                  <option>На террасе</option>
                </select>
              </div>

              <textarea placeholder="Комментарий (необязательно)"></textarea>

              <button type="submit" className="booking-btn">
                ЗАБРОНИРОВАТЬ
              </button>

            </form>

            {showMessage && (
              <div className="success-message">
                ✅ Ваша заявка отправлена!
              </div>
            )}

          </div>

        </div>
      </div>

      <div className="menu-order-block">
        <div className="container">
          <div className="menu-order-content">
            <div>
              <div className="menu-order-title">Ждём вас!</div>
              <div className="menu-order-text">
                Мы подготовим лучший столик для вас
              </div>
            </div>

            <Link to="/menu" className="menu-order-btn">
              ПОСМОТРЕТЬ МЕНЮ
            </Link>
          </div>
        </div>
      </div>

      <div className="footer">
        Project MTUCI 2026
      </div>
    </>
  )
}

export default Booking
