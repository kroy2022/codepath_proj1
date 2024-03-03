import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './Item'
import mac from './assets/macdonalds.jpg'
import bk from "./assets/BK.jpg"
import tb from "./assets/TB.jpg"
import wen from "./assets/wendys.png"
import chip from "./assets/chipotle.jpg"
import og from "./assets/olive.jpg"
import jj from "./assets/jj.jpg"
import sub from "./assets/subway.png"
import gi from "./assets/globe.jpg"
import pe from "./assets/panda.jpg"


function App() {

  const[restaurants, setRestaurants] = useState([
    {title: "McDonald's", img: mac, description: "American", link: "https://www.mcdonalds.com/us/en-us.html", id: 1},
    {title: "Burger King", img: bk, description: "American", link: "https://www.bk.com/?gclsrc=3p.ds", id: 2},
    {title: "Taco Bell", img: tb, description: "Mexican", link: "https://www.tacobell.com/", id: 3},
    {title: "Wendys", img: wen, description: "American", link: "hthttps://order.wendys.com/categories?site=menu", id: 4},
    {title: "Chipotle", img: chip, description: "Mexican", link: "https://www.chipotle.com/?gclsrc=3p.ds", id: 5},
    {title: "Olive Garden", img: og, description: "Italian", link: "https://www.olivegarden.com/home", id: 6},
    {title: "Jimmy Johns", img: jj, description: "American", link: "https://www.jimmyjohns.com/", id: 7},
    {title: "Subway", img: sub, description: "American", link: "https://www.subway.com/en-us", id: 8},
    {title: "Globle Indian", img: gi, description: "Indian", link: "https://www.globemhk.com/", id: 9},
    {title: "Panda Express", img: pe, description: "Chinese", link: "https://www.pandaexpress.com/", id: 10}
  ]);

  const handleClick = (url) => {
    window.location.href = url;
  }

  return (
    <>
      <div className='Header'>
        <a onClick={handleClick} class="fastfood-top" target="_blank">
          <img src='https://heroic-pixie-6d7f91.netlify.app/awning.png' className="samosa" alt="Vite logo" />
        </a>
        <h1>Fast Food Favorites</h1>
      </div>
      <div class="container">
        <Item restaurants={restaurants} handleClick={handleClick}/>
      </div>
    </>
  )
}

export default App
