var data = '[["Bruno Faure", "N"], ["Anne Lalou","N"], ["Chef de projet Web","N"], ["UX Design","N"], ["Slack","N"], ["Open Innovation","N"], ["Intelligence Artificielle","N"], ["Ecole","N"], ["Internet","N"], ["Google Drive","N"], ["Transformation digitale","N"], ["Big Data","N"], ["Incubateur","N"], ["Licorne","N"], ["Crowdfunding","N"], ["Millenials","N"], ["Hackathon","N"], ["MOOC","N"], ["Cloud","N"], ["GIF","N"], ["Objets Connectés","N"], ["Imprimante 3D","N"], ["Chatbot","N"], ["Casque de VR","N"], ["Mobile","N"], ["Algorithme","N"], ["SEO","N"], ["Responsive","N"], ["User Centric","N"], ["UI/UX","N"], ["Insight","N"], ["HTML/CSS","N"], ["Questionnaires","N"], ["Team Building","N"], ["Start-Up","N"], ["Partenaire","N"], ["Crypto-monnaie","N"], ["Veille sectorielle","N"], ["Recrutement","N"], ["Créativité","N"], ["Manager","N"], ["Soutenances","N"], ["Photoshop","N"], ["Design","N"], ["Apple","N"], ["Montage vidéo","N"]]'; 

var json = JSON.parse(data); // Conversion du tableau pour l'utiliser

var randomArray = json[Math.random() * json.length | 0]; // Math.random pour une valeur aléatoire, et l'autre je sais pas

var page_base = document.getElementById("page_base");

var page_jeu = document.getElementById("page_jeu");

var text_guess = document.getElementById("to_guess");

var time_left = document.getElementById("time_left");

var reseter = document.querySelector('#reset');

window.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("button_launch").click();
    }
});

function launch_game() {

    text_guess.innerHTML = randomArray[0];
    page_base.style.display = "none";
    page_jeu.style.display = "initial";
    t();

}

function reset() {
    location.reload();
}

    





