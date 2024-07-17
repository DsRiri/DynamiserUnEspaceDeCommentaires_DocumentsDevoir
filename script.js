document.addEventListener('DOMContentLoaded', function () {
    const formulaireCommentaire = document.querySelector('form');
    const listeCommentaires = document.getElementById('comment-list');
    const messageErreur = document.getElementById('error-message');
    const champPrenom = document.getElementById('first-name');
    const champNom = document.getElementById('last-name');
    const champMessage = document.getElementById('message');
  
    formulaireCommentaire.addEventListener('submit', function (event) {
      event.preventDefault();  // Empêche l'envoi traditionnel du formulaire
  
      const prenom = champPrenom.value.trim();
      const nom = champNom.value.trim();
      const message = champMessage.value.trim();
  
      // Vérifie si les champs ne sont pas vides
      if (prenom === "" || nom === "" || message === "") {
        messageErreur.style.display = 'block';
        return;
      }
  
      // Cache le message d'erreur s'il était affiché auparavant
      messageErreur.style.display = 'none';
  
      // Crée un nouvel élément de commentaire
      const nouveauCommentaire = document.createElement('div');
      nouveauCommentaire.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500', 'border-t', 'border-gray-200');
  
      const contenuCommentaire = `
        <div class="flex-1 py-10">
          <h3 class="font-medium text-gray-900">${prenom} ${nom}</h3>
          <div class="prose prose-sm mt-4 max-w-none text-gray-500">
            <p>${message}</p>
          </div>
        </div>
      `;
  
      nouveauCommentaire.innerHTML = contenuCommentaire;
  
      // Ajoute le nouveau commentaire à la liste des commentaires
      listeCommentaires.appendChild(nouveauCommentaire);
  
      // Vide les champs du formulaire
      champPrenom.value = '';
      champNom.value = '';
      champMessage.value = '';
    });
  });