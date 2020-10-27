let colors = ['red','blue','green','skyblue','yellow','navy'];

let btn = document.getElementById("button");

btn.addEventListener('click',function(){
    var randomColor = colors[Math.floor(Math.random()*10)];

    let vado = document.getElementById('vado');

    vado.style.background = randomColor;

})