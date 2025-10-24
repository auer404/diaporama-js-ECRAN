// Activer le bouton "diapo suivante"

/* On vise #bouton_diapo_suivante (en gardant la logique des sélecteurs CSS).

Dans l'expression suivante :
    - document correspond à la page HTML
    - .querySelector() est une fonction fournie par le document, servant à désigner un (ou plusieurs) élément(s) de la page
    - "#bouton_diapo_suivante" est l'information que l'on fournit à la fonction querySelector() pour lui dire quoi chercher. On appelle cela un paramètre de fonction
    -.onclick est une fonction appartenant à notre bouton, qui se déclenchera dès que l'utilisateur cliquera dessus
    - afficher_diapo_suivante est le nom de l'action que l'on veut "greffer" à cette fonction (ou événement) onclick.

*/

document.querySelector("#bouton_diapo_suivante").onclick = afficher_diapo_suivante;
// peut aussi s'écrire document.querySelector("#bouton_diapo_suivante").onclick = function() { afficher_diapo_suivante() }

document.querySelector("#bouton_diapo_precedente").onclick = afficher_diapo_precedente;

document.querySelector("#bouton_diapo_1").onclick = function() { afficher_diapo(1); }
document.querySelector("#bouton_diapo_2").onclick = function() { afficher_diapo(2); }
document.querySelector("#bouton_diapo_3").onclick = function() { afficher_diapo(3); }
document.querySelector("#bouton_diapo_4").onclick = function() { afficher_diapo(4); }
document.querySelector("#bouton_diapo_5").onclick = function() { afficher_diapo(5); }

/* On doit aussi définir à quoi correspond afficher_diapo_suivante. Comme cela correspond à une action à mener (donc à du code), on rangera ce code dans une fonction */

function afficher_diapo_suivante() {
    
    // Stocker la diapo actuellement affichée (pour retrouver à l'étape 3 la suivante)
    var la_diapo = document.querySelector(".diapo.visible");

    // Rendre invisible la diapo actuellement affichée
    // (en enlevant la classe "visible" sur elle)
    la_diapo.classList.remove("visible");

    // Rendre visible la diapo suivante (la propriété nextElementSibling d'un élément HTML correspond à l'élément qui le suit)

    var la_diapo_suivante = la_diapo.nextElementSibling;

    if (la_diapo_suivante != null) {
        // si la_diapo suivante n'est pas null, ce bloc s'exécute

        la_diapo_suivante.classList.add("visible");

    } else {
        // sinon c'est ce bloc qui s'exécute
        document.querySelector(".diapo:first-child").classList.add("visible");
        //querySelector(".diapo") fonctionnerait aussi, car dans le cas où plusieurs éléments correspondent aux critères donnés à querySelector(), c'est le premier qui sera désigné. Donc ici on revient à la première diapo.

        // Pour arrêter le défilement automatique une fois qu'on a vu toutes les images :
        clearInterval(cycle);

    }

}

function afficher_diapo_precedente() {
    
    // Identique à la fonction afficher_diapo_suivante
    var la_diapo = document.querySelector(".diapo.visible");

    la_diapo.classList.remove("visible");

    // Rendre visible la diapo précédente

    var la_diapo_precedente = la_diapo.previousElementSibling; // previousElementSibling au lieu de nextElementSibling

    if (la_diapo_precedente != null) {
        // si la_diapo précédente n'est pas null, ce bloc s'exécute

        la_diapo_precedente.classList.add("visible");

    } else {
        // sinon c'est ce bloc qui s'exécute
        document.querySelector(".diapo:last-child").classList.add("visible");
        // :last-child au lieu de :first-child

        clearInterval(cycle);

    }

}

// Comment afficher une diapo au choix ?
function afficher_diapo(numero) {

    //console.log("On devrait voir s'afficher la diapo " + numero);

    // Note : en CSS, il existe aussi des fonctions, dont une qui nous sera utile ici : nth-child()
    // Exemple pour afficher la 3eme diapo dans la console : console.log( document.querySelector(".diapo:nth-child(3)") );

    // Ce qui ne change pas : on doit toujours trouver la diapo actuellement visible et la rendre invisible

    document.querySelector(".diapo.visible").classList.remove("visible");

    // Ce qui change :
    // - Il n'y a plus de relation à trouver entre la dipo que l'on a rendue invisible et celle à rendre visible
    // - On doit trouver laquelle rendre visible en se basant sur le paramètre "numero" de notre fonction
    // - On n'est plus obligés (mais ça reste une bonne pratique) de vérifier l'existence de la diapo que l'on cherche à afficher

    document.querySelector( ".diapo:nth-child(" + numero + ")" ).classList.add("visible");

}

// Déclenchement du défilement automatique :
// On veut re-déclencher notre fonction afficher_diapo_suivante toutes les 4 secondes (4000 millisecondes)
var cycle = setInterval(afficher_diapo_suivante, 4000);

