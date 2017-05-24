function drillDepth () {
		 var drillsize = document.getElementById('diameter').value;
		 var atan = Math.tan(59);
		 drillsize = drillsize/2;
		 var depth = drillsize/atan;
		 depth = depth/2;

		 depth = depth.toFixed(4);     //limits to 4 dicemals after the point.
		
	document.getElementById("drillDepthAnswer").innerHTML="Drill depth is: "+depth+"\"";    //posts the calculation into the <p "id=drillDepthAnswer"> tag
	

	}


function feed () {
	var rpmc = document.getElementById('rpm').value;
	var flutes = document.getElementById('flutes').value;
	var fpt = document.getElementById('fpt').value;
	var feedc = fpt * flutes * rpmc;

	document.getElementById("feedAnswer").innerHTML="Feed : " +feedc+" inch/min";
}

function rpmMetric() {
	var vc = document.getElementById('vc').value;
	var dia = document.getElementById('diam').value;
	var pi = Math.PI;
	
	rpmm = (1000 * vc ) / (pi * dia) ;

	rpmm = rpmm.toFixed(0);

	document.getElementById("metricAnswer").innerHTML="RPM : " + rpmm;
}


function rpmImperial() {
	var sfm = document.getElementById('sfm').value;
	var diai = document.getElementById('diai').value;

//	sfm=Number(sfm);
//	diai=Number(diai);

	var rpmi = (sfm * 3.82) / diai;

	rpmi = rpmi.toFixed(2);

	document.getElementById("imperialAnswer").innerHTML="RPM : " + rpmi;
}


