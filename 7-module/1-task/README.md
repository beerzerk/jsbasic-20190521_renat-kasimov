## Сколько осталось дней до события

Нам часто на сайте нужно показывать сколько осталось часов, минут, секунд до какого-либо события.
В этом задании вам предлагается сделать такой вот компонент.

Пример использования

```html
<html>
<head></head>
<body>
    
    <div>
        До конца акции осталось <span class="js-time-left time-left" data-from="2018.01.01 00:00:00" data-to="2018.01.02 01:00:00"></span>
    </div>
        
    <script>
        (function () {
          'use strict';
          
          // Создаем компонент
          let el = document.querySelector('.js-time-left');
          TimeLeft.create(el);  
        })();
    </script>
    
</body>
</html>

```

После вызова `TimeLeft.create(el)` для единственного элемента на странице,
его содержимое должно изменится на `1 день, 1 час` (разница между *data-from* и *data-to*).

Нужно учесть, что:
 - в зависимости от количества может менятся написание:  `1 час`, `2 минуты`, `10 часов`, `20 минут`
 - если data-from > data-to, то вместо времени нужно вывести слово `завершенно`
 - если количество часов, минут или секунд равно нулю, то их не нужно выводить (напирер `1 час 20 секунд`)
 - самая большая еденица измерения `день`, `месяц` и год `игнорируем`, т.е. правильным будет ответ `85 дней, 2 часа, 10 секунд`
 - все еденицы разделяются запятой
 - аттрибуты data-from и data-to обязательны, если хотя бы один не определен, то должно вывестись `завершенно`  


