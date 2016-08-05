SUM_COUNT = 190;
STEP_COUNT = 36;
NUMBER_COUNT = 36;

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

function getArrayFromCheckbox(count, id)
{
	var a = new Array()


	for (var i = 0, j=0; i < count; i++) {
		var ss = id+'-'+i;

		if ($("#"+ss).is(':checked')) {
			a[j]=i;
			j++;
		}
	}
	return a;
}

function genrateCheckbox(count, idString)
{
	for (var i = 0; i < count; i++) {
		var idS = idString+'-'+i;
		var div = '<div class="mdl-cell mdl-cell--1-col">';
		var divEnd = '</div>';
		var label = '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="'+idS+'">';
		var input = '<input type="checkbox" id="'+idS+'" class="mdl-checkbox__input">';
		var span = '<span class="mdl-checkbox__label">'+i+'</span>';
		var labelEnd = '</label>';
		$("#"+idString).append(div+label+input+span+labelEnd+divEnd);
	}
}

function genrateSelect(count, idString)
{
	for (var i = 0; i < count; i++) {
		var option = '<option >'+i+'</option>';
		$("#"+idString).append(option);
	}
}

function reGetArrayFromSelection2(sumArray)
{
	var startString = $("#sum-start-two").find("option:selected").text();
	var endString = $("#sum-end-two").find("option:selected").text();

	var start = Number(startString);
	var end = Number(endString);

	if (end <= start) {
		return sumArray;
	}

	var len = sumArray.length;
	for (var i = len, j = 0; j <= end - start; i++, j++) {
		sumArray[i] = start + j;
	}

	return sumArray;

}
function reGetArrayFromSelection(sumArray)
{
	var startString = $("#sum-start").find("option:selected").text();
	var endString = $("#sum-end").find("option:selected").text();

	var start = Number(startString);
	var end = Number(endString);

	if (end <= start) {
		return sumArray;
	}

	var len = sumArray.length;
	for (var i = len, j = 0; j <= end - start; i++, j++) {
		sumArray[i] = start + j;
	}

	return sumArray;

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

function setAll(id, isChecked, count)
{
	for (var i = 0; i < count; i++) {
		var idString = "#"+id + "-" +i;
		if (isChecked)
			$(idString).attr("checked",true);
		else
			$(idString).attr("checked",false);
	}
}

function setAllButton()
{
	$("#a-six-all").click(function(){ 
		setAll("a-six", true, NUMBER_COUNT);
	}); 
	$("#b-six-all").click(function(){ 
		setAll("b-six", true, NUMBER_COUNT);
	}); 
	$("#c-six-all").click(function(){ 
		setAll("c-six", true, NUMBER_COUNT);
	}); 
	$("#d-six-all").click(function(){ 
		setAll("d-six", true, NUMBER_COUNT);
	}); 
	$("#e-six-all").click(function(){ 
		setAll("e-six", true, NUMBER_COUNT);
	}); 
	$("#f-six-all").click(function(){ 
		setAll("f-six", true, NUMBER_COUNT);
	});
	$("#a-six-all-cancle").click(function(){ 
		setAll("a-six", false, NUMBER_COUNT);
	}); 
	$("#b-six-all-cancle").click(function(){ 
		setAll("b-six", false, NUMBER_COUNT);
	}); 
	$("#c-six-all-cancle").click(function(){ 
		setAll("c-six", false, NUMBER_COUNT);
	}); 
	$("#d-six-all-cancle").click(function(){ 
		setAll("d-six", false, NUMBER_COUNT);
	}); 
	$("#e-six-all-cancle").click(function(){ 
		setAll("e-six", false, NUMBER_COUNT);
	}); 
	$("#f-six-all-cancle").click(function(){ 
		setAll("f-six", false, NUMBER_COUNT);
	}); 


	$("#a-six-all-two").click(function(){ 
		setAll("a-six-two", true, NUMBER_COUNT);
	}); 
	$("#a-six-all-cancle-two").click(function(){ 
		setAll("a-six-two", false, NUMBER_COUNT);
	}); 

}

function getNumberCount(aArray,bArray,cArray,dArray,eArray,fArray)
{
	var count = 0;
	if (aArray.length > 0)
		count++;
	if (bArray.length > 0)
		count++;
	if (cArray.length > 0)
		count++;
	if (dArray.length > 0)
		count++;
	if (eArray.length > 0)
		count++;
	if (fArray.length > 0)
		count++;
	return count;
}

function sumOfArray(a)
{
	var sum = 0;
	for (var i = 0; i < a.length; i++) {
		sum += a[i];
	}
	return sum;
}

function stepNumber(a, b, c, d, e, f, aArray)
{
	var max = -1;
	var min = 200;

	var aa = aArray.concat();

	var len = aa.length;
	var i = 0;
	if (a != -1) {
		aa[len+i] = a;
		i++;
	}
	if (b != -1) {
		aa[len+i] = b;
		i++;
	}
	if (c != -1) {
		aa[len+i] = c;
		i++;
	}
	if (d != -1) {
		aa[len+i] = d;
		i++;
	}
	if (e != -1) {
		aa[len+i] = e;
		i++;
	}	
	if (f != -1) {
		aa[len+i] = f;
		i++;
	}

	for (i = 0; i < aa.length; i++) {
		if (aa[i] > max)
			max = aa[i];
		if (aa[i] < min)
			min = aa[i];
	}
	return max - min;
}

function getABCMaxMinStep(a, b, c) {
	max = a;
	if (b>max)
		max =b;
	if (c>max)
		max =c;
	min = a;
	if (b<min)
		min =b;
	if (c<min)
		min =c;
	return max - min;
}

$(document).ready(function(){

	var N = NUMBER_COUNT;

	genrateCheckbox(SUM_COUNT, "sum-single");
	genrateCheckbox(STEP_COUNT, "sum-step");
	genrateSelect(SUM_COUNT, "sum-start");
	genrateSelect(SUM_COUNT, "sum-end");
	genrateCheckbox(NUMBER_COUNT, "a-six");
	genrateCheckbox(NUMBER_COUNT, "b-six");
	genrateCheckbox(NUMBER_COUNT, "c-six");
	genrateCheckbox(NUMBER_COUNT, "d-six");
	genrateCheckbox(NUMBER_COUNT, "e-six");
	genrateCheckbox(NUMBER_COUNT, "f-six");

	setAllButton();


	genrateCheckbox(SUM_COUNT, "sum-single-two");
	genrateCheckbox(STEP_COUNT, "sum-step-two");
	genrateSelect(SUM_COUNT, "sum-start-two");
	genrateSelect(SUM_COUNT, "sum-end-two");
	genrateCheckbox(NUMBER_COUNT, "a-six-two");

	$("#six").click(function(){
		$("#six-ol").empty();

		var count = 0;
		var sumArray = getArrayFromCheckbox(SUM_COUNT, "sum-single");
		var stepArray = getArrayFromCheckbox(STEP_COUNT, "sum-step");
		var aArray = getArrayFromCheckbox(NUMBER_COUNT, "a-six");
		var bArray = getArrayFromCheckbox(NUMBER_COUNT, "b-six");
		var cArray = getArrayFromCheckbox(NUMBER_COUNT, "c-six");
		var dArray = getArrayFromCheckbox(NUMBER_COUNT, "d-six");
		var eArray = getArrayFromCheckbox(NUMBER_COUNT, "e-six");
		var fArray = getArrayFromCheckbox(NUMBER_COUNT, "f-six");

        //需要计算几个数
        var numberCount = getNumberCount(aArray,bArray,cArray,dArray,eArray,fArray);
        sumArray = reGetArrayFromSelection(sumArray);


        var found10 = false;
        //三个数需要做特殊处理，当三个数中有大于10的话，不能重复
        if ((numberCount == 3) && (aArray.length>0)&& (bArray.length>0)&& (cArray.length>0)) {
        	for (var i = 0; i < aArray.length; i++) {
        		if(aArray[i]>=10) {
        			found10 = true;
        			break;
        		}
        	}
        	if (found10==false) {
        		for (var i = 0; i < bArray.length; i++) {
        			if(bArray[i]>=10) {
        				found10 = true;
        				break;
        			}
        		}	
        	}
        	if (found10==false) {
        		for (var i = 0; i < cArray.length; i++) {
        			if(cArray[i]>=10) {
        				found10 = true;
        				break;
        			}
        		}	
        	}
        }

        if (found10 == true) {
        	numberCount = 2;
        }

        switch(numberCount) {
        	case 2:
        	for (var i=0; i<sumArray.length; i++){
        		for (var a=1; a<N; a++) {
        			for (var b=a+1; b<N; b++) {
        				for (var c=b+1; c<N; c++) {
        					if (a+b+c == sumArray[i]) {
        						if (numberInArray(a, aArray)) {
        							if (numberInArray(b, bArray)) {
        								if (numberInArray(c, cArray)) {
        									if(numberInArray(c-a, stepArray)){
        										$("#six-ol").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"</li>");
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
        	break;
        	case 3:
        	for (var i=0; i<sumArray.length; i++){
        		for (var a=0; a<N; a++) {
        			for (var b=0; b<N; b++) {
        				for (var c=0; c<N; c++) {
        					if (a+b+c == sumArray[i]) {
        						if (numberInArray(a, aArray)) {
        							if (numberInArray(b, bArray)) {
        								if (numberInArray(c, cArray)) {
        									$("#six-ol").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"</li>");
        									count++;
        								}
        							}
        						}
        					}
        				}
        			}
        		}
        	}
        	break;
        	case 4:
        	for (var i=0; i<sumArray.length; i++){
        		for (var a=1; a<N; a++) {
        			for (var b=a+1; b<N; b++) {
        				for (var c=b+1; c<N; c++) {
        					for (var d=c+1; d<N; d++) {
        						if (a+b+c+d == sumArray[i]) {
        							if (numberInArray(a, aArray)) {
        								if (numberInArray(b, bArray)) {
        									if (numberInArray(c, cArray)) {
        										if (numberInArray(d, dArray)) {
        											if(numberInArray(d-a, stepArray)){

        												$("#six-ol").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"+"+d+"</li>");
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
        	break;
        	case 5:
        	for (var i=0; i<sumArray.length; i++){
        		for (var a=1; a<N; a++) {
        			for (var b=a+1; b<N; b++) {
        				for (var c=b+1; c<N; c++) {
        					for (var d=c+1; d<N; d++) {
        						for (var e=d+1; e<N; e++) {
        							if (a+b+c+d+e == sumArray[i]) {
        								if (numberInArray(a, aArray)) {
        									if (numberInArray(b, bArray)) {
        										if (numberInArray(c, cArray)) {
        											if (numberInArray(d, dArray)) {
        												if (numberInArray(e, eArray)) {

        													if(numberInArray(e-a, stepArray)){
        														$("#six-ol").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"+"+d+"+"+e+"</li>");
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
        	break;
        	case 6:
        	for (var i=0; i<sumArray.length; i++){
        		for (var a=1; a<N; a++) {
        			for (var b=a+1; b<N; b++) {
        				for (var c=b+1; c<N; c++) {
        					for (var d=c+1; d<N; d++) {
        						for (var e=d+1; e<N; e++) {
        							for (var f=e+1; f<N; f++) {
        								if (a+b+c+d+e+f == sumArray[i]) {
        									if (numberInArray(a, aArray)) {
        										if (numberInArray(b, bArray)) {
        											if (numberInArray(c, cArray)) {
        												if (numberInArray(d, dArray)) {
        													if (numberInArray(e, eArray)) {
        														if (numberInArray(f, fArray)) {

        															if(numberInArray(f-a, stepArray)){
        																$("#six-ol").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"+"+d+"+"+e+"+"+f+"</li>");
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
        	}
        	break;
        	default:
        }



        if (count == 0) {
        	$("#six-ol").append("<li>无结果</li>");
        }
    });


$("#six-two").click(function(){
	$("#six-ol-two").empty();

	var N = NUMBER_COUNT;
	var count = 0;
	var sumArray = getArrayFromCheckbox(SUM_COUNT, "sum-single-two");
	var stepArray = getArrayFromCheckbox(STEP_COUNT, "sum-step-two");
	var aArray = getArrayFromCheckbox(NUMBER_COUNT, "a-six-two");

	var numberCount = Number($("#number-count").find("option:selected").text());
    sumArray = reGetArrayFromSelection2(sumArray);

    a = -1; b = -1; c = -1; d = -1; e = -1; f = -1;
	if ((aArray.length > 0) && (numberCount > aArray.length)) {
		var loop = numberCount - aArray.length;
		switch (loop) {
			case 5:
			for (var i=0; i<sumArray.length; i++){
				for (a=1; a<N; a++) {
					for (b=a+1; b<N; b++) {
						for (c=b+1; c<N; c++) {
							for (d=c+1; d<N; d++) {
								for (e=d+1; e<N; e++) {
									if ((a+b+c+d+e) == (sumArray[i]-sumOfArray(aArray))) {
										if (!numberInArray(a, aArray) && !numberInArray(b, aArray) && !numberInArray(c, aArray) && !numberInArray(d, aArray) && !numberInArray(e, aArray)){
											step = stepNumber(a, b, c, d, e, f, aArray);
											if(numberInArray(step, stepArray)){
												$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"+"+d+"+"+e+"+"+aArray[0]+"</li>");
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
			break;
			case 4:
			for (var i=0; i<sumArray.length; i++){
				for (a=1; a<N; a++) {
					for (b=a+1; b<N; b++) {
						for (c=b+1; c<N; c++) {
							for (d=c+1; d<N; d++) {
								if ((a+b+c+d) == (sumArray[i]-sumOfArray(aArray))) {
									if (!numberInArray(a, aArray) && !numberInArray(b, aArray) && !numberInArray(c, aArray) && !numberInArray(d, aArray)){
										step = stepNumber(a, b, c, d, e, f, aArray);
										if(numberInArray(step, stepArray)){
											if (aArray.length == 1) {
												$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"+"+d+"+"+aArray[0]+"</li>");
											} else if (aArray.length == 2) {
												$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"+"+d+"+"+aArray[0]+"+"+aArray[1]+"</li>");
											}
											count++;
										}
									}
								}
							}
						}
					}
				}
			}
			break;
			case 3:
			for (var i=0; i<sumArray.length; i++){
				for (a=1; a<N; a++) {
					for (b=a+1; b<N; b++) {
						for (c=b+1; c<N; c++) {
							if ((a+b+c) == (sumArray[i]-sumOfArray(aArray))) {
								if (!numberInArray(a, aArray) && !numberInArray(b, aArray) && !numberInArray(c, aArray)){
									step = stepNumber(a, b, c, d, e, f, aArray);
									if(numberInArray(step, stepArray)){
										if (aArray.length == 1) {
											$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"+"+aArray[0]+"</li>");
										} else if (aArray.length == 2) {
											$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"+"+aArray[0]+"+"+aArray[1]+"</li>");
										} else if (aArray.length == 3) {
											$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"+"+aArray[0]+"+"+aArray[1]+aArray[2]+"</li>");
										}
										count++;
									}
								}
							}
						}
					}
				}
			}
			break;
			case 2:
			var found10 = false;
			for (var i = 0; i < aArray.length; i++) {
				if(aArray[i]>=10) {
					found10 = true;
					break;
				}
			}
			if (numberCount == 3 && !found10) {
				for (var i=0; i<sumArray.length; i++){
					for (a=0; a<N; a++) {
						for (b=0; b<N; b++) {
							if ((a+b) == (sumArray[i]-sumOfArray(aArray))) {
								step = stepNumber(a, b, c, d, e, f, aArray);
								if(numberInArray(step, stepArray)){
									if (aArray.length == 1) {
										$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+aArray[0]+"</li>");
									}
									count++;
								}
							}
						}
					}
				}
				
			} else {
				for (var i=0; i<sumArray.length; i++){
					for (a=1; a<N; a++) {
						for (b=a+1; b<N; b++) {
							if ((a+b) == (sumArray[i]-sumOfArray(aArray))) {
								if (!numberInArray(a, aArray) && !numberInArray(b, aArray)){
									step = stepNumber(a, b, c, d, e, f, aArray);
									if(numberInArray(step, stepArray)){
										if (aArray.length == 1) {
											$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+aArray[0]+"</li>");
										} else if (aArray.length == 2) {
											$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+aArray[0]+"+"+aArray[1]+"</li>");
										} else if (aArray.length == 3) {
											$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+aArray[0]+"+"+aArray[1]+aArray[2]+"</li>");
										} else if (aArray.length == 4) {
											$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+aArray[0]+"+"+aArray[1]+aArray[2]+aArray[3]+"</li>");
										}
										count++;
									}
								}
							}
						}
					}
				}
			}
			break;
			case 1:
			var found10 = false;
			for (var i = 0; i < aArray.length; i++) {
				if(aArray[i]>=10) {
					found10 = true;
					break;
				}
			}
			if (numberCount == 3 && !found10) {
				for (var i=0; i<sumArray.length; i++){
					for (a=0; a<N; a++) {
						if ((a) == (sumArray[i]-sumOfArray(aArray))) {
							step = stepNumber(a, b, c, d, e, f, aArray);
							if(numberInArray(step, stepArray)){
								if (aArray.length == 2) {
									$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+aArray[0]+"+"+aArray[1]+"</li>");
								}
								count++;
							}
						}
					}
				}
			} else {
				for (var i=0; i<sumArray.length; i++){
					for (a=1; a<N; a++) {
						if ((a) == (sumArray[i]-sumOfArray(aArray))) {
							if (!numberInArray(a, aArray)){
								step = stepNumber(a, b, c, d, e, f, aArray);
								if(numberInArray(step, stepArray)){
									if (aArray.length == 1) {
										$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+aArray[0]+"</li>");
									} else if (aArray.length == 2) {
										$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+aArray[0]+"+"+aArray[1]+"</li>");
									} else if (aArray.length == 3) {
										$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+aArray[0]+"+"+aArray[1]+aArray[2]+"</li>");
									} else if (aArray.length == 4) {
										$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+aArray[0]+"+"+aArray[1]+aArray[2]+aArray[3]+"</li>");
									} else if (aArray.length == 5) {
										$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+aArray[0]+"+"+aArray[1]+aArray[2]+aArray[3]+aArray[4]+"</li>");
									}
									count++;
								}
							}
						}
					}
				}
				
			}
			break;
		}

	} else if ((aArray.length > 0) && (numberCount < aArray.length)){

		switch (numberCount) {
			case 6:
			N = aArray.length;
			for (var i=0; i<sumArray.length; i++){
				for (aj = 0; aj <N; aj++) {
					a = aArray[aj]
					for (bj = aj + 1; bj<N; bj++) {
						b = aArray[bj];
						for (cj = bj + 1; cj<N; cj++) {
							c = aArray[cj];
							for (dj = cj + 1; dj<N; dj++) {
								d = aArray[dj];
								for (ej = dj + 1; ej<N; ej++) {
									e = aArray[ej];
									for (fj = ej + 1; fj<N; fj++) {
										f = aArray[fj];
										if ((a+b+c+d+e+f) == sumArray[i]) {
											if(numberInArray(f-a, stepArray)){
												$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"+"+d+"+"+e+"+"+f+"</li>");
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
			break;
			case 5:
			N = aArray.length;
			for (var i=0; i<sumArray.length; i++){
				for (aj = 0; aj <N; aj++) {
					a = aArray[aj]
					for (bj = aj + 1; bj<N; bj++) {
						b = aArray[bj];
						for (cj = bj + 1; cj<N; cj++) {
							c = aArray[cj];
							for (dj = cj + 1; dj<N; dj++) {
								d = aArray[dj];
								for (ej = dj + 1; ej<N; ej++) {
									e = aArray[ej];
									if ((a+b+c+d+e) == sumArray[i]) {
										if(numberInArray(e-a, stepArray)){
											$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"+"+d+"+"+e+"</li>");
											count++;
										}
									}
								}
							}
						}
					}
				}
			}
			break;
			case 4:
			N = aArray.length;
			for (var i=0; i<sumArray.length; i++){
				for (aj = 0; aj <N; aj++) {
					a = aArray[aj]
					for (bj = aj + 1; bj<N; bj++) {
						b = aArray[bj];
						for (cj = bj + 1; cj<N; cj++) {
							c = aArray[cj];
							for (dj = cj + 1; dj<N; dj++) {
								d = aArray[dj];
								if ((a+b+c+d) == sumArray[i]) {
									if(numberInArray(d-a, stepArray)){
										$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"+"+d+"</li>");
										count++;
									}
								}
							}
						}
					}
				}
			}
			break;
			case 3:
			var found10 = false;
        	for (var i = 0; i < aArray.length; i++) {
        		if(aArray[i]>=10) {
        			found10 = true;
        			break;
        		}
        	}
			if (found10){
				N = aArray.length;
				for (var i=0; i<sumArray.length; i++){
					for (aj = 0; aj <N; aj++) {
						a = aArray[aj]
						for (bj = aj + 1; bj<N; bj++) {
							b = aArray[bj];
							for (cj = bj + 1; cj<N; cj++) {
								c = aArray[cj];
								if ((a+b+c) == sumArray[i]) {
									if(numberInArray(d-a, stepArray)){
										$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"</li>");
										count++;
									}
								}
							}
						}
					}
				}

			} else {
				N = aArray.length;
				for (var i=0; i<sumArray.length; i++){
					for (aj = 0; aj <N; aj++) {
						a = aArray[aj]
						for (bj = 0; bj<N; bj++) {
							b = aArray[bj];
							for (cj = 0; cj<N; cj++) {
								c = aArray[cj];
								if ((a+b+c) == sumArray[i]) {
									if(numberInArray(getABCMaxMinStep(a,b,c), stepArray)){

										$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"</li>");
										count++;
									}
								}
							}
						}
					}
				}
			}
			break;

		}

	}
	
	if (count == 0) {
		$("#six-ol-two").append("<li>无结果</li>");
	}

});


});
