const s = document.getElementById("switch");
const bulb = document.getElementById("bulb");
const txt = document.getElementById("status");
const bulbSwitch = () => {
    bulb.classList.toggle("on");
    s.classList.toggle("active");
    if(bulb.classList.contains("on")){
        txt.innerText = "ON";
    }
    else{
        txt.innerText = "OFF";
    }
}

s.addEventListener("click", bulbSwitch);
