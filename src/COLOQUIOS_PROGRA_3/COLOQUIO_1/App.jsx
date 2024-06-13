import React, { useState } from 'react';
import { Alert, Comment, Modal, ProductItem } from './components';
import './styles/main.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setShowAlert(true);
  };

  const handleCloseModal = () => setShowModal(false);
  const handleCloseAlert = () => setShowAlert(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <div className="container">
      <button className="button is-info" onClick={toggleDarkMode}>
        {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
      <ProductItem
        name="Rick Pickle"
        price={29.99}
        imageUrl="https://w7.pngwing.com/pngs/224/570/png-transparent-rick-and-morty-rick-sanchez-pickle-rick-morty-smith-pickled-cucumber-rick-and-morty-season-3-rick-and-morty-food-grass-morty-smith.png"
        onAddToCart={() => handleAddToCart('Rick Pickle')}
      />
      <Comment
        username="Lucas Roman"
        content="Esto es Pepinillo rick de edición limitada"
        date={new Date().toLocaleDateString()}
      />
      <button className="button is-info" onClick={() => setShowModal(true)}>Ver Modal</button>
      {showModal && (
        <Modal
          title="¿Tú también lo quieres, verdad?"
          content="¡Wubba lubba dub dub!"
          onClose={handleCloseModal}
        />
      )}
      {showAlert && (
        <Alert
          type="success"
          message="¡Producto agregado al carrito!"
          onClose={handleCloseAlert}
        />
      )}
    </div>
  );
};

export default App;
