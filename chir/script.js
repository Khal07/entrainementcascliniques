// --- CONFIGURATION ---
const SECRET_CODE = "INTERNAT2025"; // <--- CHANGE TON MOT DE PASSE ICI

// --- LOGIQUE ---

// Éléments du DOM
const loginScreen = document.getElementById('login-screen');
const appContent = document.getElementById('app-content');
const passInput = document.getElementById('passcode');
const errorMsg = document.getElementById('error-msg');

// Vérifier si l'utilisateur est déjà connecté au chargement
window.onload = function() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        showApp();
    }
};

// Fonction pour vérifier le mot de passe
function checkCode() {
    const userCode = passInput.value;
    
    if (userCode === SECRET_CODE) {
        // Succès
        localStorage.setItem('isLoggedIn', 'true'); // On mémorise la connexion
        showApp();
    } else {
        // Erreur
        errorMsg.textContent = "Code incorrect. Réessayez.";
        passInput.value = "";
        passInput.focus();
    }
}

// Fonction pour afficher l'application et cacher le login
function showApp() {
    loginScreen.style.opacity = '0';
    setTimeout(() => {
        loginScreen.style.display = 'none';
        appContent.style.display = 'block';
    }, 300); // Petite transition fluide
}

// Fonction de déconnexion
function logout() {
    localStorage.removeItem('isLoggedIn');
    location.reload(); // Recharge la page pour revenir au login
}

// Permettre la touche "Entrée" dans le champ mot de passe
passInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkCode();
    }
});