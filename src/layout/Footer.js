import React from 'react'
import img1 from './images/Screenshot_1.png'
import img2 from './images/Screenshot_2.png'
import img3 from './images/Screenshot_3.png'
import './Footer.scss'
const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="footer">
          <ul>
            <li className='title'>Biz haqimizda</li>
            <li>Topshirish punktlari</li>
            <li>Vakansiyalar</li>
          </ul>
          <ul>
            <li className='title'>Topshirish punktlari</li>
            <li>Biz bilan bog'lanish</li>
            <li>Savol-Javob</li>
          </ul>
          <ul>
            <li className='title'>Tadbirkorlarga</li>
            <li>Uzumda soting</li>
            <li>Sotuvchi kabinetiga kirish</li>
          </ul>
          <ul>
            <li className='title'>Ilovani yuklab olish</li>
            <li> <img src={img1} alt="AppStore" /><img src={img2} alt="Google PLay" /></li>
            <li className='title'>Uzum ijtimoiy tarmoqlarda</li>
            <li><img src={img3} alt="social networks" /></li>
          </ul>
        </div>
        <hr />
        <div className='footerbottom'>
          <h3>Maxfiylik kelishuvi
            Foydalanuvchi kelishuvi
          </h3>
          <p>«2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>
        </div>
      </div>
    </>
  )
}

export default Footer