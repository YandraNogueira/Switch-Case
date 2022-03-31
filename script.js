function mostrarTexto(resultadoBotao){

    switch(resultadoBotao){
        case 1: {
            let div = document.getElementById("texto");
            div.classList.remove("esconder");
            div.classList.add("inner");
            document.getElementById("texto").innerHTML = "Fique em casa, peça para fazerem as compras por você!";
            break;
        }
        case 2:{
            let div = document.getElementById("texto");
            div.classList.remove("esconder");
            div.classList.add("inner");
            document.getElementById("texto").innerHTML = "Fique em casa, tome sol e faça exercícios leves!";
            break;
        }
        case 3: {
            let div = document.getElementById("texto");
            div.classList.remove("esconder");
            div.classList.add("inner");
            document.getElementById("texto").innerHTML = "Fique em casa, e cuide de sua saúde!";
            break;
        }
        case 4:{
            let div = document.getElementById("texto");
            div.classList.remove("esconder");
            div.classList.add("inner");
            document.getElementById("texto").innerHTML = "Faça compras pelos mais idosos, mas use sempre a máscara!";
            break;
        }
    }
}
