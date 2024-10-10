// pages/movie/[id].js

import { useRouter } from 'next/router';

export default function MovieDetails({ movie }) {
  const router = useRouter();

  // Si la page est en chargement ou que l'ID est incorrect
  if (router.isFallback || !movie) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="bg-black min-h-screen text-white p-8">
      <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
      <p className="text-gray-400 mb-8">{movie.overview}</p>
      <p>Date de sortie : {movie.release_date}</p>
      <p>Note moyenne : {movie.vote_average}/10</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="mt-8 w-full h-96 object-cover"
      />
    </div>
  );
}

// Récupérer les détails du film côté serveur
export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=fr-FR`
  );
  const movie = await res.json();

  return {
    props: {
      movie,
    },
  };
}
