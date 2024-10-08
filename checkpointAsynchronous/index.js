// Tâche 01 : Itérer avec Async/Await
// Objectif :
// Écrire une fonction asynchrone iterateWithAsyncAwait qui prend un tableau de valeurs et journalise chaque valeur avec un délai d'une seconde entre les journaux.


// async function iterateWithAsyncAwait (values) {
//     for (const value of values) {
//          await new Promise (resolve => setTimeout(resolve, 1000))
//          console.log(value)
//     }
// }
// // exemple d'utilsation : 
// const array = [1,2,3,4,5]
// iterateWithAsyncAwait(array)


// Explication :
// La fonction utilise une boucle for...of pour itérer sur chaque valeur du tableau.
// await new Promise(resolve => setTimeout(resolve, 1000)); crée un délai d'une seconde avant de passer à l'élément suivant.

1// ********************************************************************** /// 

// Tâche 02 :  Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.

// async function awaitCall (apiUrl) {

//   try {
//     const response = await fetch (apiUrl) // Attend la reponse de l'api
//     const data = await response.json() // Attend la conversion des données en JSON
//     console.log("data : ", data) // afficher les donnnés
//   } catch (error) {
//     console.error('Error :', error);
//   }

// }
// awaitCall ("https://jsonplaceholder.typicode.com/posts/2")
// Explication :
// fetch(apiUrl) : Simule un appel à une API en utilisant la méthode fetch, qui retourne une Promise.
// await response.json() : Utilise await pour attendre la conversion de la réponse en format JSON.
// console.log(data) : Affiche les données récupérées une fois que la réponse a été reçue et transformée.
// Gestion des erreurs : En utilisant try...catch, vous pouvez capturer et journaliser toute erreur qui pourrait survenir pendant l'appel.
// Exemple d'utilisation :
// L'exemple utilise l'URL https://jsonplaceholder.typicode.com/posts/1, qui est une API de test. Lorsque vous exécutez awaitCall, vous devriez voir les données de la réponse journalisées dans la console.

// Cela devrait vous permettre de simuler efficacement un appel API et de pratiquer l'utilisation d'async/await pour gérer les réponses de manière asynchrone.


//********************************************************************* */
// Tâche 03 : Gérer les Erreurs avec Async/Await

// Objectif :
// Modifier la fonction awaitCall pour gérer les erreurs. Si l'appel API échoue, capturer l'erreur et journaliser un message d'erreur convivial.

async function awaitCall (apiUrl) {

  try {
    const response = await fetch (apiUrl) // Attend la reponse de l'api
    if (!response.ok) {
           throw new Error ('Network Error')
    }
    const data = await response.json() // Attend la conversion des données en JSON
    console.log("data : ", data) // afficher les donnnés
  } catch (error) {
    console.error('Error :', error.message);
  }

}

// Exemple d'utilisation :
// awaitCall('https://api.example.com/data');
//  awaitCall ("https://jsonplaceholder.typicode.com/posts/2")
