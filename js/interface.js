window.addEventListener('load', canvas, false);

function canvas() {
  var link = "page1";
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');

  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
  page1 = document.getElementById("page1");

  
  function switchLinks(isLink){
    if (isLink!="page1") {
      document.getElementById("page1").style.visibility="hidden";
    }
  
    if (isLink=="page1") {
      document.getElementById("page1").style.visibility="visible";
    }
  
  }

  switchLinks(link);  
}


window.addEventListener('load', canvas2, false);

function canvas2() {
  var link2="page2";
  var canvas2 = document.getElementById("canvas2");
  var context2 = canvas2.getContext('2d');

  canvas2.width = document.body.clientWidth;
  canvas2.height = document.body.clientHeight;
  page2 = document.getElementById("page2");

  function switchLinks2(isLink){
    if (isLink!="page2") {
      document.getElementById("page2").style.visibility="hidden";
    }
  
    if (isLink=="page2") {
      document.getElementById("page2").style.visibility="visible";
    }
  
  }
  
  switchLinks2(link2);  
}



window.addEventListener('load', canvas3, false);

function canvas3() {
  var link3 = "page3";
  var canvas3 = document.getElementById("canvas3");
  var context3 = canvas3.getContext('2d');

  canvas3.width = document.body.clientWidth;
  canvas3.height = document.body.clientHeight;
  page3 = document.getElementById("page3");

  function switchLinks3(isLink){
    if (isLink!="page3") {
      document.getElementById("page3").style.visibility="hidden";
    }
  
    if (isLink=="page3") {
      document.getElementById("page3").style.visibility="visible";
    }
  
  }
  
  switchLinks3(link3);  
}

