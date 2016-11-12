---
title: Les fonctions en JavaScript
---

**Les boucles en JavaScript vous permettent d'exécuter une portion de code plusieurs fois, mais au même endroit seulement. Avec les fonctions vous aller pouvoir appeler une portion de code dynamique n'importe où dans un fichier**

Le second avantage des fonctions est leur capacité à exécuter du code modulable. En effet les fonctions en **JavaScript**, peuvent appeler des paramètres pour s'exécuter.

Il existe deux façons de déclarer une fonction: utiliser le mot-clé <kbd>function</kbd> ou injecter une fonction *anonyme* dans une variable avec <kbd>var</kbd>.

``` js
function ajouter (param1, param2) {
  return param1 + param2;
}

var soustraire = function (param1, param2) {
  return param1 - param2;
};

console.log(ajouter(1, 3)); // 4
console.log(soustraire(3, 1)); // 2
```

Les paramètres des fonctions en **JavaScript** sont tous optionels, contrairement à certains langages. Prennez bien en compte cette particularité lors de la création de vos fonctions, ou pensez à vérifier les entrées pour éviter les erreurs.

``` js
var soustraire = function (param1, param2) {
  return param1 - param2;
};

console.log(soustraire(1)); // NaN
```

> En **JavaScript**, <kbd>NaN</kbd> siginifie *Not a Number*.

Dans l'exemple ci-dessous, ce genre de retour est parfaitement normal, car notre fonction attend un paramètre valide pour pouvoir retourner son résultat. Pour fonctionner elle doit prendre un deuxième paramètre de type *numérique* ou *chaîne de caractères*, alors qu'ici *param2* vaut <kbd>undefined</kbd> car il n'est pas défini.

À vous de faire les vérification nécessaire pour faire fonctionner votre fonction, mais comme je vous l'avais annoncé plus haut, l'absence de paramètres n'est pas un problème pour le **JavaScript** lorsqu'il doit exécuter une fonction.
