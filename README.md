# Проект "Чердачок" 

## О проекте
Сайт частной коллекции открыток и календарей. Первый учебный проект (2022 г.)

**Инструменты:** Visual Studio Code

**Языки:** HTML, CSS, JavaScript, jQuery

## Реализованный функционал:

### 1 - **Верстка страниц** (HTML, CSS)

  + **элементы, общие для всех страниц:**
     * _header_:
         - изображения-шапки, меняющиеся в зависимости от ширины экрана (атрибуты `srcset` и `sizes` тега `<img>`);
         - основное меню, оформленное в виде списка `<ul>`; кнопки - изображения (`<img>`) (активный пункт отображается в виде открытого ящика картотеки). Использовано свойство `grid`.
     * _footer_ (использовано свойство `grid`):
         - стилизованная табличка-копирайт;
         - иконки-ссылки на форму обратной связи и форму "Оставить отзыв";
         - иконки социальных сетей (использовано свойство `grid`).  

  + **главная страница "О нас"** (использовано свойство `grid`):
     * _боковое меню_, оформленное в виде списка `<ul>`; кнопки - изображения (`<img>`). Использовано свойство `grid`;
     * _иконки_, соответствующие категориям открыток и календарей. При наведении всплывают подсказки (реализовано средствами **JS**, см. далее).

  + **реализация адаптивности верстки**:

### 2 - **Подсказки к категориям открыток и календарей** (JS) - `script.js`

  Подсказки представлены в виде объекта `tips`. Имена свойств объекта соответствуют значениям атрибута `data-tooltip` элементов `<div>` (вложены в блок `<div class="category">`).

  Если подсказка присутствует (проверяется содержимое `dataset.tooltip`), при наведении курсора мыши вызывается функция `explain`.

Функция `explain`:
  + получает координаты объекта, на который был наведен курсор мыши;
  + получает доступ к контейнеру `container`, куда будет выводиться содержимое подсказки;
  + при наличии подсказки присваивает `container` класс `tip` и стиль `display: block`;
  + опрделяет позицию элемента относительно документа с учетом прокрутки;
  + устанавливает значения стиля `top` и `left`;
  + выводит соответствующую подсказку в `container`.

При уходе курсора мыши блок для вывода содержимого подсказки скрывается.

### 3 - **Форма обратной связи** (jQuery)

### 4 - **Форма "Оставить отзыв"** (jQuery)

## Примечание
Все остальные страницы пока находятся в разработке.