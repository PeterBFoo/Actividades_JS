function afegir_nom() {
    let nom = document.getElementById("nom");
    let paragraf = document.createElement("p")
    paragraf.appendChild(document.createTextNode(nom.value));
    document.getElementsByTagName("main")[0].appendChild(paragraf);
}

function calcular_nota() {
    let nota = document.getElementsByName("nota");
    let nota_final = 0;

    for(i=0; i < nota.length; i++) {
        nota_final += parseInt(nota[i].value);
    }

    nota_final = nota_final / i;

    let escriure = document.getElementById("notes").getElementsByTagName("p");

    escriure[escriure.length - 1].appendChild(document.createElement("p").appendChild(document.createTextNode(nota_final)))
}

function conversion() {
    let consulta = document.getElementById("conversio");
    let numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let numero_lletra = false;

    for (i=0; i < numeros.length; i++) {
        if (consulta.value[0] == numeros[i]) {
            numero_lletra = true
        }
    }

    if (numero_lletra == false) {
        alert("La paraula introduida comença amb una lletra")
    }

    else {
        alert("La paraula introduida comença per un número")
    }
}

function cambiar_resaltado() {
    let paragraf = document.getElementsByTagName("p");
    let titols = document.getElementsByTagName("h4");

    for (i=0; i < paragraf.length; i++) {
        paragraf[i].className = "";
    }

    for (i=0; i < titols.length; i++) {
        titols[i].className = "resaltar"
    }
}