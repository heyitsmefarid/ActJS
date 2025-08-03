// Starter data
const movies = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { title: "Frozen", genre: "Animation", rating: 7.5 },
  { title: "The Godfather", genre: "Crime", rating: 9.2 },
  { title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

const ratings = movies.filter(movie => movie.rating >= 8);
console.log("The movies that have ratings greater than or equal to 8 are:");
ratings.forEach(movie=> {
  console.log(`TITLE : ${movie.title} - GENRE : ${movie.genre} - RATINGS : ${movie.rating}`);
});

console.log("------------------------------------------------------");

const movieList = movies.map(movie => 
  `${movie.title} (${movie.genre}) - ${movie.rating} ⭐`
);
movieList.forEach(movie => console.log(movie));

console.log("------------------------------------------------------");

const recommend = (movie, minRating = 8) => movie.rating >= minRating;
movies.forEach(movie => {
  console.log(`${movie.title}, recommended? : ${recommend(movie)}`);
});