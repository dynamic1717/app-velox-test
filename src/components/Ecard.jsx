import React from 'react'
import '../styles/eCard.scss'

export const Ecard = ({ icon, title, text }) => {
  return (
    <div className='e-card'>
      <div className='e-card__icon'>
        <img src={icon} alt='report' />
      </div>
      <div className='e-card__text'>
        <p className='e-card__title'>{title}</p>
        <hr />
        {title === 'Информация о пациенте' ? (
          <ul>
            <li>Ваши личные данные</li>
            <li>Рекомендации врачей</li>
            <li>История болезней</li>
          </ul>
        ) : (
          <p>{text}</p>
        )}
      </div>
    </div>
  )
}
