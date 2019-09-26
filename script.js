
  document.getElementById("bottomNavBTN").addEventListener("click", bottomNav);
  document.getElementById("bottomNavRightBTN").addEventListener("click", seeAllRight);

  document.getElementById("BTN1").addEventListener("click", flexGrow);
  document.getElementById("BTN2").addEventListener("click", flexGrow);
  document.getElementById("BTN3").addEventListener("click", flexGrow);
  document.getElementById("BTN4").addEventListener("click", flexGrow);
  document.getElementById("BTN5").addEventListener("click", flexGrow);
  document.getElementById("BTN6").addEventListener("click", flexGrow);
  document.getElementById("BTN7").addEventListener("click", flexGrow);

  document.getElementById("content7").addEventListener("click", seeAll);
  document.getElementById("content6").addEventListener("click", seeAll);
  document.getElementById("content5").addEventListener("click", seeAll);
  document.getElementById("content4").addEventListener("click", seeAll);
  document.getElementById("content3").addEventListener("click", seeAll);
  document.getElementById("content2").addEventListener("click", seeAll);
  document.getElementById("content1").addEventListener("click", seeAll);
  document.getElementById("backBTN").addEventListener("click", goBack);


function  bottomNav(id){

  var element = document.getElementById("squaresWrap");
    if(element.classList.contains("squaresWrapLeft")){
        element.classList.remove("squaresWrapLeft");
    }else{
        element.classList.add("squaresWrapLeft");
    }
  }


function flexGrow(){
  var element = document.getElementById(this.id);

  if(!(element.classList.contains("squareOpen"))){
    element.classList.add("squareOpen");
  }else{
      element.classList.remove("squareOpen");
  }
}


function seeAll(){
 console.log("test")
  var element = document.getElementById(this.id);
  var body = document.getElementsByTagName("BODY")[0];
  if(!(body.classList.contains("bodyLeft"))){
    element.classList.add("contentLeft");
    body.classList.add("bodyLeft");
  }else{
    body.classList.remove("bodyLeft");
    element.classList.remove("contentLeft");
  }
}

function seeAllRight(){
  var element = document.getElementById(this.id);
  var body = document.getElementsByTagName("BODY")[0];
  if(!(body.classList.contains("bodyRight"))){
    // element.classList.add("contentLeft");
    body.classList.add("bodyRight");
  }else{
    body.classList.remove("bodyRight");
      // element.classList.remove("contentLeft");
  }
}

function  goBack(){
  var body = document.getElementsByTagName("BODY")[0];
  body.classList.remove("bodyLeft");
  body.classList.remove("bodyRight");
}
