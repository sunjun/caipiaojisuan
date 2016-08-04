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

        switch(numberCount) {
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

});
