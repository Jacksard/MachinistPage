function drillDepth () {
		
		 var drillsize = document.getElementById('diameter').value;
		 console.log(drillsize);
		 if (isNaN(drillsize)) { 
			document.getElementById("drillDepthAnswer").innerHTML="Enter a Number";	
		 } else {
			var atan = Math.tan(59);
			drillsize = drillsize/2;

			var depth = drillsize/atan;
			depth = depth/2;
			depth = depth.toFixed(4);     //limits to 4 dicemals after the point.
			console.log(depth);
			document.getElementById("drillDepthAnswer").innerHTML="Drill depth is: "+depth+"\"";    //posts the calculation into the <p "id=drillDepthAnswer"> tag
		}

	}


function feed() {
	
	var rpmc = document.getElementById('rpm').value;
	var flutes = document.getElementById('flutes').value;
	var fpt = document.getElementById('fpt').value;
	
	if ((isNaN(rpmc)) || (isNaN(flutes)) || (isNaN(fpt))) {
		document.getElementById("feedAnswer").innerHTML="Enter Numbers";
	} else {
	var feedc = fpt * flutes * rpmc;
	document.getElementById("feedAnswer").innerHTML="Feed : " +feedc+" inch/min";
	}
}

function rpmMetric() {
	var vc = document.getElementById('vc').value;
	var dia = document.getElementById('diam').value;

	if ((isNaN(vc)) || ((isNaN(dia)))) { 
	document.getElementById("metricAnswer").innerHTML="Enter Numbers";
	} else {

	var pi = Math.PI;
	
	rpmm = (1000 * vc ) / (pi * dia) ;
	rpmm = rpmm.toFixed(0);

	document.getElementById("metricAnswer").innerHTML="RPM : " + rpmm;
	}
}

function rpmImperial() {
	var sfm = document.getElementById('sfm').value;
	var diai = document.getElementById('diai').value;

	if ((isNaN(sfm)) || (isNaN(diai))) {
		document.getElementById("imperialAnswer").innerHTML="Enter Numbers";
	} else {	
	var rpmi = (sfm * 3.82) / diai;
 	rpmi = rpmi.toFixed(2);
	document.getElementById("imperialAnswer").innerHTML="RPM : " + rpmi;
	}
}

