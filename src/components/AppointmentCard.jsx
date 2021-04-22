import React from 'react'
import '../styles/aCard.scss'

export const AppointmentCard = ({ item }) => {
  const { date, address, doctor, speciality, photo } = item

  const displayParsedDate = (date) => {
    const days = [
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
      'Воскресенье',
    ]
    const parsed = new Date(date)
    const dayOfTheWeek = days[parsed.getDay() - 1]
    const day = parsed.getDate().toString().padStart(2, 0)
    const month = (parsed.getMonth() + 1).toString().padStart(2, 0)
    const year = parsed.getFullYear().toString().slice(2)
    const h = parsed.getHours() - 3
    const m = parsed.getMinutes()
    return (
      dayOfTheWeek + ' ' + day + '.' + month + '.' + year + ' | ' + h + ':' + m
    )
  }

  return (
    <div className='appointment-card'>
      <p className='appointment-card__date'>{displayParsedDate(date)}</p>
      <p>{address}</p>
      <div className='appointment-card__doctor'>
        <div className='appointment-card__photo'>
          <img src={photo} alt='doctor' />
        </div>
        <div className='appointment-card__descr'>
          {doctor} <br />
          <span>{speciality}</span>
        </div>
      </div>
      <button className='btn-main btn-main_cancel'>Отменить</button>
    </div>
  )
}
