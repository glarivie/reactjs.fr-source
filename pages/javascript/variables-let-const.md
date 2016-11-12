---
title: Les nouvelles variables ES6
---

**JavaScript ES6 introduit deux nouveaux mot-clés pour déclarer des variables: let et const.**

Finit l'utilisation de <kbd>var</kbd>, place aux deux nouveaux mot-clés <kbd>const</kbd> et <kbd>let</kbd> !

Les variables sont maintenant *scopées*, ce qui veut dire que leur valeur n'existe qu'entre les accolades dans lesquelles elles sont initialisées :

``` js
const test1 = 42;

for (let index = 0; index < 3; index++) {
  const test2 = index;
}

console.log(test1); // 42
console.log(test2); // undefined
```

À l'intérieur de la boucle la constante <kbd>test2</kbd> est *scopées* et sa valeur n'est pas accessible en dehors des accolades du <kbd>for</kbd>. Pourtant sa valeur va changer en mémoire, pendant un court instant, le temps que le code s'exécute. En revanche <kbd>test1</kbd> fait partie du *scope global*, donc elle est accessible partout dans le fichier.

## Différences entre let et const ?

<kbd>const</kbd> et <kbd>let</kbd> permettent tous les deux de déclarer des variables, mais <kbd>const</kbd> ne peut pas être réassigné, c'est ce qu'on appelle une *constante*.

> Utilisez <kbd>const</kbd> le plus souvent possible, n'utilisez <kbd>let</kbd> que dans les moment où vous n'avez pas le choix et êtes obligés de réassigner une variable.<br/>
( cf. example ci-dessus avec <kbd>for</kbd> ).

Les *contantes* ne peuvent pas être écrasée non-plus. Il n'est pas possible de réustiliser dans le même *scope*, la même référence à une variable initialisée avec <kbd>const</kbd>, car elle pointe déjà vers une valeur existante en mémoire :

``` js
const test = 42;
let test1 = 8;

for (let index = 0; index < 3; index++) {
  const test2 = index;
}

const test = 12; // Erreur, test est déja déclaré
let test1 = 37; // let permet de re-déclarer une variable
const test2 = 11; // test2 peut être déclaré car il n'existe pas dans ce scope
```
