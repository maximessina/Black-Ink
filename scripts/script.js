var info_img1 = "<p>PLAYER<br/><br/>La puta madre jaja</p>";
var info_img2 = "<p>PAIS 1<br/><br/>Estoy re enfermo que pija</p>";
var info_img3 = "<p>PAIS 2<br/><br/>Matenme de cancer gracias</p>";

$("#barra-navegacion a").mouseover(function(){
	$(this).css("color", "red");
	console.log("aaaaa");
});
$("#barra-navegacion a").mouseout(function(){
	$(this).css("color", "white");	
});

$(".panelCentral #imagenes #img1").click(function(){
	$("div#imagenCostado").fadeIn(300);
	$("div#imagenCostado").css("display", "flex");
	$("div#imagenCostado").html('<img src="./images/player.png">');
	$("div#imagenCostado img").css("width", "200px");
	$("div#imagenCostado img").css("height", "200px");
	$("div#panelInfo").slideDown(500);
	$("div#panelInfo").css("display", "flex");
	$("#panelInfo").html(info_img1);
	console.log("done1");
});
$(".panelCentral #imagenes #img2").click(function(){
	$("div#imagenCostado").fadeIn(300);
	$("div#imagenCostado").css("display", "flex");
	$("div#imagenCostado").html('<img src="./images/mundo1.png">');
	$("div#imagenCostado img").css("width", "200px");
	$("div#imagenCostado img").css("height", "200px");
	$("div#panelInfo").slideDown(500);
	$("div#panelInfo").css("display", "flex");
	$("#panelInfo").html(info_img2);
	console.log("done2");
});
$(".panelCentral #imagenes #img3").click(function(){
	$("div#imagenCostado").fadeIn(300);
	$("div#imagenCostado").css("display", "flex");
	$("div#imagenCostado").html('<img src="./images/mundo2.png">');
	$("div#imagenCostado img").css("width", "200px");
	$("div#imagenCostado img").css("height", "200px");
	$("div#panelInfo").slideDown(500);
	$("div#panelInfo").css("display", "flex");
	$("#panelInfo").html(info_img3);
	console.log("done3");
});