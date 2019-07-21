<!--hide

function weight_changed(form) {
    weight_is_valid = false;
    var weight = form.kg.value;
    if (+weight === +weight) { 
        if (weight > 0 ) {
            weight_is_valid = true;
        }
    }
    if (weight_is_valid) {
        document.getElementById("cardio").innerHTML = "(" + (0.5 * weight) + " j)";
        document.getElementById("defib").innerHTML = "(" + (2.0 * weight) + " j)";
    } else {
        form.kg.value = ""
        document.getElementById("cardio").innerHTML = ""
        document.getElementById("defib").innerHTML = "";
    }
}

function propofol(form) {
var isIE = false;
if (navigator.appName.indexOf("Microsoft") != -1)
	isIE = true;
	
// *** EMERGENCY INTUBATION Medications ***
var cardio = .5 * form.kg.value;
var defib = 2 * form.kg.value;
var volexp = 10 * form.kg.value;
var succmg = 1 * form.kg.value;
var succml = 1 * form.kg.value /20;
var vecmg = .1 * form.kg.value;
var vecml = .1 * form.kg.value / 1;
var chlength = form.length.value;
var NTT_chlength = form.length.value;

// *** STAT ARREST Medication ***

 
//NTT Tube Calc
if (NTT_chlength < 29.51)
{
	var ntt_tubelngth = 0;
}
if (NTT_chlength > 29.50)
{
	var ntt_tubelngth = 6.5;
}
 if (NTT_chlength > 30.5) 
{
	var ntt_tubelngth = 6.75;
}
if (NTT_chlength > 31.5)
{
	var ntt_tubelngth = 7;
}
if (NTT_chlength > 32.5)
{
	var ntt_tubelngth = 7.25;
}
if (NTT_chlength > 33.5)
{
	var ntt_tubelngth = 7.5;
}
if (NTT_chlength > 34.5)
{
	var ntt_tubelngth = 7.75;
}
if (NTT_chlength > 35.5)
{
	var ntt_tubelngth = 8;
}
if (NTT_chlength > 36.5)
{
	var ntt_tubelngth = 8.12;
}
if (NTT_chlength > 37.5)
{
	var ntt_tubelngth = 8.25;
}
if (NTT_chlength > 38.5)
{
	var ntt_tubelngth = 8.5;
}
if (NTT_chlength > 39.5)
{
	var ntt_tubelngth = 8.75;
}
if (NTT_chlength > 40.5)
{
	var ntt_tubelngth = 9;
}
if (NTT_chlength > 41.5)
{
	var ntt_tubelngth = 9.25;
}
if (NTT_chlength > 42.5)
{
	var ntt_tubelngth = 9.35;
}
if (NTT_chlength > 43.5)
{
	var ntt_tubelngth = 9.5;
}
if (NTT_chlength > 44.5)
{
	var ntt_tubelngth = 9.75;
}
if (NTT_chlength > 45.5)
{
	var ntt_tubelngth = 10;
}
if (NTT_chlength > 46.5)
{
	var ntt_tubelngth = 10.12;
}
if (NTT_chlength > 47.5)
{
	var ntt_tubelngth = 10.25;
}
if (NTT_chlength > 48.5)
{
	var ntt_tubelngth = 10.35;
}
if (NTT_chlength > 49.5)
{
	var ntt_tubelngth = 10.5;
}
if (NTT_chlength > 50.5)
{
	var ntt_tubelngth = 10.75;
}
if (NTT_chlength > 51.5)
{
	var ntt_tubelngth = 11;
}
if (NTT_chlength > 52.5)
{
	var ntt_tubelngth = 11.25;
}
if (NTT_chlength > 53.5)
{
	var ntt_tubelngth = 11.5;
}
if (NTT_chlength > 54.5)
{
	var ntt_tubelngth = 11.75;
}
if (NTT_chlength > 55.5)
{
	var ntt_tubelngth = 12;
}
if (NTT_chlength > 56.5)
{
	var ntt_tubelngth = 12.25;
}
if (NTT_chlength > 57.5)
{
	var ntt_tubelngth = 12.5;
}
if (NTT_chlength > 58.5)
{
	var ntt_tubelngth = "NA";
} 
// ademgml ADENOSINE MGML

if ((form.kg.value) <3) {
	var ademgml = .05;
}else{
	var ademgml = .1 ;
}

// ademg ADENOSINE MG
if ((form.kg.value) <3) {
	var ademg = form.kg.value *.05;
}else{
	var ademg = form.kg.value *0.1;
}

// ademgml ADENOSINE ML
if ((form.kg.value) <3) {
	var ademl = (form.kg.value *.05)*2;
}else{
	var ademl = (form.kg.value *0.1)*2;
}

// amimg AMIODARONE
	var amimg = 5 * form.kg.value;

// amiml
	var amiml = amimg /3;

// atrmg  ATROPINE
if ((form.kg.value *0.02) <0.1) { 
	var atrmg = 0.1;
}else{
	var atrmg = form.kg.value *0.02;
}
	var atrml = atrmg /0.1;

//CALCIUM GLUCONATE
	var calmg = form.kg.value *100;
	var calml = calmg /100;
	if ((form.kg.value) <3) {
	var calmgkg = 100;
}else{
	var calmgkg = 100;
}
 
//  DEXTROSE

	var dexmg = form.kg.value *200;
	var dexml = dexmg /100;
	

// EPINEPHRINE
if ((form.kg.value *0.01) >1) { 
	var epimg = 1;
}else{
	var epimg = form.kg.value *0.01;
}
var epiml = epimg /0.1;
if ((form.kg.value *0.1) >5) { 
	var epinmg = 5;
}else{
	var epinmg = form.kg.value *0.1;
}
var epinml = epinmg /.1;
var fentmcg = form.kg.value *1;
var fentml = fentmcg /50;
var milmg = form.kg.value *.05;
var milml = milmg /.2;
var nalmg = form.kg.value *.1;
var nalml = nalmg /0.4;
var sodmg = form.kg.value *1;
var sodml = sodmg /.5;

// *** MAINTENANCE INFUSIONS ***
var alp = ((form.kg.value *.05)*60)/10;
var alplo = ((form.kg.value *.05)*60)/5;
var ami = ((form.kg.value *10)/0.5)/24;
var dob = (form.kg.value *60)/1000;
//var doblo = (form.kg.value *60)/500;
var dop = (form.kg.value /800)*60;
var doplo = (form.kg.value /400)*60;
var epi2 = ((form.kg.value *0.05)*60)/20;
var epilo = ((form.kg.value *.05)*60)/10;
var lid = ((form.kg.value *10)*60)/4000;
var lidlo= ((form.kg.value *10)*60)/2000;
var mil =  ((form.kg.value *0.25)*60) /200;
var millo = ((form.kg.value *0.25)*60)/50;
var nor = ((form.kg.value *.01)*60)/20;
var norlo = ((form.kg.value *.01 )*60)/10;
var phe = ((form.kg.value *0.1 )/40)*60;
var phelo = ((form.kg.value *0.1)/10)*60;
var vas = ((form.kg.value *.0005) /0.2)*60;
var vaslo = ((form.kg.value *.0005) /0.1)*60;

// *** EMERGENCY INTUBATION Medications ***
form.chlength.value = FixNumber(chlength,2);
form.ntt_tubelngth.value = FixNumber(ntt_tubelngth,3);
form.cardio.value = FixNumber(cardio,2);
form.defib.value = FixNumber(defib,2);
form.volexp.value = FixNumber(volexp,2);
form.succmg.value = FixNumber(succmg,2);
form.succml.value = FixNumber(succml,2);
form.vecmg.value = FixNumber(vecmg,2);
form.vecml.value = FixNumber(vecml,2);

// *** STAT ARREST Medication  ***

form.ademg.value = FixNumber(ademg,2);
form.ademl.value = FixNumber(ademl,2);
form.ademgml.value = FixNumber(ademgml,2);
form.ami.value = FixNumber(ami,2);
form.amimg.value = FixNumber(amimg,2);
form.amiml.value = FixNumber(amiml,2);
form.atrmg.value = FixNumber(atrmg,2);
form.atrml.value = FixNumber(atrml,2);
form.calmg.value = FixNumber(calmg,2);
form.calml.value = FixNumber(calml,2);
form.calmgkg.value = FixNumber(calmgkg,2);

form.dexmg.value = FixNumber(dexmg,2);
form.dexml.value = FixNumber(dexml,2);
form.epimg.value = FixNumber(epimg,2);
form.epiml.value = FixNumber(epiml,2);
form.fentmcg.value = FixNumber(fentmcg,2);
form.fentml.value = FixNumber(fentml,2);
form.milmg.value = FixNumber(milmg,2);
form.milml.value = FixNumber(milml,2);
form.nalmg.value = FixNumber(nalmg,2);
form.nalml.value = FixNumber(nalml,2);
form.sodmg.value = FixNumber(sodmg,2);
form.sodml.value = FixNumber(sodml,2);

// *** MAINTENANCE INFUSIONS ***

form.alp.value = FixNumber(alp,2);
form.alplo.value = FixNumber(alplo,2);
form.dob.value = FixNumber(dob,2);
//form.doblo.value = FixNumber(doblo,2);
form.dop.value = FixNumber(dop,2);
form.doplo.value = FixNumber(doplo,2);
form.epi2.value = FixNumber(epi2,2);
form.epilo.value = FixNumber(epilo,2);
form.lid.value = FixNumber(lid,2);
form.lidlo.value = FixNumber(lidlo,2);
form.mil.value = FixNumber(mil,2);
form.millo.value = FixNumber(millo,2);
form.nor.value = FixNumber(nor,2);
form.norlo.value = FixNumber(norlo,2);
form.phe.value = FixNumber(phe,2);
form.phelo.value = FixNumber(phelo,2);
form.vas.value = FixNumber(vas,2);
form.vaslo.value = FixNumber(vaslo,2);


//if statements--
if((form.kg.value==null)||(form.kg.value=="")||(isNaN(form.kg.value))){
alert('Please enter a weight in kilograms with numbers only. Use a period for decimal place.');
form.kg.focus();
form.kg.select();
return false
}
if((form.length.value==null)||(form.length.value=="")||(isNaN(form.length.value))){
alert('Please enter a length with whole numbers only.');
form.kg.focus();
form.kg.select();
return false
}

if (isIE == false)
{alert('You should use Internet Explorer for this application.');
return true
}

// Functions
// 1 = 1 decimal place, 2 = 2 Decimal places
function FixNumber(N,dec)
{

if (dec == 2)
	{
	if (N < 0.1)
		{
			N = Math.round(N * 100) / 100;
		}else{
	if (N < 1)
		{
			N = Math.round(N * 100) / 100;
			//if (!isIE)
				//N = "0" + N;
		}else{
	if (N < 10)
		{
			N = Math.round(N * 100) / 100;
		}else{
	if (N < 100)
		{
			N = Math.round(N * 1000) / 1000;
		}else{
			N = Math.round(N);
            }
		}
	}
   }
   return N; 
}else{
if (dec == 3)
	{
	if (N < 0.1)
		{
			N = Math.round(N * 100) / 100;
		}else{
	if (N < 1)
		{
			N = Math.round(N * 100) / 100;
			//if (!isIE)
				//N = "0" + N;
		}else{
	if (N < 10)
		{
			N = Math.round(N * 100) / 100;
		}else{
	if (N < 100)
		{
			N = Math.round(N * 1000) / 1000;
		}else{
			N = Math.round(N);
            }
		}
	}
   }
   return N; 		
}else{   
	if (N < 1)
		{
         N = Math.round(N * 10) / 10;
         //if (!isIE)
           // N = "0" + N;
    }else{
	if (N < 100)
		{
		N = Math.round(N * 10) / 10;
		}else{
			N = Math.round(N);
            }
        }
   }
   return N;
}
}
}
//unhide-->
