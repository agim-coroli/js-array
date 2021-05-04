// #1
// #1.1 let monTab = ['crabe', 'crevette', 'homard', 'cloporte']
let monTab = ['crabe', 'crevette', 'homard', 'cloporte'];

// #1.2 Supprimer le dernier élément de l'array
monTab.splice(monTab.length-1);

// #1.3 Supprimer le premier élément de l'array
monTab.shift();

// #1.4 Ajouter un élément a la fin de l'array
monTab.push("Bonjour");

// #1.5 Ajouter un élément au debut de l'array
monTab.unshift("Aurevoir");

// #1.6 Mettre le deuxième élément en majuscule 
monTab.splice(1, 1, monTab[1].toUpperCase());

// #1.7 Changer l'ordre de l'array
monTab.reverse();

// #2
// #2.1 Ordonner les chiffres


// #2.2 let chiffres = [4, 5, 2, 1, 3]
let ch = [4, 5, 2, 1, 3];

// #2.3 Première methode (Ordonner)
// 1, 2, 3, 4, 5
ch.sort()
console.log(ch);

// #2.5 Deuxième methode (Concaténer les chiffres en un string)
// # 1-2-3-4-5
let ch2 = ch.join("-");
console.log(ch2);

// #2.7 Utiliser une méthode qui permet de revenir a la chaine de caractères en un tableau
// #2.8 Afficher l'array avec les chiffres ordonnées
console.log(ch2.split());

// #3
// #3.1 Créez un tableau vide
let tab = [];

//         - ## Ajouez 10 élément dans votre array
tab.push("elem1","elem2","elem3","elem4", "elem5", "elem6", "elem7","elem8","elem9","elem10");

//         - ## Affichez le contenu de l'array et sa taille
console.log(tab);
console.log(tab.length);

//         - ## Touvez l'index de chaque éléments
console.log(tab.indexOf("elem5"));

//         - ## Utiliser une methode qui permet de supprimer un element grâce à l'index
tab.splice(4, 1);
console.log(tab);
        
//         - ## Créez un tableau vide et rajoutez toutes les personnes de la classe. Faite un console.log de quelqu'un aléatoirement dans le tableau
let classe = [];
classe.push("Adil", "Agim", "Ali", "Antoine", "Chris", "Elvis", "Haroune", "IliasD", "IliasE", "Jean", "Kevin", "Lira", "Mouna", "Nasila", "Seif", "Nathan", "Stan", "Yassine", "VanHoa");

//on va générer un index aléatoire
// console.log(Math.floor(Math.random()*classe.length));
console.log(classe[Math.floor(Math.random()*classe.length)]);


//         - ## En une ligne supprimer 'Nathan' du tableau
classe.splice(classe.indexOf("Nathan"), 1);
console.log(classe);

// PEMDAS
// ordre de priorité des opérations
// 1. Parenthèses
// 2. Exposants
// 3. Multiplication/Division
// 4. Addition/Soustraction