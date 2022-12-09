//un pulsante che conta i click effettuati e che dopo 10 click, si ferma per 3 secondi.


const button = document.getElementById('btn');
console.log(button);
button.innerHTML = 'click';
let counter = 0;

button.addEventListener('click', function(){

    if (counter < 10){
        counter = counter + 1;
        button.innerHTML = 'click' + ' ' + counter;
    } else{
        setTimeout(() =>{
            counter = 0;
        }, 3000);
    } 
})