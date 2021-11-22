window.onload = function () {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log("DOM ready!");
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("form submitted!");


        if (document.getElementById("inputNom").value.length < 5) {
            console.log("nom error");
            document.querySelector(".modal-title").textContent = "Erreur"

            document.querySelector(".modal-body").innerHTML = "Le champs NOM doit contenir au moins 5 caractère !";  
            myModal.show();

        }
    
    
        else if (document.getElementById("inputPrenom").value.length < 5) {
            console.log("prenom error");
            
            document.querySelector(".modal-title").textContent = "Erreur"

            document.querySelector(".modal-body").innerHTML = "Le champs Prénom doit contenir au moins 5 caractère !";  
            myModal.show();



        }
      });



    // Y mettre le code Javascript pour valider tous les champs du formulaire
};

 
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
let dateNaissance = new Date(2018, 8, 22); // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#syntaxe
let dateNaissanceTimestamp = dateNaissance.getTime();
let nowTimestamp = Date.now()


