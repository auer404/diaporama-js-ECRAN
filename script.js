/* SCRIPT DIAPORAMA VERSION 2
TODO :

- Améliorations interface (voir version Bootstrap pour inspi) :
    > boutons : aspect personnalisé
    > boutons : inclure DANS surface diaporama
    > boutons : prévoir aspect "surbrillance" à donner à celui correspondant à la diapo affichée
    > diapo : plus juste une image mais possibilité d'afficher un titre / une légende

- Optimiser gestion des clics sur boutons numérotés
- Résoudre redondance entre nos 3 fonctions
- Etre moins tributaires de la structure HTML

- Confort d'utilisation : interruption du défilement automatique au survol

- Gérer plusieurs diaporamas sur une même page ?

*/

////////////////////////////////////////////// Gestion des clics

document.querySelector("#bouton_diapo_suivante").onclick = afficher_diapo_suivante;
document.querySelector("#bouton_diapo_precedente").onclick = afficher_diapo_precedente;

document.querySelector("#bouton_diapo_1").onclick = function() { afficher_diapo(1); }
document.querySelector("#bouton_diapo_2").onclick = function() { afficher_diapo(2); }
document.querySelector("#bouton_diapo_3").onclick = function() { afficher_diapo(3); }
document.querySelector("#bouton_diapo_4").onclick = function() { afficher_diapo(4); }
document.querySelector("#bouton_diapo_5").onclick = function() { afficher_diapo(5); }

/////////////////////////////////////////////// Fonctions

function afficher_diapo_suivante() {
    
    var la_diapo = document.querySelector(".diapo.visible");
    la_diapo.classList.remove("visible");

    var la_diapo_suivante = la_diapo.nextElementSibling;

    if (la_diapo_suivante != null) {
        la_diapo_suivante.classList.add("visible");
    } else {
        document.querySelector(".diapo:first-child").classList.add("visible");
        clearInterval(cycle);
    }

}

function afficher_diapo_precedente() {
    
    var la_diapo = document.querySelector(".diapo.visible");
    la_diapo.classList.remove("visible");

    var la_diapo_precedente = la_diapo.previousElementSibling;

    if (la_diapo_precedente != null) {
        la_diapo_precedente.classList.add("visible");
    } else {
        document.querySelector(".diapo:last-child").classList.add("visible");
        clearInterval(cycle);
    }

}

function afficher_diapo(numero) {
    document.querySelector(".diapo.visible").classList.remove("visible");
    document.querySelector( ".diapo:nth-child(" + numero + ")" ).classList.add("visible");
}

////////////////////////////////////////////// Déclenchement défilement automatique

var cycle = setInterval(afficher_diapo_suivante, 4000);


