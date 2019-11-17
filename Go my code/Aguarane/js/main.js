function myFunction() {
    console.log(document.getElementsByClassName("form1")[0].style.fontWeight)
    var str = document.getElementsByClassName("form1")[0];
    if(str.style.fontWeight=="bold"){
        str.style.fontWeight="normal";
    }
    else{
        str.style.fontWeight="bold"
    }
} 
function myFunction2() {
    console.log(document.getElementsByClassName("form1")[0].style.fontStyle)
    var str = document.getElementsByClassName("form1")[0];
    if(str.style.fontStyle=="italic"){
        str.style.fontStyle="normal";
    }
    else{
        str.style.fontStyle="italic"
    }  
}
function myFunction3() {
    console.log(document.getElementsByClassName("form1")[0].style.textDecoration)
    var str = document.getElementsByClassName("form1")[0];
    if(str.style.textDecoration=="underline"){
        str.style.textDecoration="";
    }
    else{
        str.style.textDecoration="underline"
    }
}
function myFunction4() {
   document.getElementsByClassName("form1")[0].style.fontSize=  document.getElementById("selection").value;
}
function myFunction5() {
    document.getElementsByClassName("form1")[0].style.fontFamily= document.getElementById("family").value;
}
