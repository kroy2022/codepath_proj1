import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Item(props) {

    const restaurants = props.restaurants;

    const handleClick = props.handleClick;
    return (
        <div className="food-list">
            {restaurants.map((restaurant) => (
                <div className='food-item' key={restaurant.id}> 
                    <img className="img" src={restaurant.img}/>
                    <h1 className="title">{restaurant.title}</h1>
                    <h2 className='description'>{restaurant.description}</h2>
                    <button className="button" onClick={() => handleClick(restaurant.link)}>View Menu</button>
                </div>  
            ))}
        </div>
    )
}

export default Item