import React, { useEffect, useState } from 'react'
import '../styles/appointmentsPage.scss'
import { Link } from 'react-router-dom'
import { AppointmentCard } from '../components/AppointmentCard'
import { jsonLikeResponse } from '../database'
import arrow from '../assets/icons/arrow_left.png'
import Calendar from 'react-calendar'

export const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([])
  const [findedApp, setFindedApp] = useState([])

  // Функция преобразования даты в формат ДД.ММ.ГГГГ для сравнения по дате
  const parseDate = (date) => {
    const parsed = new Date(date)
    return (
      parsed.getDate().toString().padStart(2, 0) +
      '.' +
      (parsed.getMonth() + 1).toString().padStart(2, 0) +
      '.' +
      parsed.getFullYear()
    )
  }

  // Наполнение плиток календаря количеством записей
  const tileContent = ({ date, view }) => {
    // Переводим каждый день из календаря в нужный формат
    const dayParsed = parseDate(date)

    // Переводим даты записей в такой же формат
    const dates = appointments.map((item) => parseDate(item.date))

    // Ищем совпадения и возвращаем массив
    const findedDates = dates.filter((item) => item === dayParsed)

    return view === 'month' && findedDates.length ? (
      <span className='calendar-styles__mark'>{findedDates.length}</span>
    ) : null
  }

  // Фильтрация записей по выбранному дню
  const filterByDate = (value) => {
    const finded = appointments.filter((item) => {
      return parseDate(item.date) === parseDate(value)
    })
    setFindedApp(finded)
  }

  // Отключение прошедших дней
  const disableTileHandler = ({ date, view }) => {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    return view === 'month' && date < today
  }

  // Эмуляция обработки запроса
  useEffect(() => {
    setAppointments(jsonLikeResponse)
  }, [])

  useEffect(() => {
    setFindedApp(appointments)
  }, [appointments])

  return (
    <div className='appointments-page'>
      <div className='appointments-page__title'>
        <Link to='/'>
          <img src={arrow} alt='back' />
        </Link>
        <h5>Мои записи</h5>
      </div>

      <div className='appointments-page__wrapper'>
        {findedApp.length ? (
          <div className='appointments-page__list'>
            {findedApp.map((item) => (
              <AppointmentCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className='appointments-page__list-empty'>
            <p>На этот день записей нет</p>
          </div>
        )}

        <div className='appointments-page__calendar'>
          <Calendar
            className='calendar-styles'
            showNeighboringMonth={false}
            tileContent={tileContent}
            onClickDay={(value) => filterByDate(value)}
            tileDisabled={disableTileHandler}
          />
        </div>
      </div>
    </div>
  )
}
