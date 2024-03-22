import React from 'react';
import { NavLink } from 'react-router-dom';
import Helper from './Helper/Helper';

const Product = ({ id, name, image, price, category }) => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    return (
        <NavLink to={`/singleproduct/${id}`} onClick={scrollToTop}>
            <div className='card'>
                <figure>
                    <img src={image} alt="error" />
                    <figcaption className="caption">{category}</figcaption>
                </figure>
                <div className="card-data">
                    <div className="card-data-flex">
                        <h3>{name}</h3>
                        <p className="card-data--price"><Helper price={price} /></p>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default Product;
