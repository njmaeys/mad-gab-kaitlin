import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'

function CardItem(props) {
  const sendOutward = (url) => {
    console.log(url)
  } 

  return (
    <>
      <li className='cards__item'>
        <a href={props.dest} target='_blank'>
          <div className='cards__item__link'>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
              <img
                className='cards__item__img'
                alt={props.alt}
                src={props.src}
              />
            </figure>
            <div className='cards__item__info'>
              <h5 className='cards__item__text'>{props.text}</h5>
            </div>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;