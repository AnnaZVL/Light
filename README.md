#Сборка при 
npm run deploy разворачивает на GITHabPage

##HTML
Все собирается в app/index.html из папок pages components. Компоненты подключаются через @@include('components/header.html')

##SCSS
Все файлы компонентов собираются в общий style.css. Файли библиотек css собираются отдельно. В общем файле нужно сначала подключить вспомогательные файлы переменных/миксины, а потом компоненты. переменные/миксины подключаются в каждом файле компонента отдельно

##JS
Тут без модулей. Все файлы собираются в один в порядке списка в gulpfile.js. Сначала библиотеки, потом мои.

##SVG
При сборке создается спрайт из всех иконок svg. 
Подключение:
"<svg class="icon icon--map">
    <use xlink:href="images/sprite.svg#icon--map"></use>
</svg>"
или "background: url('../images/sprite.svg#icon--checked') no-repeat center;"
#icon--map id иконки в спрайте #название папки -- название файла иконки

##IMAGES
Загрузить только png. При сборке добавятся другие форматы. Подключать:
background-image: image-set(
        '../images/hero/Hero.avif' type('image/avif'),
        '../images/hero/Hero.webp' type('image/webp'),
        '../images/hero/Hero.png' type('image/png')
    );
background-repeat: no-repeat;
background-position: center;
background-size: cover;

##FONTS
Загрузить только ttf. woff/woff2 создаются при сборке