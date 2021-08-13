/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {

  let movieTitle = []; // Define a default value
  for (const movie of movies) { // Loop through the array 'movies'
    movieTitle.push(movie.title) // IF title is present in any elements of movies, push it
  }

  return movieTitle
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {

  if (movies.length === 0){ // Define a guard clause
    return 0
  }

  let highest = movies[0].metascore; // Set a starting value to compare with

  for (let movie of movies){ // Loop through 
    if (highest < movie.metascore) { // IF the starting value is less than other element's metascore
      highest = movie.metascore // Reassign it to the element's metascore
    }
  }
  
  return Number(highest) // Return in number

}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {

  if (movies.length === 0){
    return 0
  }

// let avg = 0 // Realized I don't need this
let total = 0 // Declare a variable to hold an accumulated value 

for (const movie of movies) { // Loop through
  total += Number(movie.imdbRating) // Add up movie.imdbRating and reassign the variable 'total' in Number
}

// avg = total / movies.length // I realized I don't this either 

return Number(total / movies.length)

}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {

  if (movies.length === 0){  // Guard clause
    return {};
  }

// Trying forEach

let rated = {}; // Define a default value
movies.forEach(function(movie) { // loop through the array 'movies', movie =  each element 
  rated[movie.rated] ? rated[movie.rated] ++ : rated[movie.rated] =1; // IF movie's rated is true, increament by 1, OTHERWISE set it at 1
})

// Manually solve this problem
// let rated = {}

// for (const movie of movies) { // loop through = > movie is each element 
//   if (rated[movie.rated]) { // IF the key rated in the new object Rated is present in movie
//     rated[movie.rated] += 1 // Increment the value of the key rated by 1 
//   } 
//   else {
//     rated[movie.rated] = 1 // IF it is not repeating, it is set at 1 because if it exists, it is 1
//   }
  
// }


return rated

}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {

  if (movies.length === 0){
    return null
  }

  let  movieTitle = {};
  for (const movie of movies) {
    if (movie.imdbID === id) {
      // movieTitle = movie
      return movieTitle = movie
    } 
  }

return null
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {

  if (movies.length === 0){
    return [];
  }

let nameByGenre = [];
for(const movie of movies) {
  
  if (movie.genre.toLowerCase().includes(genre.toLowerCase())){
    nameByGenre.push(movie)
  }
}
return nameByGenre
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {


let listOfMovies = [];

for (const movie of movies) {
 
  if (movie.released.split(" ")[2]<= year) {
    listOfMovies.push(movie)
  }

}

return listOfMovies
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {

if (movies.length === 0) {
  return null
}


let mostProfitableMovie = ""

let highest = exampleMovies[0].boxOffice
let starting = Number(highest.replace(/[^0-9.-]+/g,""));

  for (const movie of movies) {
  let number = Number(movie.boxOffice.replace(/[^0-9.-]+/g,""));
  if (number > starting) {
    starting = number
    mostProfitableMovie = movie.title
  }
}

return mostProfitableMovie

}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
