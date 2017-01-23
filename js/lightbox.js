(function ()
{
    if ( !window.LightBox )
    {
        window.LightBox = function (selector , timeout)
        {
            var img_select;
            var image_lists;

            img_select = selector;
            var modal = document.querySelector('#lightbox');
            var modal_show = false;
            image_lists = document.querySelectorAll(img_select);
            var preview = document.querySelector('#lightbox .lightbox_grid .row-max');
            var title = document.querySelector('#lightbox .title .content');
            var image_list_container = document.querySelector('#lightbox .image-list');
            var image_list_container_items = document.querySelectorAll('#lightbox .image-list li');
            var drag = document.querySelector('#lightbox .lightbox_grid .row-max');
            var button_prev = document.querySelector('#lightbox .prev_image');
            var button_next = document.querySelector('#lightbox .next_image');
            var shadow = document.querySelector('#lightbox .shadow');
            var close = document.querySelector('#lightbox .close');
            var CurrentImage = 0;
            var initialPoint;
            var finalPoint;

            drag.addEventListener('touchstart' , function (event)
            {
                event.preventDefault();
                event.stopPropagation();
                initialPoint = event.changedTouches[0];
            } , false);

            drag.addEventListener('touchend' , function (event)
            {
                event.preventDefault();
                event.stopPropagation();
                finalPoint = event.changedTouches[0];
                var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
                var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
                if ( xAbs > 20 || yAbs > 20 )
                {
                    if ( xAbs > yAbs )
                    {
                        if ( finalPoint.pageX < initialPoint.pageX )
                        {
                            PrevImage();
                        }
                        else
                        {
                            NextImage();

                        }
                    }
                    else
                    {
                        if ( finalPoint.pageY < initialPoint.pageY )
                        {
                            /*СВАЙП ВВЕРХ*/
                        }
                        else
                        {
                            /*СВАЙП ВНИЗ*/
                        }
                    }
                }
            } , false);

            document.addEventListener('keydown' , function (e)
            {
                if ( modal_show )
                {
                    switch ( e.key )
                    {
                    case 'ArrowRight':
                        NextImage();
                        break;
                    case 'ArrowLeft':
                        PrevImage();
                        break;
                    }

                }
            });

            var closeModal = function ()
            {
                document.getElementsByTagName('html')[0].style.overflow = 'auto';
                modal.style.display = 'none';
                modal_show = false;
            };

            var showModal = function (e)
            {

                var target = e.target;
                var tagName = e.target.tagName;
                switch ( tagName )
                {
                case 'A':
                    target = target.getElementsByTagName('A')[0];
                    break;
                }
                preview.style.backgroundImage = "url('" + target.src + "')";
                var list = findList(image_list_container_items , target.src);
                CurrentImage = list;
                clearClassList();
                list = image_list_container_items[list];
                list.classList.add('active');
                list.scrollIntoView(true);
                document.getElementsByTagName('html')[0].style.overflow = 'hidden';
                modal.style.display = 'flex';
                modal_show = true;
            };

            var BindList = function (e)
            {
                clearClassList();
                var tagName = e.target.tagName;

                var obj;
                switch ( tagName )
                {
                case 'LI':
                    obj = e.target;
                    break;
                case 'IMG':
                    obj = e.target.parentNode;
                    break;
                }
                var target_img = obj.getElementsByTagName('img')[0];
                CurrentImage = find(image_lists , target_img.src);
                obj.classList.add('active');
                preview.style.backgroundImage = "url('" + target_img.src + "')";
            };

            var initModal = function ()
            {
                image_lists = document.querySelectorAll(img_select);
                for ( var i = 0; i < image_lists.length; i++ )
                {
                    image_lists[i].addEventListener('click' , function (e)
                    {
                        showModal(e);
                    });
                }

                title.innerText = document.getElementsByTagName('title')[0].innerText;
                var content = '';
                image_list_container.innerHTML = '';
                for ( i = 0; i < image_lists.length; i++ )
                {
                    var val = image_lists[i];
                    content += '<li class="image-item"><img src="' + val.src + '" alt=""></li>';
                    image_list_container.innerHTML = content;
                }

                image_list_container_items = document.querySelectorAll('#lightbox .image-list li');
                for ( i = 0; i < image_list_container_items.length; i++ )
                {
                    image_list_container_items[i].addEventListener('click' , function (e)
                    {
                        BindList(e);
                    });
                }
            };

            if ( timeout )
            {
                setTimeout(function ()
                {
                    initModal();
                } , timeout);
            }
            else
            {
                initModal();
            }

            shadow.addEventListener('click' , function ()
            {
                closeModal();
            });

            button_next.addEventListener('click' , function ()
            {
                NextImage();
            });

            button_prev.addEventListener('click' , function ()
            {
                PrevImage();
            });

            var NextImage = function ()
            {
                CurrentImage++;
                if ( CurrentImage > image_lists.length - 1 )
                {
                    CurrentImage = 0;
                }
                var img = image_lists[CurrentImage].src;
                var list = findList(image_list_container_items , img);
                list = image_list_container_items[list];

                show_prev(img , list);
            };

            var PrevImage = function ()
            {
                CurrentImage--;
                if ( CurrentImage < 0 )
                {
                    CurrentImage = image_lists.length - 1;
                }
                var img = image_lists[CurrentImage].src;
                var list = findList(image_list_container_items , img);
                list = image_list_container_items[list];

                show_prev(img , list);
            };

            var show_prev = function (img , list)
            {
                clearClassList();
                preview.style.backgroundImage = "url('" + img + "')";
                list.classList.add('active');
                list.scrollIntoView(true);
            };

            var clearClassList = function ()
            {
                for ( var i = 0; i < image_list_container_items.length; i++ )
                {
                    image_list_container_items[i].classList.remove('active');
                }
            };

            var find = function (array , value)
            {

                for ( var i = 0; i < array.length; i++ )
                {
                    if ( array[i].src == value ) return i;
                }
                return -1;
            };

            var findList = function (array , value)
            {
                for ( var i = 0; i < array.length; i++ )
                {
                    var val = array[i].getElementsByTagName('img')[0];
                    if ( val.src == value ) return i;
                }
                return -1;
            };

            close.addEventListener('click' , function ()
            {
                closeModal();
            });

            var links = document.querySelectorAll('a[data-slide]');
            for ( var i = 0; i < links.length; i++ )
            {
                links[i].addEventListener('click' , function (e)
                {
                    e.preventDefault();
                    return false;
                });
            }
        };

    }
})();