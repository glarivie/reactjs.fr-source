---
title: Les types et les variables
---

**Dans n'importe quels langages de programmation, les types et les variables sont les deux principales notions de bases à connaître pour démarrer son apprentissage**

Même si les types et les variables se ressemblement beaucoup d'un langage à l'autre il n'est pas forcement inutile de faire une petite piqure de rappel sur ces notions fondamentales.

Une variable possède un nom afin de pouvoir être de nouveau utilisée dans le code et permet de stocker une valeur. Cette valeur possède généralement un type et parmis les types les plus classiques, on retrouve les nombres et les chaînes de caractères.

## Déclarer une variables

Pour déclarer une variable en JavaScript, il suffit d'utiliser les mots clés <kbd>var</kbd>, <kbd>let</kbd>, ou <kbd>const</kbd>. <kbd>let</kbd> et <kbd>const</kbd> sont deux nouveaux mots clés pour déclarer des variables dans la norme **ES6** du **JavaScript**. Ils fonctionnent comme <kbd>var</kbd> à quelques différences près que nous verrons dans un chapitre dédié plus tard.

Le mot clé <kbd>var</kbd> est suivi d'un dénominateur. C'est le nom de la variable. Il est normalement unique dans tout le code pour éviter les confusions :

``` javascript
// Ceci est un commentaire
var maVariable = 42; // Je déclare une variable
```

Ici j'ai déclaré une variable avec le mot clé <kbd>var</kbd>. Ma variable se nomme *maVariable* et contient la valeur *42*, une donnée de type numérique.

Il est également possible de réassigner une nouvelle valeur à une variable très simplement.

``` javascript
maVariable = 'hello';
```

On n'utilise plus de mot clés ici, on fait simplement un rappel sur le nom de notre variable et on lui réassigne une valeur avec le symbole <kbd>=</kbd> comme nous l'avons fait lors de la création de celle-ci.

## Les types de variables

Chaque variable fait référence à une valeur en mémoire, et cette valeur possède un **type**.

En **JavaScript** il existe plusieurs types de variabales. Parmis les plus courrant on trouve les nombres et les chaînes de caractères:

``` javascript
var monNombre = 42; // Type nombre
var maChaine = 'hello'; // Type chaine de caractères
```

En **JavaScript** on peut aussi stocker des tableaux, des objets, et même des fonctions dans une variable. Le type <kbd>function</kbd> est aussi un autre type de variable dans le langage:

``` javascript
var monTableau = [12, 'bonjour', ['hello', 'salut'], 42];
var monObjet = {
  nom: 'Jean',
  age: 42,
  disBonjour: function() {
    console.log('Bonjour !');
  },
};
var uneFonction = function(a, b) {
  return a + b;
};

monObjet.disBonjour(); // Bonjour !
console.log(monObject.nom); // Jean
console.log(uneFonction(monTableau[0], monObject.age)); // 52
```
Comme vous pouvez le constater, le **JavaScript** est très permissif, et on peut stocker à peut près tout et n'importe quoi dans une variable.

Le type est néanmoins important pour les opérations courantes, il faut donc garder une certaines cohérence dans vos données:

``` js
var chiffre = 7;
var nombre = 42;
var anneeCourante = '2016';

console.log(chiffre + nombre); // 49
console.log(nombre + anneeCourante); // 422016
```

Les chaînes de caractères ne peuvent pas s'additionner mathématiquement avec des variables de type nombre. Il faudra au préalable les convertir:

``` js
console.log(chiffre.toString() + nombre.toString()); // 742
console.log(nombre + parseInt(anneeCourante, 10)); // 2058
```

On reproche souvent au **JavaScript** de manquer d'une librairie standard fournie et etoffée, cependant, vous trouverez assez facilement votre bonheur dans la documentation, où de nombreuses méthodes comme <kbd>toString</kbd> et <kbd>parseInt</kbd> existent.
