SUM_COUNT = 190;
STEP_COUNT = 36;
NUMBER_COUNT = 36;

SUM_COUNT_2 = 106;
STEP_COUNT_2 = 21;
NUMBER_COUNT_2 = 21;

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


function genrateCheckboxWith20(idString)
{
	var aaaa = [1,11,6,16,2,12,7,17,3,13,8,18,4,14,9,19,5,15,10,20,0];
	for (var j = 0; j < aaaa.length; j++) {
		var idS = idString+'-'+aaaa[j];
		var div = '<div class="mdl-cell mdl-cell--1-col">';
		var divEnd = '</div>';
		var label = '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="'+idS+'">';
		var input = '<input type="checkbox" id="'+idS+'" class="mdl-checkbox__input">';
		var span = '<span class="mdl-checkbox__label">'+aaaa[j]+'</span>';
		var labelEnd = '</label>';
		$("#"+idString).append(div+label+input+span+labelEnd+divEnd);
	}
}


function genrateCheckboxWithStep(count, idString, step)
{
	var row = count / step + 1;
	for (var j = 0; j < step; j++) {
		for (var i = 0; i < row; i++) {
			var ij = i * step + j;
			if (ij < count) {
				var idS = idString+'-'+ij;
				var div = '<div class="mdl-cell mdl-cell--1-col">';
				var divEnd = '</div>';
				var label = '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="'+idS+'">';
				var input = '<input type="checkbox" id="'+idS+'" class="mdl-checkbox__input">';
				var span = '<span class="mdl-checkbox__label">'+ij+'</span>';
				var labelEnd = '</label>';
				$("#"+idString).append(div+label+input+span+labelEnd+divEnd);
			}
			
		}
		
	}
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

function sortArray(a){//排序大小
	var i = j = t = 0;
	for (i = 0; i < a.length; i++){
		for (j = 0; j < a.length; j++){
			if (a[i] < a[j]){
				t = a[i];
				a[i] = a[j];
				a[j] = t;
			} 
		}
	}
	return a;
}

function reGetArrayFromSelection(start, end, sumArray)
{
	var startString = $("#"+start).find("option:selected").text();
	var endString = $("#"+end).find("option:selected").text();

	var start = Number(startString);
	var end = Number(endString);

	if (end <= start) {
		return sumArray;
	}

	var len = sumArray.length;
	for (var i = len, j = 0; j <= end - start; i++, j++) {
		sumArray[i] = start + j;
	}

	sumArray.sort();
	var re=[sumArray[0]];
	for(var i = 1; i < sumArray.length; i++)
	{
		if( sumArray[i] !== re[re.length-1])
		{
			re.push(sumArray[i]);
		}
	}

	return sortArray(re);
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

	$("#a-six-all-three").click(function(){ 
		setAll("a-six-three", true, NUMBER_COUNT);
	}); 
	$("#a-six-all-cancle-three").click(function(){ 
		setAll("a-six-three", false, NUMBER_COUNT);
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
	genrateCheckboxWithStep(NUMBER_COUNT, "a-six", 10);
	genrateCheckboxWithStep(NUMBER_COUNT, "b-six", 10);
	genrateCheckboxWithStep(NUMBER_COUNT, "c-six", 10);
	genrateCheckboxWithStep(NUMBER_COUNT, "d-six", 10);
	genrateCheckboxWithStep(NUMBER_COUNT, "e-six", 10);
	genrateCheckboxWithStep(NUMBER_COUNT, "f-six", 10);

	setAllButton();

	hideAll();


	genrateCheckbox(SUM_COUNT_2, "sum-single-two");
	genrateCheckbox(STEP_COUNT_2, "sum-step-two");
	genrateSelect(SUM_COUNT_2, "sum-start-two");
	genrateSelect(SUM_COUNT_2, "sum-end-two");
//	genrateCheckboxWithStep(NUMBER_COUNT_2, "a-six-two", 10);
//	genrateCheckbox(NUMBER_COUNT_2, "a-six-two");
	genrateCheckboxWith20("a-six-two");


	genrateCheckbox(SUM_COUNT, "sum-single-three");
	genrateCheckbox(STEP_COUNT, "sum-step-three");
	genrateSelect(SUM_COUNT, "sum-start-three");
	genrateSelect(SUM_COUNT, "sum-end-three");
	genrateCheckboxWithStep(NUMBER_COUNT, "a-six-three", 10);	

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
        sumArray = reGetArrayFromSelection("sum-start", "sum-end",sumArray);


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
        	$("#result-one").html(0);
        } else {
        	$("#result-one").html(count+"种组合");
        }


    });


$("#six-two").click(function(){
	$("#six-ol-two").empty();

	var N = NUMBER_COUNT_2;
	var count = 0;
	var sumArray = getArrayFromCheckbox(SUM_COUNT_2, "sum-single-two");
	var stepArray = getArrayFromCheckbox(STEP_COUNT_2, "sum-step-two");
	var aArray = getArrayFromCheckbox(NUMBER_COUNT_2, "a-six-two");

	var numberCount = Number($("#number-count").find("option:selected").text());

	sumArray = reGetArrayFromSelection("sum-start-two", "sum-end-two",sumArray);

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
			/*
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
				*/
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
			//}
			break;
			case 1:
			/*
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
				*/
				for (var i=0; i<sumArray.length; i++){
					for (a=1; a<N; a++) {
						if ((a) == (sumArray[i]-sumOfArray(aArray))) {
							if (!numberInArray(a, aArray)){
								step = stepNumber(a, b, c, d, e, f, aArray);
								if(numberInArray(step, stepArray)){
									if (aArray.length == 1) {
										$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+aArray[0]+"</li>");
									} else if (aArray.length == 2) {
										$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+aArray[0]+"+"+aArray[1]+"</li>");
									} else if (aArray.length == 3) {
										$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+aArray[0]+"+"+aArray[1]+"+"+aArray[2]+"</li>");
									} else if (aArray.length == 4) {
										$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+aArray[0]+"+"+aArray[1]+"+"+aArray[2]+"+"+aArray[3]+"</li>");
									} else if (aArray.length == 5) {
										$("#six-ol-two").append("<li>"+sumArray[i]+"="+a+"+"+aArray[0]+"+"+aArray[1]+"+"+aArray[2]+"+"+aArray[3]+"+"+aArray[4]+"</li>");
									}
									count++;
								}
							}
						}
					}
				}
				
			//}
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
			/*
			var found10 = false;
        	for (var i = 0; i < aArray.length; i++) {
        		if(aArray[i]>=10) {
        			found10 = true;
        			break;
        		}
        	}
			if (found10){
				*/
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
/*
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
			*/
			break;

		}

	}

	if (count == 0) {
		$("#six-ol-two").append("<li>无结果</li>");
		$("#result-two").html(0);
	} else {
		$("#result-two").html(count+"种组合");
	}

});

$("#six-three").click(function(){
	$("#six-ol-three").empty();

	var N = NUMBER_COUNT;
	var count = 0;
	var sumArray = getArrayFromCheckbox(SUM_COUNT, "sum-single-three");
	var stepArray = getArrayFromCheckbox(STEP_COUNT, "sum-step-three");
	var aArray = getArrayFromCheckbox(NUMBER_COUNT, "a-six-three");

	var numberCount = Number($("#number-count-three").find("option:selected").text());

	sumArray = reGetArrayFromSelection("sum-start-three", "sum-end-three",sumArray);

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
												$("#six-ol-three").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"+"+d+"+"+e+"+"+aArray[0]+"</li>");
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
												$("#six-ol-three").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"+"+d+"+"+aArray[0]+"</li>");
											} else if (aArray.length == 2) {
												$("#six-ol-three").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"+"+d+"+"+aArray[0]+"+"+aArray[1]+"</li>");
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
											$("#six-ol-three").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"+"+aArray[0]+"</li>");
										} else if (aArray.length == 2) {
											$("#six-ol-three").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"+"+aArray[0]+"+"+aArray[1]+"</li>");
										} else if (aArray.length == 3) {
											$("#six-ol-three").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"+"+aArray[0]+"+"+aArray[1]+"+"+aArray[2]+"</li>");
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
			/*
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
				*/
				for (var i=0; i<sumArray.length; i++){
					for (a=1; a<N; a++) {
						for (b=a+1; b<N; b++) {
							if ((a+b) == (sumArray[i]-sumOfArray(aArray))) {
								if (!numberInArray(a, aArray) && !numberInArray(b, aArray)){
									step = stepNumber(a, b, c, d, e, f, aArray);
									if(numberInArray(step, stepArray)){
										if (aArray.length == 1) {
											$("#six-ol-three").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+aArray[0]+"</li>");
										} else if (aArray.length == 2) {
											$("#six-ol-three").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+aArray[0]+"+"+aArray[1]+"</li>");
										} else if (aArray.length == 3) {
											$("#six-ol-three").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+aArray[0]+"+"+aArray[1]+"+"+aArray[2]+"</li>");
										} else if (aArray.length == 4) {
											$("#six-ol-three").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+aArray[0]+"+"+aArray[1]+"+"+aArray[2]+"+"+aArray[3]+"</li>");
										}
										count++;
									}
								}
							}
						}
					}
				}
			//}
			break;
			case 1:
			/*
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
				*/
				for (var i=0; i<sumArray.length; i++){
					for (a=1; a<N; a++) {
						if ((a) == (sumArray[i]-sumOfArray(aArray))) {
							if (!numberInArray(a, aArray)){
								step = stepNumber(a, b, c, d, e, f, aArray);
								if(numberInArray(step, stepArray)){
									if (aArray.length == 1) {
										$("#six-ol-three").append("<li>"+sumArray[i]+"="+a+"+"+aArray[0]+"</li>");
									} else if (aArray.length == 2) {
										$("#six-ol-three").append("<li>"+sumArray[i]+"="+a+"+"+aArray[0]+"+"+aArray[1]+"</li>");
									} else if (aArray.length == 3) {
										$("#six-ol-three").append("<li>"+sumArray[i]+"="+a+"+"+aArray[0]+"+"+aArray[1]+"+"+aArray[2]+"</li>");
									} else if (aArray.length == 4) {
										$("#six-ol-three").append("<li>"+sumArray[i]+"="+a+"+"+aArray[0]+"+"+aArray[1]+"+"+aArray[2]+"+"+aArray[3]+"</li>");
									} else if (aArray.length == 5) {
										$("#six-ol-three").append("<li>"+sumArray[i]+"="+a+"+"+aArray[0]+"+"+aArray[1]+"+"+aArray[2]+"+"+aArray[3]+"+"+aArray[4]+"</li>");
									}
									count++;
								}
							}
						}
					}
				}
				
			//}
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
												$("#six-ol-three").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"+"+d+"+"+e+"+"+f+"</li>");
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
											$("#six-ol-three").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"+"+d+"+"+e+"</li>");
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
										$("#six-ol-three").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"+"+d+"</li>");
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
			/*
			var found10 = false;
        	for (var i = 0; i < aArray.length; i++) {
        		if(aArray[i]>=10) {
        			found10 = true;
        			break;
        		}
        	}
			if (found10){
				*/
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
										$("#six-ol-three").append("<li>"+sumArray[i]+"="+a+"+"+b+"+"+c+"</li>");
										count++;
									}
								}
							}
						}
					}
				}
/*
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
			*/
			break;

		}

	}

	if (count == 0) {
		$("#six-ol-three").append("<li>无结果</li>");
		$("#result-three").html(0);
	} else {
		$("#result-three").html(count+"种组合");
	}

});

$("#reset-1").click(function(){

	window.location.reload();

	setAll("sum-single", false, SUM_COUNT);

	setAll("sum-step", false, STEP_COUNT);

	$("#sum-start").find("option[text='0']").attr("selected",true); 
	$("#sum-end").find("option[text='0']").attr("selected",true); 


	setAll("a-six", false, NUMBER_COUNT);
	setAll("b-six", false, NUMBER_COUNT);
	setAll("c-six", false, NUMBER_COUNT);
	setAll("d-six", false, NUMBER_COUNT);
	setAll("e-six", false, NUMBER_COUNT);
	setAll("f-six", false, NUMBER_COUNT);

	$("#six-ol").empty();
});

$("#reset-2").click(function(){
	window.location.reload();

	setAll("sum-single-two", false, SUM_COUNT);
	setAll("sum-step-two", false, STEP_COUNT);
	setAll("a-six-two", false, NUMBER_COUNT);

	$("#six-ol-two").empty();
});

$("#reset-3").click(function(){
	window.location.reload();
});

$("#clear-1").click(function(){
	$("#six-ol").empty();
});

$("#clear-2").click(function(){
	$("#six-ol-two").empty();
});

$("#clear-3").click(function(){
	$("#six-ol-three").empty();
});

$("#show-one-1").click(function(){
  $("#sum-single").show();
});

$("#hide-one-1").click(function(){
  $("#sum-single").hide();
});


$("#show-one-2").click(function(){
  $("#sum-step").show();
});

$("#hide-one-2").click(function(){
  $("#sum-step").hide();
});


$("#show-one-3").click(function(){
  $("#a-six").show();
});

$("#hide-one-3").click(function(){
  $("#a-six").hide();
});

$("#show-one-4").click(function(){
  $("#b-six").show();
});

$("#hide-one-4").click(function(){
  $("#b-six").hide();
});

$("#show-one-5").click(function(){
  $("#c-six").show();
});

$("#hide-one-5").click(function(){
  $("#c-six").hide();
});

$("#show-one-6").click(function(){
  $("#d-six").show();
});

$("#hide-one-6").click(function(){
  $("#d-six").hide();
});

$("#show-one-7").click(function(){
  $("#e-six").show();
});

$("#hide-one-7").click(function(){
  $("#e-six").hide();
});


$("#show-one-8").click(function(){
  $("#f-six").show();
});

$("#hide-one-8").click(function(){
  $("#f-six").hide();
});




$("#show-two-1").click(function(){
  $("#sum-single-two").show();
});

$("#hide-two-1").click(function(){
  $("#sum-single-two").hide();
});


$("#show-two-2").click(function(){
  $("#sum-step-two").show();
});

$("#hide-two-2").click(function(){
  $("#sum-step-two").hide();
});


$("#show-two-3").click(function(){
  $("#a-six-two").show();
});

$("#hide-two-3").click(function(){
  $("#a-six-two").hide();
});



$("#show-three-1").click(function(){
  $("#sum-single-three").show();
});

$("#hide-three-1").click(function(){
  $("#sum-single-three").hide();
});


$("#show-three-2").click(function(){
  $("#sum-step-three").show();
});

$("#hide-three-2").click(function(){
  $("#sum-step-three").hide();
});


$("#show-three-3").click(function(){
  $("#a-six-three").show();
});

$("#hide-three-3").click(function(){
  $("#a-six-three").hide();
});


function hideAll()
{

  $("#sum-single").hide();
  $("#sum-step").hide();
  $("#a-six").hide();
  $("#b-six").hide();
  $("#c-six").hide();
  $("#d-six").hide();
  $("#e-six").hide();
  $("#f-six").hide();

  $("#sum-single-two").hide();
  $("#sum-step-two").hide();
  $("#a-six-two").hide();

  $("#sum-single-three").hide();
  $("#sum-step-three").hide();
  $("#a-six-three").hide();
  
}

});
