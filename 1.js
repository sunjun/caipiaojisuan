

function isContains(str, substr)
{
	return str.indexOf(substr) >= 0;
}

function numberInArray(n,arr)
{
	if (arr.length == 0)
		return true;

	var found = false;
	for (var i = 0; i < arr.length; i++) {
		if (n == arr[i]) {
			found = true;
			break;
		}
	}	
	return found;
}

function getArrayFromString1(s)
{
	if (s == "") {
		return [];
	}

	if (!isContains(s, ",") && !isContains(s, "-")) {
		a = new Array();
		a[0] = Number(s);
		return a;
	}

	r = s.split(",");	
	last = r[r.length-1];

	var index = last.indexOf("-");
	var startS = last.substring(0, index);
	var endS = last.substring(index+1);

	var startN = Number(startS);
	var endN = Number(endS);
	var l = r.length;

	for (var i = 0; i < l-1; i++)
		r[i] = Number(r[i]);

	for (var i = r.length-1,j=0; i < l+(endN-startN);i++,j++) {
		r[i] = startN+j;
	}
	return r;

}

function getArrayFromString(s)
{
	if (s == "") {
		return [];
	}

	if (!isContains(s, ",") && !isContains(s, "-")) {
		a = new Array();
		a[0] = Number(s);
		return a;
	}

	if (!isContains(s, ",") && isContains(s, "-")) {
		a = new Array();
		r = s.split("-");	
		a[0] = Number(r[0]);
		a[1] = Number(r[1]);
		return a;
	}

	r = s.split(",");	
	for (var i = 0; i < r.length; i++)
		r[i] = Number(r[i]);

	return r;
}

function getArrayFromList(s)
{
	var a = new Array()


	for (var i = 0, j=0; i < 36; i++) {
		var ss = s+i;

		if ($("#"+ss).is(':checked')) {
			a[j]=i;
			j++;
		}
	}
	return a;

}
function genrateList()
{
	for (var i = 1; i < 36; i++) {
		$("#a-six").append('<input type="checkbox" id="a-six-'+i+'"' +'/>'+i);
		$("#b-six").append('<input type="checkbox" id="b-six-'+i+'"' +'/>'+i);
		$("#c-six").append('<input type="checkbox" id="c-six-'+i+'"' +'/>'+i);
		$("#d-six").append('<input type="checkbox" id="d-six-'+i+'"' +'/>'+i);
		$("#e-six").append('<input type="checkbox" id="e-six-'+i+'"' +'/>'+i);
		$("#f-six").append('<input type="checkbox" id="f-six-'+i+'"' +'/>'+i);
	}
}

$(document).ready(function(){

	genrateList();
	$("#six").click(function(){
		$("#six-ol").empty();
		var s = $("#sum-six").val();
		var sumArray = new Array();

		var index = s.indexOf("-");
		var startS = s.substring(0, index);
		var endS = s.substring(index+1);

		var startN = Number(startS);
		var endN = Number(endS);

		for (var i=0; i<200;i++) {
			sumArray[i]=i;
		}

		var N = 36;
		var count = 0;

		var sArray = getArrayFromString(s);


		var a = $("#a-six").val();
		var aArray = getArrayFromString(a);

		aArray = getArrayFromList("a-six-")

		var b = $("#b-six").val();
		var bArray = getArrayFromString(b);
		bArray = getArrayFromList("b-six-")

		var c = $("#c-six").val();
		var cArray = getArrayFromString(c);
		cArray = getArrayFromList("c-six-")

		var d = $("#d-six").val();
		var dArray = getArrayFromString(d);
		dArray = getArrayFromList("d-six-")

		var e = $("#e-six").val();
		var eArray = getArrayFromString(e);
		eArray = getArrayFromList("e-six-")

		var f = $("#f-six").val();
		var fArray = getArrayFromString(f);
		fArray = getArrayFromList("f-six-")


		for (var i=0; i<sArray.length; i++){
			for (var a=1; a<N; a++) {
				for (var b=a+1; b<N; b++) {
					for (var c=b+1; c<N; c++) {
						for (var d=c+1; d<N; d++) {
							for (var e=d+1; e<N; e++) {
								for (var f=e+1; f<N; f++) {
									if (a+b+c+d+e+f == sArray[i]) {

										if (numberInArray(a, aArray)) {
											if (numberInArray(b, bArray)) {
												if (numberInArray(c, cArray)) {
													if (numberInArray(d, dArray)) {
														if (numberInArray(e, eArray)) {
															if (numberInArray(f, fArray)) {

																$("#six-ol").append("<li>"+sArray[i]+"="+a+"+"+b+"+"+c+"+"+d+"+"+e+"+"+f+"</li>");
																count++;
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}

		if (count == 0) {
			$("#six-ol").append("<li>无结果</li>");
		}
	});

	$("#three").click(function(){
		$("#three-ol").empty();
		var s = $("#sum-three").val();
		var sum = Number(s);
		var N = 10;
		var count = 0;
		for (var a=0; a<N; a++) {
			for (var b=0; b<N; b++) {
				for (var c=0; c<N; c++) {
					if (a+b+c == sum) {

						$("#three-ol").append("<li>"+sum+"="+a+"+"+b+"+"+c+"</li>");
						count++;
					}
				}
			}
		}
		if (count == 0) {
			$("#three-ol").append("<li>无结果</li>");
		}
	})
});