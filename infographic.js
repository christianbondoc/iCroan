window.onload = function() {
  document.body.className += ' loaded'
};



var b1 = document.getElementById("bt1");
var b2 = document.getElementById("bt2");
var b3 = document.getElementById("bt3");
var b4 = document.getElementById("bt4");
var b5 = document.getElementById("bt5");
var b6 = document.getElementById("bt6");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");
var info4 = document.getElementById("info4");
var info5 = document.getElementById("info5");
var info6 = document.getElementById("info6");
var bar1 = document.getElementById("bar1");
var bar2 = document.getElementById("bar2");
var bar3 = document.getElementById("bar3");
var bar4 = document.getElementById("bar4");
var bar5 = document.getElementById("bar5");
var bar6 = document.getElementById("bar6");

var barout1 = document.getElementById("barout1");


var num = 0;
b1.addEventListener("click", function(){
    num++
    if (num ==1){
    info1.style.opacity="1";
    barout1.style.width = "410px";
    barin1.style.opacity="1";
    }
    if (num ==2){
    info1.style.opacity="0";
    barout1.style.width = "0";
    barin1.style.opacity="0";
    }
    if (num >=2){
        num = 0;
    }
});

b2.addEventListener("click", function(){
    num++
    if (num ==1){
    info2.style.opacity="1";
    barout2.style.width = "400px";
    barout2.style.transform ="translate(0px,0)"
    barin2.style.opacity="1";
    }
    if (num ==2){
    info2.style.opacity="0";
    barout2.style.width = "0px";
    barout2.style.transform ="translate(400px,0)"
    barin2.style.opacity="0";
    }
    if (num >=2){
        num = 0;
    }
});

b3.addEventListener("click", function(){
    num++
    if (num ==1){
    info3.style.opacity="1";
    barout3.style.width = "510px";
    barin3.style.opacity="1";
    }
    if (num ==2){
    info3.style.opacity="0";
    barout3.style.width = "0";
    barin3.style.opacity="0";
    }
    if (num >=2){
        num = 0;
    }
});

b4.addEventListener("click", function(){
    num++
    if (num ==1){
    info4.style.opacity="1";
    barout4.style.width = "320px";
    barout4.style.transform ="translate(0px,0)"
    barin4.style.opacity="1";
    }
    if (num ==2){
    info4.style.opacity="0";
    barout4.style.width = "0px";
    barout4.style.transform ="translate(320px,0)"
    barin4.style.opacity="0";
    }
    if (num >=2){
        num = 0;
    }
});

b5.addEventListener("click", function(){
    num++
    if (num ==1){
    info5.style.opacity="1";
    barout5.style.width = "210px";
    barin5.style.opacity="1";
    }
    if (num ==2){
    info5.style.opacity="0";
    barout5.style.width = "0";
    barin5.style.opacity="0";
    }
    if (num >=2){
        num = 0;
    }
});

b6.addEventListener("click", function(){
    num++
    if (num ==1){
    info6.style.opacity="1";
    barout6.style.width = "300px";
    barout6.style.transform ="translate(0px,0)"
    barin6.style.opacity="1";
    }
    if (num ==2){
    info6.style.opacity="0";
    barout6.style.width = "0px";
    barout6.style.transform ="translate(300px,0)"
    barin6.style.opacity="0";
    }
    if (num >=2){
        num = 0;
    }
});


var barin2 = document.getElementById("barin2");

