const input = document.body.querySelector('.input').children.length;
const CSpan = document.body.querySelector('.count');
  document.querySelector("input").addEventListener("keydown", function(e){
    const value =document.querySelector("#inputId").value
    const array = Array.of(...value)
    CSpan.innerHTML=array.length+1
    console.log(array.length);
    const key = e.key
    if(key === "Backspace"){
        CSpan.innerHTML=array.length-1
        console.log("put backspaces");
    }
  })