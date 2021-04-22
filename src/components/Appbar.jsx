import React from 'react'
import '../styles/appbar.scss'
import search from '../assets/icons/appbar/search.png'
import bell from '../assets/icons/appbar/bell.png'
import eye from '../assets/icons/appbar/eye.png'
import profile_pic from '../assets/images/profile_pic.png'
import dropdown from '../assets/icons/appbar/dropdown.png'

export const Appbar = () => {
  return (
    <div className='appbar'>
      <a href='#home' className='appbar__logo'>
        Логотип
      </a>
      <div className='appbar__wrapper'>
        <h3>Мой профиль</h3>
        <div>
          <button className='appbar__btn'>
            <img src={search} alt='search' />
          </button>
          <button className='appbar__btn'>
            <img src={bell} alt='bell' />
          </button>
          <button className='appbar__btn'>
            <img src={eye} alt='eye' />
          </button>
          <button className='appbar__btn'>
            <img
              src={profile_pic}
              alt='profile_pic'
              className='appbar__profile'
            />
            <img src={dropdown} alt='dropdown' />
          </button>
        </div>
      </div>
    </div>
  )
}
