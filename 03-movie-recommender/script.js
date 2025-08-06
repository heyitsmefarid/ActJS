function log(message) {
  console.log(message);
  document.getElementById("output").innerHTML += message + "<br>";
}

const movies = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { title: "Frozen", genre: "Animation", rating: 7.5 },
  { title: "The Godfather", genre: "Crime", rating: 9.2 },
  { title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

const ratings = movies.filter(movie => movie.rating >= 8);
log("The movies that have ratings greater than or equal to 8 are:");
ratings.forEach(movie => {
  log(`TITLE : ${movie.title} - GENRE : ${movie.genre} - RATINGS : ${movie.rating}`);
});

log("------------------------------------------------------");

const movieList = movies.map(movie => 
  `${movie.title} (${movie.genre}) - ${movie.rating} ⭐`
);
movieList.forEach(movie => log(movie));

log("------------------------------------------------------");

const recommend = (movie, minRating = 8) => movie.rating >= minRating;
movies.forEach(movie => {
  log(`${movie.title}, recommended? : ${recommend(movie)}`);
});
