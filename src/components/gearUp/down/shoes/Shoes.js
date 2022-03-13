import React from 'react'
import PropTypes from 'prop-types';
import '../shoes/Shoes.css'


export default function Shoes({img = 'nike10.jpeg', model = "Nike Blazer Mid '77", type = "Men's Shoes", price = 100}){


    return(
        <div className="shoes_container">
            <div className="shoes_container_img">
                <img className="shoes_img" src={img} alt="img" />
            </div>
            <div className="shoes_price_container">
               <div className="shoes_left">
                   <div className="shoes_model">{model}</div>
                   <div className="shoes_type">{type}</div>
               </div>
               <div className="shoes_right">
                  <div className="shoes_price">BGN{' ' + price.toFixed(2)}</div>
               </div>
            </div>
        </div>
    )
}

Shoes.propTypes = {
 price: PropTypes.number,
 model: PropTypes.string,
 type: PropTypes.string,
 img: PropTypes.string
}