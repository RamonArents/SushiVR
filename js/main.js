var audioIsGespeeldSnijden = false;
var audioIsGespeeldSamenstellen = false;
var audioIsGespeeldServeren = false;
var audioIsGespeeldKookboek = false;
var audioIsGespeeldSucces = false;

window.onload = function() {
	var buttonCheck = setInterval(()=>{
		var vrButton = $('.a-enter-vr-button');
		if(vrButton.length > 0){
			clearInterval(buttonCheck);
			vrButton.click(()=>{
				$('#camera').attr('position','0 -1.5 0');
			});
		}
	},100);

	// aanmaken cursor om de interactie controleren
	var cursor = document.getElementById("cursor");

	var cursorLoader = document.getElementById("cursor-loader");

	// Haal animatie van cursor op
	var cursorAnimatie = document.getElementById("cursorAnimatie");
	var cursorAnimatieEnd = document.getElementById("cursorAnimatieEnd");

	//inladen Belichting
	var hoofdlicht = document.getElementById("hoofdlicht");
	var schijnwerper = document.getElementById("schijnwerper");
	var sfeerlicht = document.getElementById("sfeerlicht");

	function addLoad(obj) {
		obj.setAttribute("material","color:#000000;");
	}

	function removeLoad(obj){
		obj.setAttribute("material","color: #439DC2;");
	}

	//Roep geluid voor snijden aan
	var snijgeluid = document.getElementById("snijgeluid");

	//Roep voiceover aan
	var intro = document.getElementById("intro");
	var snijden = document.getElementById("snijden");
	var samenstellen = document.getElementById("samenstellen");
	var serveren = document.getElementById("serveren");
	var kookboek = document.getElementById("kookboek");
	var succes = document.getElementById("succes");

	// gebruik bar
	var bar = document.getElementById("bar");

	// klantBestelling houdt het aantal gerechten bij
	var klantBestelling = ["Nigiri(zalm)", "Nigiri(tonijn)", "Hosomaki(zalm)", "Hosomaki(komkommer)"];

	// Bestelling wordt random gekozen uit de array klantBestelling
	var bestellingRandom = klantBestelling[0];

	//Maak een a image object voor de tekstballoon
	var txtballoon = document.createElement("a-image");
	txtballoon.setAttribute("src","#txtballoon");
	txtballoon.setAttribute("position", "1.173 1.781 1.284");
	txtballoon.setAttribute("rotation", "0 -90 0");
	txtballoon.setAttribute("width", "1.5");
	txtballoon.setAttribute("height", "1");
	txtballoon.setAttribute("scale", "1.3 1.3 1.3");

	//Maak image objecten de image array
	var image = document.createElement("img");
	image.setAttribute("id", "sushiimage");
	image.setAttribute("src", "images/" + bestellingRandom + ".jpg");

	//start Geluid
	intro.setAttribute("autoplay","true");

	setTimeout(function(){
		schijnwerper.setAttribute("position", "-2.131 3.1 -0.573");
	}, 10000);

	//Koppel de image aan de assets
	var  assets = document.getElementById("assets");
	assets.appendChild(image);

	//A-image object voor image array
	var imageObject = document.createElement("a-image");
	imageObject.setAttribute("src", "#sushiimage");
	imageObject.setAttribute("position", "1.171 1.711 1.287");
	imageObject.setAttribute("rotation", "0 90 0");
	imageObject.setAttribute("width", "0.5");
 	imageObject.setAttribute("height", "0.5");

	// Bestelling wordt aan de gebruiker getoond
	var klantTekst = document.getElementById("klanttekst");
	klantTekst.setAttribute("value", "Ik wil graag sushi \n" + bestellingRandom + ".");

	// gebruik snijplank om ingredienten aan te koppelen
	var snijplank = document.getElementById("snijplank");

	//Haal persoon op om het hoofd te animeren
	var persoon = document.getElementById("persoon");

	//Maak bord
	var bord = document.getElementById("bord");

	//Haal de suhiset op
	var sushiset = document.getElementById("sushiset");

	//Voeg de image toe aan de persoon
	sushiset.appendChild(imageObject);
	sushiset.appendChild(txtballoon);



	//Haal hangiri bak op
	var hangiri = document.getElementById("hangiri");




	// voeg rijst toe aan de hand
	var rijst = document.getElementById("rijst");
	var rijstinhand = document.createElement("a-entity");
	rijstinhand.setAttribute("position", "0.259 -0.402 0.438");
	rijstinhand.setAttribute("rotation", "-22.5 0 0");
	rijstinhand.setAttribute("obj-model", "obj:#rijstinhand-obj;mtl:#rijstinhand-mtl");


	//Roep ongesneden zalm objecten aan
	var zalm = document.getElementById("zalm");
	var zalm1 = document.getElementById("zalm1");
	var zalm2 = document.getElementById("zalm2");
	var zalm3 = document.getElementById("zalm3");

	//Roep ongesneden tonijn objecten aan
	var tonijn = document.getElementById("tonijn");
	var tonijn1 = document.getElementById("tonijn1");
	var tonijn2 = document.getElementById("tonijn2");
	var tonijn3 = document.getElementById("tonijn3");

	//Roep ongesneden komkommer objecten aan
	var komkommerongesneden = document.getElementById("komkommerongesneden");
	var komkommer1ongesneden = document.getElementById("komkommer1ongesneden");
	var komkommer2ongesneden = document.getElementById("komkommer2ongesneden");
	var komkommer3ongesneden = document.getElementById("komkommer3ongesneden");

	//Roep zalm objecten in bakje aan
	var plakzalm = document.getElementById("plakzalm");
	var plakzalm1 = document.getElementById("plakzalm1");
	var plakzalm2 = document.getElementById("plakzalm2");
	var plakzalm3 = document.getElementById("plakzalm3");

	//Roep komkommmer objecten in bakje aan
	var komkommer = document.getElementById("komkommer");
	var komkommer1 = document.getElementById("komkommer1");
	var komkommer2 = document.getElementById("komkommer2");
	var komkommer3 = document.getElementById("komkommer3");

	//Haal norivel op
  var norivel = document.getElementById("norivel");

	//Haal bakje norivel op
	var norivelbak = document.getElementById("noribak");

	//Voeg vel toe aan bak
	norivelbak.appendChild(norivel);
	norivel.setAttribute("position", "0.010 0.090 -0.020");
	norivel.setAttribute("scale", "0.750 0.010 -0.640");

	//Haal zalmbakje ophalen
	var zalmbak = document.getElementById("zalmbak");

	//Roep zalm tonijn in bakje aan
	var plaktonijn = document.getElementById("plakTonijn");
	var plaktonijn1 = document.getElementById("plakTonijn2");
	var plaktonijn2  = document.getElementById("plakTonijn3");
	var plaktonijn3  = document.getElementById("plakTonijn4");

	//Haal tonijnbakje ophalen
	var tonijnbak = document.getElementById("tonijnbak");



	var komkommerbak = document.getElementById("komkommerbak");


    

	var zalminhand = document.createElement("a-entity");
    zalminhand.setAttribute("id", "zalminhand");
	zalminhand.setAttribute("position", "0.116 -0.422 0.335");
	zalminhand.setAttribute("rotation", "0 90 40");
	zalminhand.setAttribute("obj-model", "obj: #plakzalm-obj; mtl: #plakzalm-mtl");

	//Maak tonijn voor in hand
	var tonijninhand = document.createElement("a-entity");
	tonijninhand.setAttribute("id", "tonijninhand");
	tonijninhand.setAttribute("position", "0.116 -0.422 0.335");
	tonijninhand.setAttribute("rotation", "0 90 40");
	tonijninhand.setAttribute("obj-model", "obj: #tonijn-obj; mtl: #tonijn-mtl");

	//Maak komkommer voor in hand
	var komkommerinhand = document.createElement("a-entity");
 	komkommerinhand.setAttribute("id", "komkommerinhand");
 	komkommerinhand.setAttribute("position", "0.117 -0.102 0.503");
	komkommerinhand.setAttribute("obj-model", "obj: #komkommeringr-obj; mtl: #komkommeringr-mtl");
 	komkommerinhand.setAttribute("rotation", "90 0 0");
	komkommerinhand.setAttribute("scale", "0.75 0.75 0.5");

	//Maak norivel voor in hand
	var norivelinhand = document.createElement("a-box");
	norivelinhand.setAttribute("id","norivelinhand");
	norivelinhand.setAttribute("position", "0.188 -0.280 0.659");
	norivelinhand.setAttribute("rotation", "60 0 0");
	norivelinhand.setAttribute("src", "images/norivel.jpeg");
	norivelinhand.setAttribute("scale", "0.270 0.010 0.340");


	function cursorLoad(){

		addLoad(cursorLoader);
		cursor.appendChild(cursorAnimatie);
	  cursor.appendChild(cursorAnimatieEnd);



		cursorAnimatieEnd.addEventListener("animationend", function(){

			removeLoad(cursorLoader);
		});

	}



	// oppakken rijst
	hangiri.addEventListener("mouseenter", function() {
		if(hangiri.hasChildNodes()){
			if (cursor.contains(rijstinhand) == false) {
				cursorLoad();
			}
		}
	});

	// oppakken rijst
	hangiri.addEventListener("click", function() {

		if(hangiri.hasChildNodes()){
			if (cursor.contains(rijstinhand) == false && bord.contains(rijstingr) == false && cursor.contains(zalminhand) == false &&
					cursor.contains(tonijninhand) == false && cursor.contains(komkommerinhand) == false && cursor.contains(norivelinhand) == false) {

				cursor.appendChild(rijstinhand);
				cursor.removeChild(zalminhand);
				cursor.removeChild(tonijninhand);
				cursor.removeChild(komkommerinhand);
				cursor.removeChild(norivelinhand);
				cursor.removeChild(mesinhand);
			}
		}
	});

	zalmbak.addEventListener("mouseenter", function() {
		if(zalmbak.hasChildNodes()){
			if (cursor.contains(zalminhand) == false) {
				cursorLoad();
			}
		}
	});



	// oppakken zalm
	zalmbak.addEventListener("click", function() {
		if (zalmbak.hasChildNodes()) {
			if (cursor.contains(zalminhand) == false && bord.contains(zalmingr) == false && cursor.contains(rijstinhand) == false &&
					cursor.contains(tonijninhand) == false && cursor.contains(komkommerinhand) == false && cursor.contains(norivelinhand) == false) {
				cursor.appendChild(zalminhand);
				//Verwijder de child
				zalmbak.removeChild(zalmbak.firstChild);
				cursor.removeChild(rijstinhand);
				cursor.removeChild(tonijninhand);
				cursor.removeChild(komkommerinhand);
				cursor.removeChild(norivelinhand);
				cursor.removeChild(mesinhand);
			}
		}
	});





	tonijnbak.addEventListener("mouseenter", function() {
		if (tonijnbak.hasChildNodes()) {
			if (cursor.contains(tonijninhand) == false) {
					cursorLoad();
			}
		}
	});

	// oppakken tonijn
	tonijnbak.addEventListener("click", function() {
		if (tonijnbak.hasChildNodes()) {
			if (cursor.contains(tonijninhand) == false && bord.contains(tonijningr) == false && cursor.contains(rijstinhand) == false &&
					cursor.contains(zalminhand) == false && cursor.contains(komkommerinhand) == false && cursor.contains(norivelinhand) == false) {
				cursor.appendChild(tonijninhand);
				tonijnbak.removeChild(tonijnbak.firstChild);
				cursor.removeChild(rijstinhand);
				cursor.removeChild(zalminhand);
				cursor.removeChild(komkommerinhand);
				cursor.removeChild(norivelinhand);
				cursor.removeChild(mesinhand);
			}
		}
	});

	komkommerbak.addEventListener("mouseenter", function() {
		if (komkommerbak.hasChildNodes()) {
			if (cursor.contains(komkommerinhand) == false) {
					cursorLoad();
			}
		}
	});
	// oppakken komkommer
	komkommerbak.addEventListener("click", function() {
		if (komkommerbak.hasChildNodes()) {
			if (cursor.contains(komkommerinhand) == false && bord.contains(komkommeringr) == false && cursor.contains(rijstinhand) == false &&
					cursor.contains(zalminhand) == false && cursor.contains(tonijninhand) == false && cursor.contains(norivelinhand) == false) {

				cursor.appendChild(komkommerinhand);
				komkommerbak.removeChild(komkommerbak.firstChild);
				cursor.removeChild(rijstinhand);
				cursor.removeChild(zalminhand);
				cursor.removeChild(tonijninhand);
				cursor.removeChild(norivelinhand);
				cursor.removeChild(mesinhand);
			}
		}
	});

	norivelbak.addEventListener("mouseenter", function() {
		if (norivelbak.hasChildNodes()) {
			if (cursor.contains(norivelinhand) == false) {
					cursorLoad();
			}
		}
	});

	//Oppakken norivel
	norivelbak.addEventListener("click", function() {
			if (cursor.contains(norivelinhand) == false && bord.contains(norivelingr) == false && cursor.contains(rijstinhand) == false &&
					cursor.contains(zalminhand) == false && cursor.contains(tonijninhand) == false && cursor.contains(komkommerinhand) == false) {

				cursor.appendChild(norivelinhand);
				cursor.removeChild(rijstinhand);
				cursor.removeChild(zalminhand);
				cursor.removeChild(tonijninhand);
				cursor.removeChild(komkommerinhand);
				cursor.removeChild(mesinhand);
			}
	});

	//maak mes object voor in hand
	var mesinhand = document.createElement("a-entity");
    mesinhand.setAttribute("id", "mesinhand");
	mesinhand.setAttribute("position", "0.326 -0.117 0.520");
	mesinhand.setAttribute("rotation", "-22.5 0 90");
	mesinhand.setAttribute("obj-model", "obj: #mes-obj; mtl: #mes-mtl");



	//maak animatie voor het snijden
	// oppakken mes
	var mes = document.getElementById("mes");

	mes.addEventListener("mouseenter", function() {

			if (cursor.contains(mesinhand) == false) {
					cursorLoad();
			}

	});

	mes.addEventListener("click", function() {
	if(cursor.contains(mesinhand) == false 	&& zalmbak.hasChildNodes() == false || tonijnbak.hasChildNodes() == false || komkommerbak.hasChildNodes() == false){
				//Maak mesinhand opnieuw aan indien removed
				mesinhand = document.createElement("a-entity");
                mesinhand.setAttribute("id", "mesinhand2");
				mesinhand.setAttribute("position", "0.326 -0.117 0.520");
				mesinhand.setAttribute("rotation", "-22.5 0 90");
				mesinhand.setAttribute("obj-model", "obj: #mes-obj; mtl: #mes-mtl");
				//Koppel mes aan hand
				cursor.appendChild(mesinhand);
				cursor.removeChild(zalminhand);
				cursor.removeChild(rijstinhand);
				cursor.removeChild(komkommerinhand);
				cursor.removeChild(tonijninhand);
				cursor.removeChild(norivelinhand);
			}
	});

	//Haal komkommer op
	var snijkomkommer = document.getElementById("geheleKomkommer");

	let zalmAnimatieIsGedaan = false;
	function startZalmAnimatie() {

		//Speel geluid af
		snijgeluid.setAttribute("autoplay","true");
		mes.appendChild(snijgeluid);

		zalmAnimatieIsGedaan = true;
		zalm.appendChild(snijanimatiezalm);
		zalm1.appendChild(snijanimatiezalm1);
		zalm2.appendChild(snijanimatiezalm2);
		zalm3.appendChild(snijanimatiezalm3);


		snijanimatiezalm3.addEventListener('animationend', () => {
			//Verwijder animatie
			snijanimatiezalm.remove();
			snijanimatiezalm1.remove();
			snijanimatiezalm2.remove();
			snijanimatiezalm3.remove();

			lichtSnijdenKlaar();

		});


			//Vul bakje bij indien bakje leeg is
			zalmbak.appendChild(plakzalm);
			zalmbak.appendChild(plakzalm1);
			zalmbak.appendChild(plakzalm2);
			zalmbak.appendChild(plakzalm3);


			//Positie zalm
			plakzalm.setAttribute("position", "-0.220 -0.110 -0.200");
			plakzalm.setAttribute("visible", "true");
			plakzalm1.setAttribute("position", "0.220 -0.120 -0.200");
			plakzalm1.setAttribute("visible", "true");
			plakzalm2.setAttribute("position", "-0.220 -0.110 0.180");
			plakzalm2.setAttribute("visible", "true");
			plakzalm3.setAttribute("position", "0.220 -0.110 0.180");
			plakzalm3.setAttribute("visible", "true");




		cursor.removeChild(mesinhand);
	}

	let tonijnAnimatieIsGedaan = false;
	function startTonijnAnimatie() {

		//Speel geluid af
		snijgeluid.setAttribute("autoplay","true");
		mes.appendChild(snijgeluid);

		tonijnAnimatieIsGedaan = true;
		tonijn.appendChild(snijanimatietonijn);
		tonijn1.appendChild(snijanimatietonijn1);
		tonijn2.appendChild(snijanimatietonijn2);
		tonijn3.appendChild(snijanimatietonijn3);

		snijanimatiezalm3.addEventListener('animationend', () => {
			snijanimatiezalm.remove();
			snijanimatiezalm1.remove();
			snijanimatiezalm2.remove();
			snijanimatiezalm3.remove();

			lichtSnijdenKlaar();
		});

		if(tonijnbak.hasChildNodes() == false){
			//Vul bakje bij indien bakje leeg is
			tonijnbak.appendChild(plaktonijn);
			tonijnbak.appendChild(plaktonijn1);
			tonijnbak.appendChild(plaktonijn2);
			tonijnbak.appendChild(plaktonijn3);

			//Positie van de tonijn
			plaktonijn.setAttribute("position", "-0.220 -0.110 -0.200");
			plaktonijn.setAttribute("visible", "true");
			plaktonijn1.setAttribute("position", "0.220 -0.120 -0.200");
			plaktonijn1.setAttribute("visible", "true");
			plaktonijn2.setAttribute("position", "-0.220 -0.110 0.180");
			plaktonijn2.setAttribute("visible", "true");
			plaktonijn3.setAttribute("position", "0.220 -0.110 0.180");
			plaktonijn3.setAttribute("visible", "true");

		}
		cursor.removeChild(mesinhand);
	}

	let komkommerAnimatiegedaan = false;
	function startKomkommerAnimatie(){
		//Speel geluid af
		snijgeluid.setAttribute("autoplay","true");
		mes.appendChild(snijgeluid);

		komkommerAnimatiegedaan = true;
		//Maak objecten visible
		snijkomkommer.setAttribute("visible","false");

		komkommerongesneden.setAttribute("visible","true");
		komkommer1ongesneden.setAttribute("visible","true");
		komkommer2ongesneden.setAttribute("visible","true");
		komkommer3ongesneden.setAttribute("visible","true");

		//Append animaties hier
		komkommerongesneden.appendChild(komkommerAnimatie);
		komkommerongesneden.appendChild(komkommerAnimatieRotatie);

		komkommer1ongesneden.appendChild(komkommer1Animatie);
		komkommer1ongesneden.appendChild(komkommer1AnimatieRotatie);

		komkommer2ongesneden.appendChild(komkommer2Animatie);
		komkommer2ongesneden.appendChild(komkommer2AnimatieRotatie);

		komkommer3ongesneden.appendChild(komkommer3Animatie);
		komkommer3ongesneden.appendChild(komkommer3AnimatieRotatie);

		komkommerAnimatie.addEventListener("animationend", function(){
			lichtSnijdenKlaar();
		});

		if (komkommerbak.hasChildNodes() == false){
			//Voeg komkommer toe aan het komkommerakje
			komkommerbak.appendChild(komkommer);
			komkommerbak.appendChild(komkommer1);
			komkommerbak.appendChild(komkommer2);
			komkommerbak.appendChild(komkommer3);

			komkommer.setAttribute("position", "-0.020 0.100 -0.320");
			komkommer.setAttribute("visible", "true");
			komkommer1.setAttribute("position", "-0.020 0.100 -0.120");
			komkommer1.setAttribute("visible", "true");
			komkommer2.setAttribute("position", "-0.020 0.100 0.090");
			komkommer2.setAttribute("visible", "true");
			komkommer3.setAttribute("position", "-0.020 0.100 0.300");
			komkommer3.setAttribute("visible", "true");
		}
		cursor.removeChild(mesinhand);
	}



	//animatie voor zalm snijden
	var snijanimatiezalm = document.createElement("a-animation");
	snijanimatiezalm.setAttribute("attribute", "position");
	snijanimatiezalm.setAttribute("to", "2.042 0.8 -0.8");
	snijanimatiezalm.setAttribute("dur", "500");

	var snijanimatiezalmback = document.createElement("a-animation");
	snijanimatiezalmback.setAttribute("attribute", "position");
	snijanimatiezalmback.setAttribute("to", "2.042 0.8 -0.8");
	snijanimatiezalmback.setAttribute("direction", "reverse");
	snijanimatiezalmback.setAttribute("dur", "500");

	zalm.addEventListener("mouseenter", function() {

			if (cursor.contains(mesinhand) == true) {
					cursorLoad();
			}

	});

	//zalm alleen snijden als mes in hand is
	zalm.addEventListener("click", function() {
		if (cursor.contains(mesinhand) == true && zalmAnimatieIsGedaan == false) {
			startZalmAnimatie();
		}
	});

	var snijanimatietonijn = document.createElement("a-animation");
	snijanimatietonijn.setAttribute("attribute", "position");
	snijanimatietonijn.setAttribute("to", "2.529 0.8 -0.8");
	snijanimatietonijn.setAttribute("dur", "500");

	tonijn.addEventListener("mouseenter", function() {
			if (cursor.contains(mesinhand) == true) {
					cursorLoad();
			}

	});

	//zalm alleen snijden als mes in hand is
	tonijn.addEventListener("click", function() {
		if (cursor.contains(mesinhand) == true && tonijnAnimatieIsGedaan == false) {
			startTonijnAnimatie();
		}
	});

	//animatie voor zalm snijden
	var snijanimatiezalm1 = document.createElement("a-animation");
	snijanimatiezalm1.setAttribute("attribute", "position");
	snijanimatiezalm1.setAttribute("to", "2.042 0.8 -0.5");
	snijanimatiezalm1.setAttribute("dur", "500");

	//animatie terug
	var snijanimatiezalm1back = document.createElement("a-animation");
	snijanimatiezalm1back.setAttribute("attribute", "position");
	snijanimatiezalm1back.setAttribute("to", "2.042 0.8 -0.5");
	snijanimatiezalm1back.setAttribute("direction", "reverse");
	snijanimatiezalm1back.setAttribute("dur", "500");

	zalm1.addEventListener("mouseenter", function() {
			if (cursor.contains(mesinhand) == true) {
					cursorLoad();
			}

	});

	//zalm alleen snijden als mes in hand is
	zalm1.addEventListener("click", function() {
		if (cursor.contains(mesinhand) == true && zalmAnimatieIsGedaan == false) {
			cursorLoad();
			startZalmAnimatie();
		}
	});

	var snijanimatietonijn1 = document.createElement("a-animation");
	snijanimatietonijn1.setAttribute("attribute", "position");
	snijanimatietonijn1.setAttribute("to", "2.529 0.8 -0.5");
	snijanimatietonijn1.setAttribute("dur", "500");


	tonijn1.addEventListener("mouseenter", function() {
			if (cursor.contains(mesinhand) == true) {
					cursorLoad();
			}

	});

	//zalm alleen snijden als mes in hand is
	tonijn1.addEventListener("click", function() {
		if (cursor.contains(mesinhand) == true && tonijnAnimatieIsGedaan == false) {
			cursorLoad();
			startTonijnAnimatie();
		}
	});


	//animatie voor zalm snijden
	var snijanimatiezalm2 = document.createElement("a-animation");
	snijanimatiezalm2.setAttribute("attribute", "position");
	snijanimatiezalm2.setAttribute("to", "2.042 0.8 -0.1");
	snijanimatiezalm2.setAttribute("dur", "500");
	//animatie terug
	var snijanimatiezalm2back = document.createElement("a-animation");
	snijanimatiezalm2back.setAttribute("attribute", "position");
	snijanimatiezalm2back.setAttribute("to", "2.042 0.8 -0.1");
	snijanimatiezalm2back.setAttribute("direction", "reverse");
	snijanimatiezalm2back.setAttribute("dur", "500");

	zalm2.addEventListener("mouseenter", function() {
			if (cursor.contains(mesinhand) == true) {
					cursorLoad();
			}

	});

	//zalm alleen snijden als mes in hand is
	zalm2.addEventListener("click", function() {
		if (cursor.contains(mesinhand) == true && zalmAnimatieIsGedaan == false) {
			startZalmAnimatie();
		}
	});

	var snijanimatietonijn2 = document.createElement("a-animation");
	snijanimatietonijn2.setAttribute("attribute", "position");
	snijanimatietonijn2.setAttribute("to", "2.529 0.8 -0.1");
	snijanimatietonijn2.setAttribute("dur", "500");


	tonijn2.addEventListener("mouseenter", function() {
		if (tonijn2.hasChildNodes()) {
			if (cursor.contains(mesinhand) == true) {
					cursorLoad();
			}
		}
	});

	//zalm alleen snijden als mes in hand is
	tonijn2.addEventListener("click", function() {
		if (cursor.contains(mesinhand) == true && tonijnAnimatieIsGedaan == false) {
			startTonijnAnimatie();
		}
	});



	//animatie voor zalm snijden
	var snijanimatiezalm3 = document.createElement("a-animation");
	snijanimatiezalm3.setAttribute("attribute", "position");
	snijanimatiezalm3.setAttribute("to", "2.042 0.8 0.2");
	snijanimatiezalm3.setAttribute("dur", "500");
	//animatie terug
	var snijanimatiezalm3back = document.createElement("a-animation");
	snijanimatiezalm3back.setAttribute("attribute", "position");
	snijanimatiezalm3back.setAttribute("to", "2.042 0.8 0.2");
	snijanimatiezalm3back.setAttribute("direction", "reverse");
	snijanimatiezalm3back.setAttribute("dur", "500");

	zalm3.addEventListener("mouseenter", function() {

			if (cursor.contains(mesinhand) == true) {
					cursorLoad();
			}

	});

	//zalm alleen snijden als mes in hand is
	zalm3.addEventListener("click", function() {
		if (cursor.contains(mesinhand) == true && zalmAnimatieIsGedaan == false) {
			startZalmAnimatie();
		}
	});

	var snijanimatietonijn3 = document.createElement("a-animation");
	snijanimatietonijn3.setAttribute("attribute", "position");
	snijanimatietonijn3.setAttribute("to", "2.529 0.8 0.2");
	snijanimatietonijn3.setAttribute("dur", "500");

	tonijn3.addEventListener("mouseenter", function(){
			if (cursor.contains(mesinhand) == true) {
					cursorLoad();
			}

	});

	//zalm alleen snijden als mes in hand is
	tonijn3.addEventListener("click", function() {
		if (cursor.contains(mesinhand) == true && tonijnAnimatieIsGedaan == false) {
			startTonijnAnimatie();
		}
	});


	//animaties voor komkommer
	var	komkommerAnimatie = document.createElement("a-animation");
	komkommerAnimatie.setAttribute("attribute", "position");
	komkommerAnimatie.setAttribute("from", "3.013 1.066 -0.309");
	komkommerAnimatie.setAttribute("to", "2.808 0.950 -0.3");
	komkommerAnimatie.setAttribute("dur", "500");

	var	komkommerAnimatieRotatie = document.createElement("a-animation");
	komkommerAnimatieRotatie.setAttribute("attribute", "rotation");
	komkommerAnimatieRotatie.setAttribute("from", "0 0 360");
	komkommerAnimatieRotatie.setAttribute("to", "0 0 230");
	komkommerAnimatieRotatie.setAttribute("dur", "500");

	var	komkommer1Animatie = document.createElement("a-animation");
	komkommer1Animatie.setAttribute("attribute", "position");
	komkommer1Animatie.setAttribute("from", "2.928 1.070 -0.311");
	komkommer1Animatie.setAttribute("to", "3.150 0.950 -0.3");
	komkommer1Animatie.setAttribute("dur", "500");

	var	komkommer1AnimatieRotatie = document.createElement("a-animation");
	komkommer1AnimatieRotatie.setAttribute("attribute", "rotation");
	komkommer1AnimatieRotatie.setAttribute("from", "0 0 90");
	komkommer1AnimatieRotatie.setAttribute("to", "0 0 230");
	komkommer1AnimatieRotatie.setAttribute("dur", "500");

	var	komkommer2Animatie = document.createElement("a-animation");
	komkommer2Animatie.setAttribute("attribute", "position");
	komkommer2Animatie.setAttribute("from", "3.017 0.989 -0.306");
	komkommer2Animatie.setAttribute("to", "3.050 0.950 -0.3");
	komkommer2Animatie.setAttribute("dur", "500");

	var	komkommer2AnimatieRotatie = document.createElement("a-animation");
	komkommer2AnimatieRotatie.setAttribute("attribute", "rotation");
	komkommer2AnimatieRotatie.setAttribute("from", "0 0 270");
	komkommer2AnimatieRotatie.setAttribute("to", "0 0 230");
	komkommer2AnimatieRotatie.setAttribute("dur", "500");

	var	komkommer3Animatie = document.createElement("a-animation");
	komkommer3Animatie.setAttribute("attribute", "position");
	komkommer3Animatie.setAttribute("from", "2.926 0.985 -0.311");
	komkommer3Animatie.setAttribute("to", "2.930 0.950 -0.3");
	komkommer3Animatie.setAttribute("dur", "500");

	var	komkommer3AnimatieRotatie = document.createElement("a-animation");
	komkommer3AnimatieRotatie.setAttribute("attribute", "rotation");
	komkommer3AnimatieRotatie.setAttribute("from", "0 0 180");
	komkommer3AnimatieRotatie.setAttribute("to", "0 0 230");
	komkommer3AnimatieRotatie.setAttribute("dur", "500");




	snijkomkommer.addEventListener("mouseenter", function() {
			if (cursor.contains(mesinhand) == true) {
					cursorLoad();
			}

	});

	//zalm alleen snijden als mes in hand is
	snijkomkommer.addEventListener("click", function() {
		if (cursor.contains(mesinhand) == true && komkommerAnimatiegedaan == false) {
			startKomkommerAnimatie();
		}
	});

	function lichtSnijdenKlaar(){
		if(zalmAnimatieIsGedaan==true && tonijnAnimatieIsGedaan == true && komkommerAnimatiegedaan == true){
			schijnwerper.setAttribute("position", "0.257 3.139 -1.947");
			schijnwerper.setAttribute("angle", "43.3");
			schijnwerper.setAttribute("rotation", "-80 0 0");
			if (audioIsGespeeldSamenstellen == false){
					samenstellen.components.sound.playSound();
					audioIsGespeeldSamenstellen = true;
			}
		}
	}

	// aanmaken rijstingr
	var rijstingr = document.createElement("a-entity");
	rijstingr.setAttribute("id", "rijstingr");
	rijstingr.setAttribute("position", "-0.5 0.15 0");
	rijstingr.setAttribute("obj-model", "obj:#rijstinhand-obj;mtl:#rijstinhand-mtl");



	//aanmaken zalmingr
	var zalmingr = document.createElement("a-entity");
	zalmingr.setAttribute("id", "zalmingr");
	zalmingr.setAttribute("position", "0.5 0.15 0");
	zalmingr.setAttribute("obj-model","obj:#plakzalm-obj; mtl:#plakzalm-mtl");

	// aanmaken tonijningr
	var tonijningr = document.createElement("a-entity");
	tonijningr.setAttribute("id", "tonijningr");
	tonijningr.setAttribute("position", "0.5 0.15 0");
	tonijningr.setAttribute("obj-model", "obj:#tonijn-obj; mtl:#tonijn-mtl");

	// aanmaken komkommeringr
	var komkommeringr = document.createElement("a-entity");
	komkommeringr.setAttribute("id", "komkommeringr");
	komkommeringr.setAttribute("position", "0 0.15 0");
	komkommeringr.setAttribute("obj-model", "obj: #komkommeringr-obj; mtl: #komkommeringr-mtl")
	komkommeringr.setAttribute("rotation", "0 90 0");

	//Aanmaken norivel ingredienten
	var norivelingr = document.createElement("a-box");
	norivelingr.setAttribute("id", "norivelingr");
	norivelingr.setAttribute("position", "0.068 0.150 -0.046");
	norivelingr.setAttribute("src", "images/norivel.jpeg");
	norivelingr.setAttribute("scale", "0.780 0.010 0.630");

	//maak het bord en de sushi's
	var nigiriZalm = document.createElement("a-entity");
	nigiriZalm.setAttribute("position", "1.5 1 0.1");
	nigiriZalm.setAttribute("obj-model", "obj: #tree-obj; mtl: #tree-mtl");

	var nigiriTonijn = document.createElement("a-entity");
	nigiriTonijn.setAttribute("position", "1.5 1 0.1");
	nigiriTonijn.setAttribute("obj-model", "obj: #sushiTonijn-obj; mtl: #sushiTonijn-mtl");

	//Hosamaki
	var hosaMakiZalm = document.createElement("a-entity");
	hosaMakiZalm.setAttribute("position", "1.5 1 0.1");
	hosaMakiZalm.setAttribute("obj-model", "obj: #hosaZalm-obj; mtl: #hosaZalm-mtl");

	var hosaMakiKomkommer = document.createElement("a-entity");
	hosaMakiKomkommer.setAttribute("position", "1.5 1 0.1");
	hosaMakiKomkommer.setAttribute("obj-model", "obj: #hosaKomkommer-obj; mtl: #hosaKomkommer-mtl");

	// variabele sushi met een naam
	var sushi = {
		naam: "",
		setNaam: function(naam) {
			this.naam = naam;
		},
		getNaam: function(){
			return this.naam;
		},
	}
	//recepten boek API
	var recept = document.getElementById("recept");

  	recept.addEventListener("click", function(){
		cursorLoad();

		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse(this.responseText);
					// Geef gegevens van de API
					$("#text").remove();
					$("#recept").append('<a-text width="0.6" wrap-count="20" height="auto" line-height="70" rotation="-38 0 0" id="text" text="value:' + response[0].ingredientLines + '; color:black" position="-0.28 1.5 0.1"></a-text>');


			}
		}
		//Haal hier de juiste requests op
	 if (bestellingRandom == "Nigiri(zalm)") {
		 xhttp.open("GET", "https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23recipe_d753959c9804c6ed2d27dcbb29ea8f9e&app_id=0d3d708a&app_key=b08e6272291f6724469fd018f6927b3b", true);
		}else if(bestellingRandom == "Nigiri(tonijn)"){
			xhttp.open("GET", "https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23recipe_bcd2eaa57f3938d781158cad98e01537&app_id=0d3d708a&app_key=b08e6272291f6724469fd018f6927b3b", true);
		}else if(bestellingRandom == "Hosomaki(zalm)" || bestellingRandom == "Hosomaki(komkommer)"){
			xhttp.open("GET", "https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23recipe_f2cc1ce185ed43d80ec8ac0739715bb2&app_id=0d3d708a&app_key=b08e6272291f6724469fd018f6927b3b", true);
		}
		xhttp.send();
	});




	//Haal de pan op
	var pan = document.getElementById("pan");
	//Hangiri om rijst te koken
	var hangiririjst2 = document.createElement("a-entity");
	hangiririjst2.setAttribute("position","0.466 0.248 -0.227");
	hangiririjst2.setAttribute("obj-model","obj: #hangiririjst-obj; mtl: #hangiririjst-mtl");
	hangiririjst2.setAttribute("scale","0.65 0.65 0.65");
	pan.appendChild(hangiririjst2);

	//Animatie voor het koken van rijst
	var rijstkookanimatie = document.createElement("a-animation");
	rijstkookanimatie.setAttribute("attribute", "rotation");
	rijstkookanimatie.setAttribute("fill", "forwards");
	rijstkookanimatie.setAttribute("to", "0 360 0");
	rijstkookanimatie.setAttribute("dur", "12000");
	rijstkookanimatie.setAttribute("repeat", "0");





	//Animatie om rijst te animeren
	var animatiePositie = 0.175;
	// Variabele om teller bij te houden
	var rijstTeller = 0;



	//Functie om rijst te animeren
	function animeerHangiriRijst(){

		//Verwijder rijst
		if (rijstTeller < 4){
			animatiePositie -= 0.043;

			//Variabele voor rijsthangiriranimatie
			var rijsthangirianimatie = document.createElement("a-animation");
			rijsthangirianimatie.setAttribute("id","rijsthangirianimatie");
			rijsthangirianimatie.setAttribute("attribute", "position");
			rijsthangirianimatie.setAttribute("to", "0 " + animatiePositie + " 0");
			rijsthangirianimatie.setAttribute("dur", "500");
			rijsthangirianimatie.setAttribute("repeat", "0");

			hangiririjst = document.getElementById('hangiririjst');
			hangiririjst.appendChild(rijsthangirianimatie);


			rijsthangirianimatie.addEventListener("animationend", function(){
					 $("#rijsthangirianimatie").remove();
			});

			rijstTeller++;
		}
		else {
			hangiri.removeChild(hangiririjst);
			rijstTeller = 0;
			animatiePositie = 0.175;
		}
	}

pan.setAttribute("sound", "src: url(geluid/gasgeluid.mp3); on: click");

 pan.addEventListener("mouseenter", function() {
	 if (pan.hasChildNodes()) {
		 if (hangiri.hasChildNodes() == false) {
				 cursorLoad();
		 }
	 }
 });

	//Ga rijst koken zodat je op pan gaat
	pan.addEventListener("click", function(){
		if (hangiri.hasChildNodes() == false) {
            
           

			//Rijst kook animatie
			hangiririjst2.appendChild(rijstkookanimatie);

			//Maak nieuwe entity voor de rijst in de bak
			var hangiririjst = document.createElement("a-entity");
			hangiririjst.setAttribute("id","hangiririjst");
			hangiririjst.setAttribute("position","0 0.175 0");
			hangiririjst.setAttribute("obj-model","obj: #hangiririjst-obj; mtl: #hangiririjst-mtl");
			//voeg de rijst toe als er geanimeerd is
			rijstkookanimatie.addEventListener("animationend", function(){
					hangiri.appendChild(hangiririjst);
					schijnwerper.setAttribute("position", "2.561 3.100 -0.251");
					schijnwerper.setAttribute("angle", "27");

					if (audioIsGespeeldSnijden == false){
						snijden.components.sound.playSound();
						audioIsGespeeldSnijden = true;
					}
			});
		}
	});

	//Haal rollen op
	var komkommerRol = document.getElementById("rollenKomkommer");
	var zalmRol = document.getElementById("rollenZalm");
	// Animeer oprollen sushi
	function oprollenSushi(){
		//Maak animatie
		var oprollen = document.createElement("a-animation");
		oprollen.setAttribute("attribute","position");
		oprollen.setAttribute("from", "0.333 0.9 -1.650");
		oprollen.setAttribute("to", "0.333 0.9 -2");
		oprollen.setAttribute("dur", "5000");

		var oprollenRotatie = document.createElement("a-animation");
		oprollenRotatie.setAttribute("attribute","rotation");
		oprollenRotatie.setAttribute("from", "0 90 0");
		oprollenRotatie.setAttribute("to", "0 90 -360");
		oprollenRotatie.setAttribute("dur", "5000");



		//reverse animatie
		var oprollenReverse = document.createElement("a-animation");
		oprollenReverse.setAttribute("attribute","position");
		oprollenReverse.setAttribute("from", "0.333 0.9 -1.650");
		oprollenReverse.setAttribute("to", "0.333 0.9 -2");
		oprollenReverse.setAttribute("dur", "5000");
		oprollenReverse.setAttribute("direction", "reverse");

		var oprollenRotatieReverse = document.createElement("a-animation");
		oprollenRotatieReverse.setAttribute("attribute","rotation");
		oprollenRotatieReverse.setAttribute("from", "0 90 0");
		oprollenRotatieReverse.setAttribute("to", "0 90 -360");
		oprollenRotatieReverse.setAttribute("dur", "5000");
		oprollenRotatieReverse.setAttribute("direction", "reverse");



			//CHeck hosomaki komkommer
		if(bord.contains(norivelingr) && bord.contains(rijstingr) && bord.contains(komkommeringr) && bord.contains(tonijningr) == false && bord.contains(zalmingr) == false) {
			//Maak de komkommerol zichtbaar en append de animatie eraan
			komkommerRol.setAttribute("visible","true");
			komkommerRol.appendChild(oprollen);
			komkommerRol.appendChild(oprollenRotatie);

			//Set timeouts voor het verwijderen van ingredienten
			setTimeout(function(){
				rijstingr.setAttribute("visible","false");
			}, 1100);

			setTimeout(function(){
				komkommeringr.setAttribute("visible","false");
			}, 1500);

			setTimeout(function(){
				norivelingr.setAttribute("visible","false");
			}, 1800);

			//Append de reverse animatie nadat andere aniamtie geendigd is
			oprollenRotatie.addEventListener("animationend", function(){
							komkommerRol.appendChild(oprollenReverse);
							komkommerRol.appendChild(oprollenRotatieReverse);
						});

				oprollenRotatieReverse.addEventListener("animationend", function(){
						komkommerRol.setAttribute("visible", "false");
				});

		};

		//check hosomaki zalm
		if(bord.contains(norivelingr) && bord.contains(rijstingr) && bord.contains(zalmingr) && bord.contains(tonijningr) == false && bord.contains(komkommeringr) == false){
			//Maak de komkommerol zichtbaar en append de animatie eraan
			zalmRol.setAttribute("visible","true");
			zalmRol.appendChild(oprollen);
			zalmRol.appendChild(oprollenRotatie);

			//Set timeouts voor het verwijderen van ingredienten
			setTimeout(function(){
				rijstingr.setAttribute("visible","false");
			}, 1100);

			setTimeout(function(){
				zalmingr.setAttribute("visible","false");
			}, 1500);

			setTimeout(function(){
				norivelingr.setAttribute("visible","false");
			}, 1800);

			//Append de reverse animatie nadat andere aniamtie geendigd is
			oprollenRotatie.addEventListener("animationend", function(){
							zalmRol.appendChild(oprollenReverse);
							zalmRol.appendChild(oprollenRotatieReverse);
						});

			oprollenRotatieReverse.addEventListener("animationend", function(){
								zalmRol.setAttribute("visible", "false");
						});
		}

	};


	bord.addEventListener("mouseenter", function() {
			cursorLoad();

	});
    


	bord.addEventListener("click", function() {
        
            //Hosomaki Zalm
     if(bord.contains(norivelingr) && bord.contains(rijstingr) && bord.contains(zalmingr) && bord.contains(tonijningr) == false && bord.contains(komkommeringr) == false){
      
				oprollenSushi();
         


		}
        //Hosomaki Komkommer
		else if(bord.contains(norivelingr) && bord.contains(rijstingr) && bord.contains(komkommeringr) && bord.contains(tonijningr) == false && bord.contains(zalmingr) == false){
          
				oprollenSushi();
           

		}

		//Oppakken ingredienten
		if (cursor.contains(rijstinhand)) {

			//Append hosomaki rijst
			if(bestellingRandom == "Hosomaki(zalm)" || bestellingRandom == "Hosomaki(komkommer)"){

				rijstingr = document.createElement("a-box");
				rijstingr.setAttribute("id", "rijstingr");
				rijstingr.setAttribute("position", "0.071 0.1 -0.050");
				rijstingr.setAttribute("src", "images/rijst.jpg");
				rijstingr.setAttribute("scale", "0.74 0.05 0.56");
				bord.appendChild(rijstingr);
				cursor.removeChild(rijstinhand);



				//roep functie animatie rijst aan
				 animeerHangiriRijst();

				rijstinhand = document.createElement("a-entity");
				rijstinhand.setAttribute("position", "0.259 -0.402 0.438");
				rijstinhand.setAttribute("rotation", "-22.5 0 0");
				rijstinhand.setAttribute("obj-model", "obj:#rijstinhand-obj;mtl:#rijstinhand-mtl");
			}

			// Append nigiri rijst model
			else{

				rijstingr = document.createElement("a-entity");
				rijstingr.setAttribute("id", "rijstingr");
				rijstingr.setAttribute("position", "-0.015 0.032 0.018");
				rijstingr.setAttribute("obj-model", "obj:#rijstinhand-obj;mtl:#rijstinhand-mtl");
				bord.appendChild(rijstingr);
				cursor.removeChild(rijstinhand);

				//roep functie aan
				animeerHangiriRijst();

				rijstinhand = document.createElement("a-entity");
				rijstinhand.setAttribute("position", "0.259 -0.402 0.438");
				rijstinhand.setAttribute("rotation", "-22.5 0 0");
				rijstinhand.setAttribute("obj-model", "obj:#rijstinhand-obj;mtl:#rijstinhand-mtl");
			}

			// Zalm model bij Hosomaki
		} else if (cursor.contains(zalminhand)) {

			if(bestellingRandom == "Hosomaki(zalm)" || bestellingRandom == "Hosomaki(komkommer)"){

				zalmingr = document.createElement("a-box");
				zalmingr.setAttribute("id", "zalmingr");
				zalmingr.setAttribute("position", "0.07 0.172 -0.041");
				zalmingr.setAttribute("src","images/zalm.png");
				zalmingr.setAttribute("scale", "0.670 0.060 0.100");
				bord.appendChild(zalmingr);
				cursor.removeChild(zalminhand);

				zalminhand = document.createElement("a-entity");
				zalminhand.setAttribute("position", "0.116 -0.422 0.335");
				zalminhand.setAttribute("rotation", "0 90 40");
				zalminhand.setAttribute("obj-model", "obj: #plakzalm-obj; mtl: #plakzalm-mtl");

				// Zalm model bij nigiri
			}else{
				zalmingr = document.createElement("a-entity");
				zalmingr.setAttribute("id", "zalmingr");
				zalmingr.setAttribute("position", "-0.018 0.077 0.029");
				zalmingr.setAttribute("obj-model","obj:#plakzalm-obj; mtl:#plakzalm-mtl");
				bord.appendChild(zalmingr);
				cursor.removeChild(zalminhand);

				zalminhand = document.createElement("a-entity");
				zalminhand.setAttribute("position", "0.116 -0.422 0.335");
				zalminhand.setAttribute("rotation", "0 90 40");
				zalminhand.setAttribute("obj-model", "obj: #plakzalm-obj; mtl: #plakzalm-mtl");
			}

			// Tonijn model
		}else if(cursor.contains(tonijninhand)){

			tonijningr = document.createElement("a-entity");
			tonijningr.setAttribute("id", "tonijningr");
			tonijningr.setAttribute("position", "-0.018 0.077 0.029");
			tonijningr.setAttribute("obj-model", "obj:#tonijn-obj; mtl:#tonijn-mtl");
			bord.appendChild(tonijningr);
			cursor.removeChild(tonijninhand);

			tonijninhand = document.createElement("a-entity");
			tonijninhand.setAttribute("position", "0.116 -0.422 0.335");
			tonijninhand.setAttribute("rotation", "0 90 40");
			tonijninhand.setAttribute("obj-model", "obj: #tonijn-obj; mtl: #tonijn-mtl");

			// Komkommer ingredient
		}else if(cursor.contains(komkommerinhand)){

			komkommeringr = document.createElement("a-entity");
			komkommeringr.setAttribute("id", "komkommeringr");
			komkommeringr.setAttribute("position", "0.07 0.172 -0.041");
			komkommeringr.setAttribute("obj-model", "obj: #komkommeringr-obj; mtl: #komkommeringr-mtl")
			komkommeringr.setAttribute("rotation", "0 90 0");
			komkommeringr.setAttribute("scale", "1 1 0.7");
			bord.appendChild(komkommeringr);
			cursor.removeChild(komkommerinhand);

			komkommerinhand = document.createElement("a-entity");
            komkommerinhand.setAttribute("id", "komkommerinhand2");
	 	    komkommerinhand.setAttribute("position", "0.117 -0.102 0.503");
	        komkommerinhand.setAttribute("obj-model", "obj: #komkommeringr-obj; mtl: #komkommeringr-mtl");
 	        komkommerinhand.setAttribute("rotation", "90 0 0");
	        komkommerinhand.setAttribute("scale", "0.75 0.75 0.5");

			// Norivel ingredient
		}else if(cursor.contains(norivelinhand)){

			norivelingr = document.createElement("a-box");
			norivelingr.setAttribute("id", "norivelingr");
			norivelingr.setAttribute("position", "0.068 0.079 -0.046");
			norivelingr.setAttribute("src", "images/norivel.jpeg");
			norivelingr.setAttribute("scale", "0.95 0.010 0.7");
			bord.appendChild(norivelingr);
			cursor.removeChild(norivelinhand);

			norivelinhand = document.createElement("a-box");
			norivelinhand.setAttribute("id","norivelinhand");
			norivelinhand.setAttribute("position", "0.188 -0.280 0.659");
			norivelinhand.setAttribute("rotation", "60 0 0");
			norivelinhand.setAttribute("src", "images/norivel.jpeg");
			norivelinhand.setAttribute("scale", "0.270 0.010 0.340");
		}




		// Serveren bestelling
		if (bord.hasChildNodes){
			if (audioIsGespeeldServeren == false){
				serveren.components.sound.playSound();
				audioIsGespeeldServeren = true;
			}

			persoon.addEventListener("mouseenter", function() {
					cursorLoad();
			});
			persoon.addEventListener("click", function() {

				//Nigiri Zalm
				if (bord.contains(rijstingr) && bord.contains(zalmingr) && bord.contains(tonijningr) == false && bord.contains(komkommeringr) == false && bord.contains(norivelingr) == false) {
					sushi.setNaam("Nigiri(zalm)");
				}
				//Nigiri Tonijn
				else if(bord.contains(rijstingr) && bord.contains(tonijningr) && bord.contains(zalmingr) == false && bord.contains(komkommeringr) == false && bord.contains(norivelingr) == false){
					sushi.setNaam("Nigiri(tonijn)");

				}
				//Hosomaki Zalm
				else if(bord.contains(norivelingr) && bord.contains(rijstingr) && bord.contains(zalmingr) && bord.contains(tonijningr) == false && bord.contains(komkommeringr) == false){
						// oprollenSushi();
						sushi.setNaam("Hosomaki(zalm)");

				}

				//Hosomaki Komkommer
				else if(bord.contains(norivelingr) && bord.contains(rijstingr) && bord.contains(komkommeringr) && bord.contains(tonijningr) == false && bord.contains(zalmingr) == false){
						// oprollenSushi();
						sushi.setNaam("Hosomaki(komkommer)");

				}

				//Als de sushi die gemaakt is hetzelfde als de bestelling dan goedkeuring
				if (bestellingRandom == sushi.naam) {

					if (audioIsGespeeldKookboek == false){
						kookboek.components.sound.playSound();
						audioIsGespeeldKookboek = true;
					}

					klantTekst.setAttribute("value", "Dankjewel");
					if(bord.contains(rijstingr) && bord.contains(zalmingr) && bord.contains(tonijningr) == false && bord.contains(komkommeringr) == false && bord.contains(norivelingr) == false){
						bar.appendChild(nigiriZalm);
					}
					if(bord.contains(rijstingr) && bord.contains(tonijningr) && bord.contains(zalmingr) == false && bord.contains(komkommeringr) == false && bord.contains(norivelingr) == false){
						bar.appendChild(nigiriTonijn);
					}
					if(bord.contains(rijstingr) && bord.contains(zalmingr) && bord.contains(norivelingr) && bord.contains(tonijningr) == false && bord.contains(komkommeringr) == false){
							bar.appendChild(hosaMakiZalm);
					}
					if(bord.contains(rijstingr) && bord.contains(komkommeringr) && bord.contains(norivelingr) && bord.contains(tonijningr) == false && bord.contains(zalmingr) == false){
							bar.appendChild(hosaMakiKomkommer);
					}

					//maak animatie voor de persoon
					var persoonAnimatie = document.createElement("a-animation");
					persoonAnimatie.setAttribute("attribute", "rotation");
					persoonAnimatie.setAttribute("to", "5 -65 -10");
					persoonAnimatie.setAttribute("dur", "500");
					persoonAnimatie.setAttribute("easing", "linear");
					persoonAnimatie.setAttribute("repeat", "1");
					persoonAnimatie.setAttribute("direction", "alternate");
					persoon.appendChild(persoonAnimatie);


					persoonAnimatie.addEventListener("animationend", function(){
						persoon.removeChild(persoonAnimatie);
						persoon.setAttribute("rotation", "0 -65 0");

					});

					verwijderChilds();
				}
				//Als de sushi die gemaakt is verschilt met de bestelling dan corectie
				else {
					//maak animatie voor persoon bij nee
					var persoonNeeAnimatie = document.createElement("a-animation");
					persoonNeeAnimatie.setAttribute("attribute", "rotation");
					persoonNeeAnimatie.setAttribute("from", "0 -65 0");
					persoonNeeAnimatie.setAttribute("to", "0 -10 0");
					persoonNeeAnimatie.setAttribute("dur", "500");
					persoonNeeAnimatie.setAttribute("repeat", "1");
					persoonNeeAnimatie.setAttribute("direction", "alternate");

					persoon.appendChild(persoonNeeAnimatie);

					persoonNeeAnimatie.addEventListener("animationend", function(){
					persoon.removeChild(persoonNeeAnimatie);

						var persoonNeeAnimatie2 = document.createElement("a-animation");
						persoonNeeAnimatie2.setAttribute("attribute", "rotation");
						persoonNeeAnimatie2.setAttribute("from", "0 -65 0");
						persoonNeeAnimatie2.setAttribute("to", "0 -100 0");
						persoonNeeAnimatie2.setAttribute("dur", "500");
						persoonNeeAnimatie2.setAttribute("repeat", "1");
						persoonNeeAnimatie2.setAttribute("direction", "alternate");
						persoon.appendChild(persoonNeeAnimatie2);

						persoonNeeAnimatie2.addEventListener("animationend", function(){
							persoonNeeAnimatie2.removeChild(persoonNeeAnimatie2);
						});

					});
					klantTekst.setAttribute("value", "Als het goed is had ik \n" + bestellingRandom + " besteld.");
					 verwijderChilds();
				}
			});
		};
	});


	//Klant neemt nieuwe bestelling op
	function verwijderChilds() {
		setTimeout(function() {
			persoon = document.getElementById("persoon");

			if(bestellingRandom == "Nigiri(zalm)" && sushi.getNaam() == "Nigiri(zalm)"){
				  bestellingRandom = klantBestelling[1];
					sushi.setNaam("Nigiri(tonijn)");

			}
			else if(bestellingRandom == "Nigiri(tonijn)" && sushi.getNaam() == "Nigiri(tonijn)"){
						bestellingRandom = klantBestelling[2];
						sushi.setNaam("Hosomaki(zalm)");

			}
			else if(bestellingRandom == "Hosomaki(zalm)" && sushi.getNaam() == "Hosomaki(zalm)"){
					bestellingRandom = klantBestelling[3];
					sushi.setNaam("Hososmaki(komkommer)");
			}else if(bestellingRandom == "Hosomaki(komkommer)" && sushi.getNaam() == "Hosomaki(komkommer)"){
					var eind = document.getElementById("eindtekst");
					eind.setAttribute("visible","true");
			}

			klantTekst.setAttribute("value", "Ik wil graag sushi \n" + bestellingRandom);

			//Verwijder alles van bord
			while (bar.hasChildNodes() == true) {
				bar.removeChild(bar.firstChild);
			}

			sushi.setNaam("");
			//Verwijder alles van bord
			while (bord.hasChildNodes() == true) {
				bord.removeChild(bord.firstChild);
			}
			sushiset.removeChild(imageObject);
			//Maak image objecten de image array
			imageObject = document.createElement("a-image");
			imageObject.setAttribute("src", "#sushiimage");
			imageObject.setAttribute("position", "1.171 1.711 1.287");
			imageObject.setAttribute("rotation", "0 90 0");
			imageObject.setAttribute("width", "0.5");
			imageObject.setAttribute("height", "0.5");

			sushiset.appendChild(imageObject);
			image.setAttribute("src", "images/" + bestellingRandom + ".jpg");

			setTimeout(function(){
				if (audioIsGespeeldSucces == false){
						succes.components.sound.playSound();
						audioIsGespeeldSucces = true;
				}
			}, 3000); 

			schijnwerper.setAttribute("visible", "false");
			hoofdlicht.setAttribute("color", "#ffffff");
            hoofdlicht.setAttribute("intensity", "1.070");
			sfeerlicht.setAttribute("visible", "true");

		}, 5000);
	};
}
