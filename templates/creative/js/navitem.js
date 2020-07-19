/* --------------- Navitem --------------*/
var nav = ["portfolio;招租資訊","tastyfood;雅房物件","historic;圖影覽視","family;位置街景","about;相關須知","contact;附　錄"];
var str = "";
for (var item=0;item<nav.length;item++)	{
    var ss=nav[item].split(";");
	str += '<li class="nav-item"><a class="nav-link rounded js-scroll-trigger" href="#'+ss[0]+'" >'+ss[1]+'</a></li>';
    }
    $("#navbarResponsive ul").html(str);
/* --------------- Navitem --------------*/