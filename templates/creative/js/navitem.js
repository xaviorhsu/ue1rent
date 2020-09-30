/* --------------- Navitem --------------*/
var http_ip=(location.hostname=="websrv.local.tw")?"http://websrv.local.tw/":"https://xaviorhsu.github.io/";
var navI = ["portfolio;招租資訊","tastyfood;雅房物件","historic;圖影覽視","family;位置街景","about;相關須知","contact;附　錄"];
var str = "";
for (var item=0;item<navI.length;item++)	{
    var ss=navI[item].split(";");
	str += '<li class="nav-item"><a class="nav-link rounded js-scroll-trigger" href="#'+ss[0]+'" >'+ss[1]+'</a></li>';
    }
$("#navbarResponsive ul").html(str);
/* --------------- Navidat --------------*/
var yymmddcc=show_today();
      date='<b>民國'+(yymmddcc[0]-1911)+'年'+yymmddcc[2]+'月'+yymmddcc[3]+'日 星期'+yymmddcc[4]+'</b>';
      $('#Dd0').html(date);
//            產生民國xxx年xx月xx日星期X xx時xx分xx秒的資料
function show_today(){
    var today=new Date(); var weekday=["日","一","二","三","四","五","六"]; 
    var result_today = new Array();    
    result_today[0]=today.getFullYear();                                                    //西元年
    result_today[1]=today.getFullYear()-1911;                                               //民國年
    var Mon=today.getMonth()+1;
    result_today[2]=(Mon<10)?('0'+Mon):Mon;                                                 //月
    result_today[3]=(today.getDate()<10)?('0'+today.getDate()):today.getDate();             //日
    result_today[4]=weekday[today.getDay()];                                                //星期    
    result_today[5]=(today.getHours()<10)?('0'+today.getHours()):today.getHours();          //小時
    result_today[6]=(today.getMinutes()<10)?('0'+today.getMinutes()):today.getMinutes();    //分
    result_today[7]=(today.getSeconds()<10)?('0'+today.getSeconds()):today.getSeconds();    //秒
    return result_today;
  }
//------------------------------------------