import Link from 'next/link';

export default function MovieCard({ movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-white text-lg font-semibold">{movie.title}</h3>
          <p className="text-gray-400">{movie.release_date}</p>
        </div>
      </div>
    </Link>
  );
}
