let getTens=document.querySelector('.tens');
let getSecs=document.querySelector('.seconds')
let getMins=document.querySelector('.mins')
let startbtn=document.querySelector('.btn-start')
let stopbtn=document.querySelector('.btn-stop')
let resetbtn=document.querySelector('.btn-reset')
let lapbtn=document.querySelector(".btn-lap")
let gethistory=document.querySelector(".lapnum")
let gettimehistory=document.querySelector('.laptimer')
let turn=1;
let ten=00;
let sec=00;
let min=00;
let interval;


startbtn.addEventListener('click',()=>{
    clearInterval(interval)
    interval=setInterval(timer,10);
})
stopbtn.addEventListener('click',()=>{
    clearInterval(interval)

})
resetbtn.addEventListener('click',()=>{
    clearInterval(interval)
    ten="00";
    sec="00";
    min="00";
    getTens.innerHTML=ten;
    getSecs.innerHTML=sec;
    getMins.innerHTML=min;

})
lapbtn.addEventListener('click',()=>{
    var lapTag = document.createElement("p");
    let lapNewline=document.createTextNode("Lap "+turn);
    lapTag.appendChild(lapNewline);
    var timeTag = document.createElement("p");
    let timeNewline=document.createTextNode(min+":"+sec+":"+ten);
    timeTag.appendChild(timeNewline);
    var lapElement = document.getElementById("new-lap");
    var timeElement= document.getElementById("new-time");
    lapElement.appendChild(lapTag)
    timeElement.appendChild(timeTag)
    turn++
})
function timer(){
    ten++
    if(ten<9){
        getTens.innerHTML="0"+ten
    }
    if(ten > 9){
        getTens.innerHTML=ten
    }
    if(ten>99){
        ten=0
        sec++
        getTens.innerHTML=00;
        if(sec<10){
        getSecs.innerHTML="0"+sec
        }else{
            getSecs.innerHTML=sec
        }
    }
    if(sec>59){
        sec=0
        min++
        getSecs.innerHTML=00;
        if(min<9){
            getMins.innerHTML="0"+min
        }else{
            getMins.innerHTML=min
        }
    }
}
