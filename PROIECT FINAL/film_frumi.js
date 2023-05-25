  function StilUnu(){ 
    document.querySelectorAll("button")[2].style.color = "#333"
    document.querySelectorAll("button")[2].style.backgroundColor = "#F5C518"
    document.getElementById("Galerie").style.color = "#f7f7f7"
    document.getElementsByClassName("poster")[0].style.border = "5px solid black"
  }
  

  function StilDoi(){
    document.querySelectorAll("button")[1].style.color = "#333"
    const chestii = document.getElementsByTagName("a") 
    for(let i=2;i<chestii.length;i++)
    {
      chestii[i].style.color = "#F5C518"
    }
  }
  

  function Sterge(){
      var element = document.getElementsByClassName("continut")[0].lastChild;
      if (element) {
          element.remove();
      }
  }
  function Adauga(){
      var newElement = document.createElement("a");
      newElement.textContent = "Chestie";
      document.getElementsByClassName("continut")[0].appendChild(newElement);
  }

  function showKeyPreventDefault(event) {
    event.preventDefault();
  } 

  function convertToUpper() {
    var inputElement = document.getElementById('nume');
    var inputValue = inputElement.value;
    var uppercaseValue = inputValue.toUpperCase();
  
    alert(uppercaseValue);
  }


window.onload = () => {

  document.getElementById("submit").addEventListener('click', convertToUpper)

  document.querySelectorAll("button")[1].addEventListener('click', StilDoi)
  document.querySelectorAll("button")[2].addEventListener('click', StilUnu)

  document.getElementById("1").addEventListener('click', Sterge);
  document.getElementById("2").addEventListener('click', Adauga);

  document.addEventListener("keydown", function(event) {
    var btn = document.getElementById("culoare");
    if (event.key == "c") { 
      btn.style.backgroundColor = "red";
    }
  });

  document.getElementById('prenume').addEventListener('keydown', showKeyPreventDefault);

  document.getElementById('Actori').addEventListener('click', function(event) {
    document.getElementById('fundal').style.backgroundColor="#444"
    event.stopPropagation();
  });

  document.getElementById('fundal').addEventListener('click', function() {
    document.getElementById('fundal').style.backgroundColor="#333"
  });
}
