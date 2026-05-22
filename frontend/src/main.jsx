import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import Menu from './Menu.jsx'
import About from './about.jsx'
import Booking from './Booking.jsx'
import Cart from './Cart.jsx'

function Root() {

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product) => {

    const existingItem = cartItems.find(item => item.id === product.id)

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    }
    else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ))
  }

  const decreaseQuantity = (id) => {

    setCartItems(cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0))
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<App cartItems={cartItems} />}
        />

        <Route
          path="/menu"
          element={
            <Menu
              addToCart={addToCart}
              cartItems={cartItems}
            />
          }
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/booking"
          element={<Booking />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              clearCart={clearCart}
            />
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
