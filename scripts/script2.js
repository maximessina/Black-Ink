var numFoto1 = 1;
var numFoto2 = 1;

var M1_infoImg1 = "Zuzie, en su etapa final de dibujo y pintado. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var M1_infoImg2 = "Biejo, encerrado en la misma carcel en la cual esta encerrado hace un siglo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var M1_infoImg3 = "Un blorg; solo lo cruzas cuando pasas por el parque. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var M1_infoImg4 = "Kami, el cientifico del juego. Atrapa al protagonista y quiere experimentar con el. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var M1_infoImg5 = "Un minion, nada eso... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var M2_infoImg1 = "Este es el primer dibujo conceptual del weon, se mantuvo bastante igual, pero se le agregó un simbolo de dinero en la remera, para que no quede vacio. En cuanto al personaje, el weon es un adulto malcriado que tiene mucho dinero y resuelve todos sus problemas con este, le encantan sus gafas mas que cualquier otra cosa. Quiere destronar a Nakku para volverse el rey de esta region e instalar un sistema para acabar con la actual anarquia.";
var M2_infoImg2 = "Este es el primer dibujo conceptual de Kevin,no cambió mucho de su diseño final, pero se le agregó una pistola, para tener un uso para esa segunda mano. En cuanto al personaje, Kevin tiene muchisimos hermanos, tambien llamados Kevin. Trabajan para el Weon, y asi se ganan la vida. Por alguna razon les encantan los cuchillos.";
var M2_infoImg3 = "Este es el primer dibujo conceptual del jefe final, este diseño se mantuvo constante hasta el final, ademas de ser el unico personaje que se diseñó a color, pero lleva ropas negras y grises. Sobre el personaje, se llama 'Nakku' y sorprendentemente, el trader misterioso del segundo mundo es su padre, a pesar de que nakku no lo sabe. nakku no suele hablar con nadie y se hace temer por su terrible fuerza y agilidad. Lleva una mascara para no mostrar nunca las emociones que sienta al enemigo.";
var M2_infoImg4 = "Arte conceptual del escenario final en el cual se encuentra el Boss del Mundo 2.";


function adelante1(){
	numFoto1++;
	if(numFoto1 > 5){
		$("#imagenGal1").attr('src', './images/conceptArt/Mundo1/imagen1.jpg');
		numFoto1 = 1;
	}else{
		$("#imagenGal1").attr('src', './images/conceptArt/Mundo1/imagen'+numFoto1+'.jpg');
	}
	if(numFoto1 == 1){
		$("#infoText1").html(M1_infoImg1);
	}
	if(numFoto1 == 2){
		$("#infoText1").html(M1_infoImg2);
	}
	if(numFoto1 == 3){
		$("#infoText1").html(M1_infoImg3);
	}
	if(numFoto1 == 4){
		$("#infoText1").html(M1_infoImg4);
	}
	if(numFoto1 == 5){
		$("#infoText1").html(M1_infoImg5);
	}
}

function atras1(){
	numFoto1--;
	if(numFoto1 < 1){
		$("#imagenGal1").attr('src', './images/conceptArt/Mundo1/imagen5.jpg');
		numFoto1 = 5;
	}
	else{
		$("#imagenGal1").attr('src', './images/conceptArt/Mundo1/imagen'+numFoto1+'.jpg');
	}
	if(numFoto1 == 1){
		$("#infoText1").html(M1_infoImg1);
	}
	if(numFoto1 == 2){
		$("#infoText1").html(M1_infoImg2);
	}
	if(numFoto1 == 3){
		$("#infoText1").html(M1_infoImg3);
	}
	if(numFoto1 == 4){
		$("#infoText1").html(M1_infoImg4);
	}
	if(numFoto1 == 5){
		$("#infoText1").html(M1_infoImg5);
	}
}

function adelante2(){
	numFoto2++;
	if(numFoto2 > 4){
		$("#imagenGal2").attr('src', './images/conceptArt/Mundo2/imagen1.jpg');
		numFoto2 = 1;
	}else{
		$("#imagenGal2").attr('src', './images/conceptArt/Mundo2/imagen'+numFoto2+'.jpg');
	}
	if(numFoto2 == 1){
		$("#infoText2").html(M2_infoImg1);
	}
	if(numFoto2 == 2){
		$("#infoText2").html(M2_infoImg2);
	}
	if(numFoto2 == 3){
		$("#infoText2").html(M2_infoImg3);
	}
	if(numFoto2 == 4){
		$("#infoText2").html(M2_infoImg4);
	}
}

function atras2(){
	numFoto2--;
	if(numFoto2 < 1){
		$("#imagenGal2").attr('src', './images/conceptArt/Mundo2/imagen4.jpg');
		numFoto2 = 5;
	}
	else{
		$("#imagenGal2").attr('src', './images/conceptArt/Mundo2/imagen'+numFoto2+'.jpg');
	}
	if(numFoto2 == 1){
		$("#infoText2").html(M2_infoImg1);
	}
	if(numFoto2 == 2){
		$("#infoText2").html(M2_infoImg2);
	}
	if(numFoto2 == 3){
		$("#infoText2").html(M2_infoImg3);
	}
	if(numFoto2 == 4){
		$("#infoText2").html(M2_infoImg4);
	}
}