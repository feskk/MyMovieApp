import MovieCard from './MovieCard';

export default function MovieGrid({ movies }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {/* Vérifie que `movies` existe et qu'il s'agit d'un tableau */}
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      ) : (
        <p className="text-white">Aucun film trouvé.</p>
      )}
    </div>
  );
}
