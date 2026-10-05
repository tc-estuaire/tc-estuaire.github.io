function toggleDropdown(id) {
    // RECUPERATION DES LISTES DEROULANTES
    const allDropdowns = document.querySelectorAll('.dropdown-content');
    const target = document.getElementById(id);

    // BOUCLE CHAQUE LISTE
    allDropdowns.forEach(dropdown => {
        // SI CLIC SUR LIGNE CHANGER L'ETAT DE LA LIGNE
        if (dropdown === target) {
            dropdown.classList.toggle('show');
        } 
        // SINON ON ASSURE QU'ELLE SOIT FERMEE
        else {
            dropdown.classList.remove('show');
        }
    });
}