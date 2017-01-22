# lightbox

Очень простой и легкий LightBox,
Позволяет получить все изображения со страницы.

И сформировать галерею страницы

Для инициализации данного модуля надо подключить lightbox[.min].css и lightbox[.min].js

Пример инициализации: 
<code>
&#60script src="lightbox.min.js"></script>
<script>
    window.addEventListener('load' , function ()
    {
        window.LightBox(<selector>,<timeout>);
    });
</script>

<selector> - css селектор изображений (обязательный параметр) 
<timeout> - отсрочка инициализации скрипта ( не обязательный параметр )
</code>


# lightbox

Very simple and easy LightBox,
Lets get all of the images from the page.

And form gallery

To initiate this module, it is necessary to connect the lightbox [.min] .css and lightbox [.min] .js

Initialization example:

<script src = "lightbox.min.js"> </ script>
<script>
     window.addEventListener ( 'load', function ()
     {
         window.LightBox (<selector>, <timeout>);
     });
</script>

<selector> - css image selector (required)
<timeout> - delaying initialization script (not required)
