import React from 'react'
import logo from '../layout/images/Screenshot_6.png'
import icon1 from './images/manicon.svg'
import icon2 from './images/hearticon.svg'
import icon3 from './images/carticon.svg'
import '../Global.scss'
import './Header.scss'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav className='container'>
        <div className='NavLeft'><Link to={'/'}><img src={logo} alt="nimadir" /></Link></div>
        <div className='NavCenter'>
          <button className='btn1'>Katalog</button>
          <input type="text" placeholder='Maxsulotlar va turkumlar izlash' />
        </div>
        <div className='NavRight'>
          <ul>
            <li><img src={icon1} alt="" /> <Link to={'../Contact'}>Kirish</Link></li>
            <li><img src={icon2} alt="" /><Link to={'../Sorted'}>Saralanganlar</Link></li>
            <li><img src={icon3} alt="" /><Link to={'../SinglePage'}>Savat</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header