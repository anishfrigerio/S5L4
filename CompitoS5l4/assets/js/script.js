//TOGGLE MENU

function toggleMenu() {
    document.getElementById("menu").classList.toggle("mostra");
  }
  
 //BUTTONS
  
  var fontSize = document.getElementById('font-size');
  
  document.getElementById("btn-small").addEventListener("click", function () {
    document.querySelector(".change").style.fontSize = "20px";
    fontSize.innerHTML = '20px';
  });
  
  document.getElementById("btn-big").addEventListener("click", function () {
    document.querySelector(".change").style.fontSize = "100px";
    fontSize.innerHTML = '100px';
  });
  
 
  
  document.getElementById("btn-color").addEventListener("click", function () {
    document.querySelector(".change").style.color = "#425F57";
  });
  
  
  
  document.getElementById("btn3").addEventListener("click", function () {
    document.querySelector(".change").style.textTransform = "uppercase";
  });
  
  
  document.getElementById("btn4").addEventListener("click", function () {
    document.querySelector(".change").style.visibility = "hidden";
  });
  
  
  document.getElementById("btn5").addEventListener("click", function () {
    document.querySelector(".change").style.visibility = "visible";
  });
  

  document.getElementById("btn6").addEventListener("click", function () {
    document.querySelector(".change").style.textTransform = "lowercase";
  });
  
  
  //TASKS
  
  let lista = document.querySelectorAll('li');
  
  for (var i = 0; i < lista.length; i++) {
    lista[i].addEventListener('mouseover', function () {
      this.classList.add('selected');
    });
    lista[i].addEventListener('mouseout', function () {
      this.classList.remove('selected');
    });
    lista[i].addEventListener('click', function () {
      this.classList.toggle('done');
    });
  }