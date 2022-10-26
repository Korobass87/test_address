Макет: https://www.figma.com/file/ioiNY7mRuoTjftQzKQuNSt/Тестовое-задание?node-id=0%3A1

Задача: Сверстать макет панели управления црм, подключиться к сервису https://dadata.ru/api/suggest/address/ и выводить адреса введенные пользователем на страницу.

Описание:
Зарегистрироваться на dadata.ru и получить API ключ для выполнения запросов.
Верстка должна быть семантически верной и оптимизирована для мобильных устройств.
Скрывать боковое меню, если разрешение <= 768px
В боковом меню - пункт “Настройки” должен открываться и закрываться по клику, кнопка “Главная” ведет на страницу с новостями и открывается по умолчанию при запуске проекта, кнопка “Поиск адресов” ведет на страницу поиска адресов, url пути описаны в п.4.
На проекте должно быть 2 url пути - главная “/” с новостями и поиск адресов “/address” -  c полем ввода адреса.
Блок с навигацией и блок с контентом должны скролиться (если контента больше чем укладывается в высоту экрана) независимо друг от друга, при этом header - всегда статичный и всегда перед глазами.
Минимальная длина ввода в поле ввода адреса - 3 символа.
Для иконок, используйте SVG
Ссылки в тексте в блоке “Новости” должны быть подсвечены и кликабельны, почтовые адреса - должны быть кликабельны и направлять в почтовый клиент с заполненным почтовым адресом.

Требования:
Обязательно использовать React, Typescript.
Запрещено использовать UI-библиотеки и их готовые реализации/компоненты.

Приветствуется:
Использование препроцессоров (sass/scss)
Использование webpack

Результат работы опубликуйте в гит-репозитории.
Репозиторий должен быть публичным.
