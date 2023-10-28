const input = document.body.querySelector('.input');
const CSpan = document.body.querySelector('.count');

const newInput = []


const letterCounter =()=>{
    CSpan.innerHTML=newInput.push(input)
    newInput.addEventListener("keydown", function(e){
        if(e.key =="Backspace"){
            newInput.innerHTML=newInput.pop()
        }
    })
}