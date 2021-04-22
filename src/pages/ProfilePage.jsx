import React, { useEffect, useState } from 'react'
import '../styles/profilePage.scss'
import { Link } from 'react-router-dom'
import report from '../assets/icons/e-card/report.svg'
import add from '../assets/icons/e-card/add.svg'
import clock from '../assets/icons/e-card/clock.svg'
import lab from '../assets/icons/e-card/lab.svg'
import { Ecard } from '../components/Ecard'
import { jsonLikeResponse } from '../database'
import { AppointmentCard } from '../components/AppointmentCard'

const wordsHelper = ['запись', 'записи', 'записей']

export const ProfilePage = () => {
  const [appointments, setAppointments] = useState([])

  // Эмуляция обработки запроса
  useEffect(() => {
    setAppointments(jsonLikeResponse)
  }, [])

  return (
    <div className='profile-page'>
      <h5>Записи на прием</h5>
      <div className='appointment__wrapper'>
        {appointments.map((item, index) =>
          index < 2 ? <AppointmentCard key={item.id} item={item} /> : null
        )}
        {appointments.length > 2 && (
          <div className='appointment__more'>
            <p>
              Еще {appointments.length - 2}{' '}
              {appointments.length - 2 === 1
                ? wordsHelper[0]
                : appointments.length - 2 < 4
                ? wordsHelper[1]
                : wordsHelper[2]}
            </p>
            <Link to='/appointments'>Подробнее</Link>
          </div>
        )}
      </div>

      <h5>Электронная карта</h5>
      <div className='e-card__wrapper'>
        <Ecard icon={report} title={'Информация о пациенте'} text={null} />
        <Ecard
          icon={lab}
          title={'Результаты анализов'}
          text={'Вы можете узнать здесь результаты своих анализов'}
        />
        <Ecard
          icon={add}
          title={'Добавить информацию'}
          text={'Добавляйте в свою электронную медицинскую карту новые данные'}
        />
        <Ecard
          icon={clock}
          title={'История приемов'}
          text={
            'Вся информация о полученных услугах за все время хранится здесь'
          }
        />
      </div>
    </div>
  )
}
