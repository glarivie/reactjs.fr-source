---
title: La gestion des erreurs
---

**En JavaScript comme dans les autres langages, il est possible de se prémunir d'un arrêt inopiné du programme, en exécutant les parties de code sensibles au sein d'un block d'essai**

Le fameux <kbd>try</kbd> / <kbd>catch</kbd>, que l'on peut aussi rencontrer dans d'autres langage comme le **PHP** par exemple, permet de gérer plus facilement les erreurs.

C'est une combinaison très utile lorsque l'on souhaite lancer un bout de code dont on ne peut pas connaître la réponse à 100%. C'est souvent le cas lorsque l'on veut se connecter à une base de données, à une **API**, ou que l'on veut se prémunir d'une erreur de l'utilisateur, lors du remplissage d'un formulaire par exemple:

``` js
var lastTweet;

try {
  // Je veux récupérer mon dernier tweet via l'api public de twitter
  fetch('https://api.twitter.com/1.1/users/show.json?screen_name=twitterdev', {
    method: 'GET',
  }).then(function (response) {
    if (response.ok) {
      lastTweet = response.json();
    } else {
      throw new Error('Erreur - Impossible de récupérer le dernier tweet');
    }
  });
} catch (error) {
  if (error) {
    lastTweet = 'Pas de dernier tweet';
    console.error(error);
  }
} finally {
  console.log('try/catch terminé, mon application n\'a pas plantée');
}
```

Dans l'exemple ci-dessus, je tente de récupérer des informations sur un serveur que je ne controle pas. L'**API** *twitter* me permet de récupérer ces informations, mais à tout moment le serveur peut ne pas répondre et faire planter mon application si je ne protège pas l'appel avec un <kbd>try</kbd> / <kbd>catch</kbd>.

Les erreurs du block <kbd>try</kbd> sont automatiquement renvoyé dans le block <kbd>catch</kbd>, mais il est également possible de générer ses propres erreurs manuellement en instanciant une nouvelle erreur avec <kbd>throw new Error()</kbd>.

Le block <kbd>try</kbd> / <kbd>catch</kbd>, dispose en **JavaScript**, du block <kbd>finally</kbd>, qui permet d'exécuter un morceau de code dans le cas où il y a une erreur, et dans le cas où n'y en a pas.

> Pour obtenir plus d'informations sur la fonctionnalité expérimentale **fetch**, vous pouvez consulter la [documentation de fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch)
