function StilNou () {

  function changeStyle(elem){
    elem.style.color = "#333"
  }
  function changeStyle2(elem){
    elem.style.color = "#f7f7f7"
  }
  function changeStyle3(elem){
    elem.style.border = "3px solid black"
  }
  function changeStyle4(elem)
  {
    elem.style.color = "#F5C518"
  }

  const button = document.querySelectorAll("button")
  button[2].onclick = () => { 
    changeStyle(button[2])
    changeStyle2(document.getElementById("Galerie"))
    changeStyle3(document.getElementsByClassName("poster")[0])
  }
  button[1].onclick = () => { 
    changeStyle(button[1])
    const chestii = document.getElementsByTagName("a") 
    for(let i=2;i<chestii.length;i++)
    {
      changeStyle4(chestii[i])
    }

  }

}
window.onload = StilNou