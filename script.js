function mudarDesc(idatual, idmais) {
    console.log('ping');
    var bot = 'mais' + idmais;
    var botM = document.getElementById(bot);
    var desc = document.getElementById(idatual);

    if (botM && desc) { 
        console.log('botM.src:', botM.src);

        if (botM.src.includes("icon-minus.svg")) {
            console.log('piing');
            desc.style.display = 'none';
            botM.src = "assets/images/icon-plus.svg";
        } else {
            desc.style.display = 'block'; 
            botM.src = "assets/images/icon-minus.svg";
        }
    } else {
        console.error('Elementos não encontrados:', botM, desc);
    }
}
