# lightbox

Очень простой и легкий LightBox,
Позволяет получить все изображения со страницы.

И сформировать галерею страницы

Для инициализации данного модуля надо подключить lightbox[.min].css и lightbox[.min].js

Пример инициализации: 


<code>
&lt;script src="js/lightbox.min.js"&gt;&lt;/script&gt;
<br />&lt;script&gt;
<br /> window.addEventListener('load' , function ()<br /> 
{<br /> window.LightBox('p img',1000);<br /> });
<br />&lt;/script&gt;
</code>

<selector> - css селектор изображений (обязательный параметр) 
<timeout> - отсрочка инициализации скрипта ( не обязательный параметр )



# lightbox

Very simple and easy LightBox,
Lets get all of the images from the page.

And form gallery

To initiate this module, it is necessary to connect the lightbox [.min] .css and lightbox [.min] .js

Initialization example:


<code>
&lt;script src="js/lightbox.min.js"&gt;&lt;/script&gt;<br />&lt;script&gt;<br /> window.addEventListener('load' , function ()<br /> {<br /> window.LightBox('p img',1000);<br /> });<br />&lt;/script&gt;
</code>

<selector> - css image selector (required)
<timeout> - delaying initialization script (not required)
