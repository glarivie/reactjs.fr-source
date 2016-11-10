---
title: Les boucles et les conditions
---

**Autres notions essentielles, les boucles et les conditions, permettent d'insérer les premières briques de la logique de notre code**

## Les conditions

Il est possible grâce aux conditions de choisir d'exécuter ou non une portion du code en fonction d'une condition justement.

On peut alors par exemple vérifier une égalité, vérifier si une valeur existe ou encore vérifier si le retour d'une fonction avant de continuer ou non dans une direction.

``` js
var check = true; // Type booléen

if (check === true) {
  console.log('ma condition est vérifiée');
} else {
  console.log('ma condition est fausse');
}
```

En **JavaScript**, on utilise souvent les mots clés <kbd>if</kbd> et <kbd>else</kbd>, pour effectuer une action si la condition est vraie ou faire autre chose si la condition est fausse.

<kbd>if</kbd>, veut dire *si* et prend ensuite entre parenthèse la condition, et <kbd>else</kbd> veut dire *sinon*, et sert de seconde solution dans le cas ou la condition initiale est fausse.

Pour effectuer des comparaisons, on utilise les symboles <kbd>==</kbd> et <kbd>===</kbd>. Ces symboles sont facultatifs si on ne souhaite vérifier qu'une seule valeur, si elle est *vraie* (true), ou si elle existe (et que du coup elle renvoie *true*).

Les deux égals, vérifie la valeur des valeurs comparées uniquement. On rajoute un troisième égal pour vérifier également le type :

``` js
var nombre = 42;
var chaine = '42';
var test = '';

if (nombre) {
  // La valeur existe, la condition est vraie
} else if (test) { // Sinon si ...
  /* La variable est initialisée mais contient une valeur vide
  Du coup la valeur est fausse pour la condition */
} else if (nombre == chaine) {
  // nombre et chaine contiennent 42, le type est ignoré, la conditon est vraie
} else if (nombre === chaine) {
  // nombre et chaine ne sont pas du même type, la condition est fausse
} else {
  // Facultatif
}
```
> Par soucis de sécurité et de consistence, le <kbd>===</kbd> est presque une convention en **JavaScript**. Préférez donc une comparaison entre des valeurs converties plutôt que l'utilisation du double égal.

La comparaison  permet de déterminer si une condition est vraie, mais le résultat de la condition n'est pas toujours le fruit d'une égalité. En effet, il peut s'agir de déterminer si une variable est plus grande ou plus petite qu'une autre avec les symboles <kbd>></kbd> et <kbd><</kbd>, mais on peut aussi vérifier qu'une condition est bien fausse avec le caratère <kbd>!</kbd>.

En réalité, vérifier qu'une condition est fausse revient à vérifier que c'est bien *vraie* que la condition est fausse. Mais par soucis de lisibilité du code, cela fait parfois sens.

Il est aussi possible de vérifier la variable et d'exécuter un code différent en fonction de sa valeur grace au <kbd>switch</kbd>

``` js
var test = 42;

switch (test) {
  case 43:
    console.log('la condition est fausse');
    break;
  case 42:
    console.log('la condition est vraie');
    break;
  default:
    console.log('si aucune condition n\'est vraie');
}
```
> Certaines rumeurs laissent penser aux dévelopeurs **JavaScript** que le <kbd>switch</kbd> est plus lent à l'éxécution qu'une série de <kbd>if</kbd>, <kbd>else if</kbd>, néanmoins, la lisibilité du code est aussi une chose importante à prendre en compte. À vous de voir de quel côté vous souhaitez vous ranger !

## Les boucles

Les boucles servent à exécuter plusieurs fois une portion de code, tant qu'une condition est *vraie* et indique à la boucle de continuer de tourner.


Il existe plusieurs façon de faire des boucles en **JavaScript**, mais les méthodes les plus classiques restent <kbd>while</kbd> et <kbd>for</kbd> :

``` js
var index = 0;
var tab = ['un', 'deux', 'trois'];

while (tab[index]) {
  console.log('index:', index, 'valeur:', tab[index]);
  index++;
}
```

``` js
var tab = ['un', 'deux', 'trois'];

for (var index = 0; tab[index]; index++) {
  console.log('index:', index, 'valeur:', tab[index]);
}
```

Ci-dessus, deux façon de parcourir les index d'un tableau et de les afficher dans la *console*. Chacune de ces méthodes donne absolument le même résultat, à vous de voir celle qui vous convient le mieux.

Il egalement possible d'utiliser une **méthode de classe** directement implémentée dans le langage **JavaScript**, qui permet d'exécuter une fonction depuis un Objet de type *Array* (tableau) avec le mot clé <kbd>.forEach</kbd> :

``` js
var tab = ['un', 'deux', 'trois'];

tab.forEach(function (element, index) {
  console.log('index:', index, 'valeur:', element);
});
```

Le résultat est toujours identique aux deux façons de faire que nous avons pu voir un peu plus haut avec <kbd>while</kbd> et <kbd>for</kbd>.
