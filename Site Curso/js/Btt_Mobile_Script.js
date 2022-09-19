const btt_mobile = document.getElementById("Btt_mobile");


function toggle_menu(event){
    
    if(event.type == 'touchstart'){

     event.preventDefault();}

    const botao = document.getElementById("NavMobile");
    botao.classList.toggle("activ2");
   
}


btt_mobile.addEventListener('click', toggle_menu);

btt_mobile.addEventListener('touchstart', toggle_menu);