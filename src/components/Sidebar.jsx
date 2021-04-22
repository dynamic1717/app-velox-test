import React from 'react'
import { Nav } from 'react-bootstrap'
import '../styles/sidebar.scss'
import appvelox from '../assets/icons/sidebar/appvelox.png'
import profile_icon from '../assets/icons/sidebar/profile.svg'
import doctors_icon from '../assets/icons/sidebar/doctors.svg'
import messages_icon from '../assets/icons/sidebar/messages.svg'
import testing_icon from '../assets/icons/sidebar/testing.svg'
import book_icon from '../assets/icons/sidebar/book.svg'
import help_icon from '../assets/icons/sidebar/help.svg'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='d-flex flex-column align-items-center'>
        <Nav justify className='sidebar__nav'>
          <Nav.Item className='sidebar__li'>
            <Nav.Link href='/' className='sidebar__link sidebar__link_active'>
              <img src={profile_icon} alt='profile' />
              <p>Профиль</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='sidebar__li'>
            <Nav.Link className='sidebar__link'>
              <img src={doctors_icon} alt='doctors' />
              <p>Врачи и клиники</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='sidebar__li'>
            <Nav.Link className='sidebar__link'>
              <img src={messages_icon} alt='messages' />
              <p>Сообщения</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='sidebar__li'>
            <Nav.Link className='sidebar__link'>
              <img src={testing_icon} alt='testing' />
              <p>Тестирование</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='sidebar__li'>
            <Nav.Link className='sidebar__link'>
              <img src={book_icon} alt='book' />
              <p>Полезно знать</p>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <button className='btn-main'>Подать заявку</button>
      </div>

      <div>
        <Nav.Item className='sidebar__li'>
          <Nav.Link className='sidebar__link'>
            <img src={help_icon} alt='help' />
            <p>Помощь</p>
          </Nav.Link>
        </Nav.Item>
        <div style={{ padding: '0 1rem 1rem 1rem' }}>
          <img src={appvelox} alt='appvelox' />
        </div>
      </div>
    </div>
  )
}
