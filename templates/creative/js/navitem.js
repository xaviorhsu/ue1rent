/* --------------- Navitem --------------*/
var navI = ["portfolio;招租資訊","tastyfood;雅房物件","historic;圖影覽視","family;位置街景","about;相關須知","contact;附　錄"];
var navP = ["sp0;房屋外觀格局","sp2;雅1房景觀","sp1;公共區景觀","sp3;雅2房景觀","sp5;整體相關景觀","sp4;雅3房景觀"];
var strI = "";
for (var item=0;item<navI.length;item++)	{
    var ss=navI[item].split(";");
	strI += '<li class="nav-item"><a class="nav-link rounded js-scroll-trigger" href="#'+ss[0]+'" >'+ss[1]+'</a></li>';
    }
    $("#navbarResponsive ul").html(strI);	var strP = "";
for (var item=0;item<navP.length;item++)	{
    var ss=navP[item].split(";");	act=(item==0)?'class="active"':"";
    strP += '<li data-target="#carouselExampleIndicators" data-slide-to="'+item+'" '+act+'"></li>';
    }
    $("#carouselExampleIndicators ol.carousel-indicators").html(strP);