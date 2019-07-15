
(function () {
  'use strict';

  const END = 'завершенно'; // данные текст нужно выводить если событие прошло
  const MS_IN_SEC = 1000; // количество миллисекнуд в секнуден
  const MS_IN_MINUTE = 60 * MS_IN_SEC;
  const MS_IN_HOUR = 60 * MS_IN_MINUTE;
  const MS_IN_DAY = 24 * MS_IN_HOUR;


  class TimeLeft {

    /**
     * @param el {Element} - ссылка на корневой элемент
     */
    constructor(el) {
    }

    /**
     * Форматируем строку в дату. Чтобы написать данный метод нужно почитать главу http://learn.javascript.ru/datetime
     * @param {string} str - строка с датой в формате `year.month.day hours:minutes:second`
     * @return {Date} - возвращаем объект даты
     */
    parseDate(str) {
    }

    /**
     * Статчный метод, который можно вызывать не посредственно от класса, а не от объекта.
     * Подробнее здесь http://learn.javascript.ru/es-class#staticheskie-svoystva
     * @param el
     */
    static create(el) {
      return new TimeLeft(el);
    }
  }

  window.TimeLeft = TimeLeft;
})();
