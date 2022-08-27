import React from 'react'

import { Container } from '../../layouts'

const AboutPage = () => {
  return (
    <Container>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <h1 className='ui-title-1 text-center'>В этом приложении</h1>

        <p>
          В этом приложении мы напишем свой интернет магазин, в котором будем
          использовать react-router и собственный Store. Все продукты будут
          храниться в общем хранилище приложения, а роутер будет обрабатывать
          все динамические маршруты.
        </p>

        <ul className='ml-3 mt-4'>
          <li>
            🔥 Взаимодействие с seeders при помощи useState, useEffect и
            изолирование даты в отдельный json
          </li>
          <li>🔥 Хранение и сбор данных из локального хранилища</li>
          <li>🔥 Children и "бокс" компоненты</li>
          <li>🔥 Продвинутая работа с формами в реакте</li>
          <li>🔥 Чекбоксы их "связь" с инпутами</li>
          <li>🔥 Валидация входящих параметров</li>
          <li>🔥 Передача данных между компонентами и обратно</li>
        </ul>

        <h3 className='ui-title-2 mt-4'>А также мелочи:</h3>
        <ul className='ui-ol'>
          <li>Модель для работы с формами</li>
          <li>Продвинутая работа с инпутами и стейтом</li>
          <li>Универсальные компоненты листов и "айтемов"</li>
          <li>Использование useState для массивов</li>
          <li>
            Хранение данных в localStorage (данные остануться даже после
            перезагрузки страницы)
          </li>
          <li>Array merge для стейта</li>
          <li>Знакомство с seeders и изолирование даты в отдельный json</li>
          <li>Перенос "задач по умолчанию" в seeders</li>
          <li>Деплой проекта на GitHub</li>
        </ul>

        <p className='mt-8'>
          Сделано на курсе
          <a
            target='_blank'
            href='https://tocode.ru/courses/react-s-nulya-do-rezultata/'
            className='ui-link ml-1'
          >
            React.js - С нуля до про
          </a>
        </p>
      </div>
    </Container>
  )
}

export default AboutPage
