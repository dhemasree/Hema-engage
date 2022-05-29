export const getRecommendationData = async (api) => {
  const recRes = await fetch(api);
  const recData = await recRes.json();

  await recData.map(async (movie) => {
    const imgRes = await fetch(
      `https://api.themoviedb.org/3/find/${movie.imdbId}?api_key=9d1b442446aba80b91001ae5b8ecdfef&language=en-US&external_source=imdb_id`
    );
    const imgResData = await imgRes.json();

    try {
      movie["poster_path"] = imgResData.movie_results[0].poster_path;
    } catch (err) {
      console.log(err);
    }
  });

  return recData;
};

export const getImageData = async (id) => {
  const imgRes = await fetch(
    `https://api.themoviedb.org/3/find/${id}?api_key=9d1b442446aba80b91001ae5b8ecdfef&language=en-US&external_source=imdb_id`
  );
  return await imgRes.json();
};
