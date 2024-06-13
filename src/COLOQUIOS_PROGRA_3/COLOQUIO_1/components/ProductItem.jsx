import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({ name, price, imageUrl, onAddToCart }) => {
  return (
    <div className="card product-item">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imageUrl} alt={name} className="product-image"/>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">${price.toFixed(2)}</p>
          </div>
        </div>
        <div className="content">
          <button className="button is-primary" onClick={onAddToCart}>Agregar al Carrrrrito</button>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductItem;
